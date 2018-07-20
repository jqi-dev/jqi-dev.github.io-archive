var scene, camera, waveRenderer, crossRenderer, crossShader, crossPlane;
var circle_lifetime = 10000;
var waveArray = [];
var numWaves = 0;
var animTime = new Date;
var fpsCounter = 0;
var resolution = 300; // 156 originally

$(function() {
    init();
    document.body.style.height = documentHeight();
});

function addWave(array) {
  waveArray.set(array, numWaves % 16 * 4); // mod 16 so if array is full latest wave overwrites oldest
  numWaves += 1;
}

function removeWave(index) {
  waveArray[index-2] = 0.0;
  waveArray[index-1] = 0.0;
  waveArray[index+1] = 0.0;
  numWaves -= 1;
}

function decTime() {
  for (i = 0; i < numWaves; i=i+1) {
      let n = (i * 4) + 2;
      if (waveArray[n] != 0) {
        waveArray[n] -= 0.4;
      }
      else {
        removeWave(n)
      }
    }
}

function init() {

  let width = getWidth();
  let waveCanvasHeight = width / 3;
  let crossCanvasHeight = width / 8;

  // Initialize wave array
  waveArray = new Float32Array(64); // maximum of 16 active waves, each with (x position, y position, time, amplitude)
  numWaves = 0; // number of active waves

  // renderer for wave canvas
  waveRenderer = new THREE.WebGLRenderer({antialias:true});
  waveRenderer.setSize( width, waveCanvasHeight );
  $('#container').append( waveRenderer.domElement );

  // renderer for cross-section canvas
  crossRenderer = new THREE.WebGLRenderer({antialias:true});
  crossRenderer.setSize( width, crossCanvasHeight );
  $('#cross-section').append( crossRenderer.domElement );

  scene = new THREE.Scene(); // scene for waves
  scene.background = new THREE.Color( 0x0d8cc6 );
  crossScene = new THREE.Scene(); // scene for cross-section
  bufferScene = new THREE.Scene(); // scene to store buffer texture


  //
  // Camera for all scenes
  //

  camera = new THREE.OrthographicCamera( width / - 2,
  width / 2,
  width / 6,
  width / - 6, -10000, 10000 );
  camera.zoom = width / resolution;
  camera.updateProjectionMatrix();

  //
  // Set up buffer geometry and buffer texture
  //

  var renderTargetParams = {
    minFilter:THREE.LinearFilter,
    stencilBuffer:false,
    depthBuffer:false
  };

  bufferTexture = new THREE.WebGLRenderTarget( width, waveCanvasHeight, renderTargetParams );

  var bufferUniforms = THREE.UniformsUtils.merge([
          { activeWaves: {type: "i", value: 1} },
          { waves: {type: "fv", value: waveArray} },
          { color: { value: new THREE.Color( 0x00ACFC ) } }
      ]);

  var bufferShader = new THREE.ShaderMaterial({
    uniforms: bufferUniforms,
    vertexShader: document.getElementById( 'vertexshader' ).textContent,
    fragmentShader: document.getElementById( 'fragmentshader' ).textContent,
  });
  bufferShader.transparent = true; // so alpha value is used when adding colors

  var bufferGeometry = new THREE.PlaneBufferGeometry(resolution, resolution / 3, resolution, resolution / 3);

  var bufferPlane = new THREE.Mesh(
      bufferGeometry,
      bufferShader
  );
  bufferScene.add( bufferPlane );

  //
  // Wave object, displaying the buffer texture
  //

  var waveMaterial = new THREE.MeshPhongMaterial({map:bufferTexture});
  var waveGeometry = new THREE.PlaneGeometry( resolution, resolution / 3, 4 );
  var waveObject = new THREE.Mesh(waveGeometry, waveMaterial);
  scene.add(waveObject);

  //
  // Cross-section object, which uses a fragment shader to display a section of the buffer texture
  //

  var crossUniforms = {
    bufferTexture: { type: "t", value: bufferTexture },
    size: { type: "v2", value: new THREE.Vector2( getWidth(), getWidth()/8)},
  };

  crossShader = new THREE.ShaderMaterial({
      uniforms: crossUniforms,
      vertexShader: document.getElementById('vertexshader').innerHTML,
      fragmentShader:document.getElementById('fragmentshader-cross-texture').innerHTML
  });

  crossPlane = new THREE.Mesh(
      waveGeometry,
      crossShader
  );
  crossScene.add( crossPlane );

  //
  // Add lights to wave scene
  //

  var ambientLight = new THREE.AmbientLight( 0x46a4d9, 2.0 );
  scene.add( ambientLight );

  var directionalLight = new THREE.DirectionalLight( 0xffffff, 5.0 );
  scene.add( directionalLight );

  //
  //  Handle click and resize events;
  //

  $(window).on( 'resize', onWindowResize );
  $(waveRenderer.domElement).click(function (e) { //Offset mouse Position
        var posX = $(this).offset().left + $(this).width()/2,
            posY = $(this).offset().top + $(this).height()/2;
        onWindowClick((e.pageX - posX), (e.pageY - posY))
    });

  animate();
}

frame = 0;

function animate() {
    // animateWave();
    render();
    decTime();
    // if (goodFPS(getFPS())) { requestAnimationFrame( animate ); }
    // else $('#container').remove();
    requestAnimationFrame( animate );
}

function render() {
  waveRenderer.render(bufferScene, camera, bufferTexture);
  waveRenderer.render(scene, camera);
  crossRenderer.render(bufferScene, camera, bufferTexture);
  crossRenderer.render(crossScene, camera)
}

function onWindowClick (x, y) {
  $('#message').css('opacity', '0.0');
  $('#overlay').css('opacity', '1.0');
  let sf = $('#container').outerWidth()/resolution; // scale factor for mouse location
  addWave([x/sf, -y/sf, resolution, 1]);
}

function getWidth() {
  return $('#container').outerWidth();
}

function getTop() {
  return $('canvas').offset().top;
}

function documentHeight() {
  return getWidth()/3 + getWidth()/8 + getTop() + 5;
}

function onWindowResize() {
  camera.updateProjectionMatrix();
  updateShaderResolution();
  waveRenderer.setSize( getWidth(), getWidth()/3 );
  crossRenderer.setSize( getWidth(), getWidth()/8 );
  document.body.style.height = documentHeight();
}

function updateShaderResolution() {
  crossPlane.material.uniforms.size.value = new THREE.Vector2(getWidth(), getWidth()/8);
}

function getFPS() {
  let newTime = new Date; // get current time
  let fps = 1000 / (newTime - animTime); // conversion from millisecond to fps
  animTime = newTime;
  return fps;
}

function goodFPS(fps) {
  fpsCounter += 1;
  if (fpsCounter > 1) { // allow animation to cycle once (for loading) before determining fps
    return (fps > 10); // 10 fps
  }
  else return true;
}
