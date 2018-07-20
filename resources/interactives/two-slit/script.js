var scene, camera, renderer;
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
var circle_lifetime = 4000;

$(function() {
    init();
    let width = $('#container').outerWidth()
    let top =  $('canvas').offset().top
    document.body.style.height = width/2 + top + 5;
});

function init() {

  scene = new THREE.Scene();
  scene.background = new THREE.Color( 0x146bb7 );

  camera = new THREE.PerspectiveCamera( fov, 2, 1, 1000 );
  camera.position.set( 0, 0, 97.5 );
  camera.lookAt(scene.position);

  renderer = new THREE.WebGLRenderer({antialias:true});
  let width = $('#container').outerWidth();
  renderer.setSize( width, width/2 );
  canvasbox = renderer.domElement;
  $('#container').append( renderer.domElement );

  uniforms = THREE.UniformsUtils.merge([
          THREE.UniformsLib['lights'],
          { ambient: { type: 'c', value: new THREE.Color(0xff00ff) } },
          { color:     { value: new THREE.Color( 0x00ACFC ) } }
      ]);

  var planeShader = new THREE.ShaderMaterial({
    uniforms: uniforms,
    vertexShader: document.getElementById( 'vertexshader' ).textContent,
    fragmentShader: document.getElementById( 'fragmentshader' ).textContent,
    lights: true
  });

  var blockShader = new THREE.MeshBasicMaterial( { color: 0xd8d8d8 } )
  var blockGeometry = new THREE.PlaneGeometry( 2, 19.5, 2 );
  var blockGeometry2 = new THREE.PlaneGeometry( 2, 15.5, 2 );
  var block1 = new THREE.Mesh( blockGeometry, blockShader );
  var block2 = new THREE.Mesh( blockGeometry2, blockShader );
  var block3 = new THREE.Mesh( blockGeometry2, blockShader );
  block1.position.set(-.5, 0, 1);
  block2.position.set(-.5, 18, 1);
  block3.position.set(-.5, -18, 1);
  scene.add( block1, block2, block3 );

  var light = new THREE.DirectionalLight(0xff0000);
  light.position.set(0, 0, 1);
  scene.add(light);

  planeShader.transparent = true;

  geometry = new THREE.PlaneBufferGeometry( 104, 52, 160, 80);

  displacement = new Float32Array( geometry.attributes.position.count );

  geometry.addAttribute( 'displacement', new THREE.BufferAttribute( displacement, 1 ) );

  plane = new THREE.Mesh(
      geometry,
      planeShader
  );
  scene.add( plane );

  // var circle_geometry = new THREE.CircleBufferGeometry( 1, 32 );
  // var circle_material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
  // var circle_material_2 = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
  //
  // circle = new THREE.Mesh( circle_geometry, circle_material );
  // circle2 = new THREE.Mesh( circle_geometry, circle_material_2 );
  //
  // scene.add( circle );
  // scene.add( circle2 );
  //
  // circle.position.set(10,10,1)
  // circle2.position.set(-10,-10,1)
  //
  // circle.material.transparent = true;
  // circle2.material.transparent = true;

  // var dragControls = new THREE.DragControls([circle, circle2], camera, renderer.domElement);

  $(window).on( 'resize', onWindowResize );
  // $(renderer.domElement).click(function (e) { //Offset mouse Position
  //       var posX = $(this).offset().left + $(this).width()/2,
  //           posY = $(this).offset().top + $(this).height()/2;
  //       onWindowClick((e.pageX - posX), (e.pageY - posY))
  //   });
  animate();
}

frame = 0;

function animate() {
    animateWave();
    render();
    requestAnimationFrame( animate );
}

// var time = 0;
var CircleArray = []

function animateWave() {

  // var $radio = $('input[name=wave]:checked');
  // var updateDay = $radio.val();
  // var id = $radio.attr('id');
  //
  // A = parseInt(id[0]);
  // B = parseInt(id[1]);
  //
  // var freq1 = $("#freq1").val();
  // var posx1 = circle.position.x;
  // var posy1 = circle.position.y;
  // var freq2 = $("#freq2").val();
  // var posx2 = circle2.position.x;
  // var posy2 = circle2.position.y;

  // time += .05;

  plane.geometry.attributes.displacement.needsUpdate = true;

  for ( var i = 0; i < displacement.length; i ++ ) {
        let vx = plane.geometry.attributes.position.getX(i);
        let vy = plane.geometry.attributes.position.getY(i);
				// displacement[ i ] = A * circularWave(posx1, posy1, vx, vy, time, freq1) +
        //                     B * circularWave(posx2, posy2, vx, vy, time, freq2)
        let displacement_array = [];
        CircleArray.forEach(function(circle) {
          displacement_array.push(circle.wave(vx, vy))
        });
        displacement[i] = displacement_array.reduce((a, b) => a + b, 0);
			}

  // circle.material.opacity = 0.5 + Math.sin(freq1/400 - freq1 * time)/2;
  // circle2.material.opacity = 0.5 + Math.sin(freq2/400 - freq2 * time)/2;
}

function maskRight(x) {
  if (x > 0) { return 1 }
  else { return 0 }
}

function maskLeft(x) {
  return Math.abs(1-maskRight(x))
}

function circularWave(x, y, vx, vy, t, f) {
  let dx = vx - x;
  let dy = vy - y;
  let position = Math.hypot(dx, dy)
  let distance = 4 * t
  if (position < distance) {
    return 1
  }
  else { return 0 }
  // return Math.sin( f/400 * position - f * t);
}

class ExpandingCircle {
  constructor(x, y, right=true) {
    this.x = x;
    this.y = y;
    this.right = right;
    this.time = 0;
    this.speed = 0.00001;
  }

  fadingWave(vx, vy) {
    this.time += this.speed;
    let dx = vx - this.x;
    let dy = vy - this.y;
    let width = 20;
    let separation = Math.hypot(dx, dy);
    let edge = this.time;
    if ((separation < edge) && ((edge - separation) < width)) {
      return (1-(edge - separation)/width) * Math.sin(separation - (edge))
    }
    else { return 0 }
  }

  wave(vx, vy) {
    this.time += this.speed;
    let dx = vx - this.x;
    let dy = vy - this.y;
    let position = Math.hypot(dx, dy)
    if (this.right) {
      return Math.sin(position - this.time) * maskRight(vx);
    }
    else {
      return Math.sin(position - this.time) * maskLeft(vx);
    }
  }

  addTo(arr, timeout=false) {
   arr.push(this); //adding current instance to array
   if (timeout) {
     setTimeout(function() { //setting timeout to remove it later
         arr.shift();
     }, time)
   }
 }
}

function render() {
  renderer.render( scene, camera );
}

function onWindowClick (x, y) {
  $('#message').css('opacity', '0.0');
  let sf = $('#container').outerWidth()/104 // scale factor for mouse location
  new ExpandingCircle(x/sf, -y/sf).addTo(CircleArray)
}

function onWindowResize() {
  let width = $('#container').outerWidth()
  let top =  $('canvas').offset().top
  camera.updateProjectionMatrix();
  renderer.setSize( width, width/2 );
  document.body.style.height = width/2 + top + 5;
}

new ExpandingCircle(0,10,true).addTo(CircleArray)
new ExpandingCircle(0,-10,true).addTo(CircleArray)
new ExpandingCircle(-55,0,false).addTo(CircleArray)
