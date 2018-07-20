var scene, camera, renderer, stats;
var plane, displacement, uniforms, geometry, circle, circle2;
var fov = 30,
    isUserInteracting = false,
    cameraDistance = 80,
    onMouseDownMouseX = 0, onMouseDownMouseY = 0,
    lon = 0, onMouseDownLon = 0,
    lat = 0, onMouseDownLat = 0,
    phi = 0, theta = 0;
var A, B;
var canvasbox;
var circle_lifetime = 10000;
var waveArray = [];
var numWaves = 0;
var animTime = new Date;
var fpsCounter = 0;

$(function() {
    init();
    let width = $('#container').outerWidth()
    let height = $('#container').outerWidth()
    let top =  $('canvas').offset().top
    // document.body.style.height = width/3 + top + 5;
});

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

  scene = new THREE.Scene();
  scene.background = new THREE.Color( 0x146bb7 );

  camera = new THREE.PerspectiveCamera( fov, 1, 1, 1000 );
  camera.position.set( 0, 0, 97.5 ); //97.5
  camera.lookAt(scene.position);

  renderer = new THREE.WebGLRenderer({antialias:true});
  let width = $('#container').outerWidth();
  let height = $('#container').outerWidth()
  renderer.setSize( width, height );
  canvasbox = renderer.domElement;
  $('#container').append( renderer.domElement );

  waveArray = new Float32Array(64); // max 16 waves, each with (x position, y position, time, amplitude)
  numWaves = 0; // number of active waves

  uniforms = THREE.UniformsUtils.merge([
          { activeWaves: {type: "i", value: 1} },
          { waves: {type: "fv", value: waveArray} },
          THREE.UniformsLib['lights'],
          { ambient: { type: 'c', value: new THREE.Color(0xff00ff) } },
          { color: { value: new THREE.Color( 0x00ACFC ) } }
      ]);

  var planeShader = new THREE.ShaderMaterial({
    uniforms: uniforms,
    vertexShader: document.getElementById( 'vertexshader' ).textContent,
    fragmentShader: document.getElementById( 'fragmentshader' ).textContent,
    lights: true
  });

  var light = new THREE.DirectionalLight(0xff0000);
  light.position.set(0, 0, 1);
  scene.add(light);

  planeShader.transparent = true;

  geometry = new THREE.PlaneBufferGeometry(64, 64, 64, 64); // 156, 52

  displacement = new Float32Array( geometry.attributes.position.count );

  geometry.addAttribute( 'displacement', new THREE.BufferAttribute( displacement, 1 ) );

  plane = new THREE.Mesh(
      geometry,
      planeShader
  );
  scene.add( plane );

  $(window).on( 'resize', onWindowResize );
  $(renderer.domElement).click(function (e) { //Offset mouse Position
        var posX = $(this).offset().left + $(this).width()/2,
            posY = $(this).offset().top + $(this).height()/2;
        onWindowClick(-(e.pageY - posY), (e.pageX - posX))
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

// // var time = 0;
// var CircleArray = []
//
// function animateWave() {
//
//   plane.geometry.attributes.displacement.needsUpdate = true;
//
//   for ( var i = 0; i < displ acement.length; i ++ ) {
//         let vx = plane.geometry.attributes.position.getX(i);
//         let vy = plane.geometry.attributes.position.getY(i);
//         let displacement_array = [];
//         CircleArray.forEach(function(circle) {
//           displacement_array.push(circle.distance(vx, vy))
//         });
//         displacement[i] = displacement_array.reduce((a, b) => a + b, 0);
// 			}
// }
//
// class ExpandingCircle {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//     this.time = 0;
//     this.speed = 0.00004; // 4
//   }
//
//   distance(vx, vy, f) {
//     this.time += this.speed;
//     let dx = vx - this.x;
//     let dy = vy - this.y;
//     let width = 40;
//     let separation = Math.hypot(dx, dy);
//     let edge = this.time;
//     if ((separation < edge) && ((edge - separation) < width)) {
//       return (1-(edge - separation)/width) * Math.sin(separation - (edge))
//     }
//     else { return 0 }
//   }
//
//   addTo(arr, time) {
//    arr.push(this); //adding current instance to array
//    setTimeout(function() { //setting timeout to remove it later
//        arr.shift();
//    }, time)
//  }
// }

function render() {
  renderer.render( scene, camera );
}

function onWindowClick (x, y) {
  $('#message').css('opacity', '0.0');
  let sf = $('#container').outerWidth()/64 // scale factor for mouse location
  addWave([x/sf, -y/sf, 300, 1]);
  // new ExpandingCircle(x/sf, -y/sf).addTo(CircleArray, circle_lifetime)
}

function onWindowResize() {
  let width = $('#container').outerWidth()
  let height = $('#container').outerWidth()
  let top =  $('canvas').offset().top
  camera.updateProjectionMatrix();
  renderer.setSize( width, height );
  // document.body.style.height = width/3 + top + 5;
}
