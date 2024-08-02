import * as THREE from 'three';
// import './styles.css'
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
	canvas: document.querySelector('#bg')
});

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

//Shape
const geometry = new THREE.TorusKnotGeometry( 1, .4, 64, 8 ); 
const material = new THREE.MeshStandardMaterial( { color: 0xffff00, wireframe: true } ); 
const torusKnot = new THREE.Mesh( geometry, material );
scene.add( torusKnot );




let pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);
let ambientLight = new THREE.AmbientLight(0xffffff);

scene.add(pointLight, ambientLight);



camera.position.z = 5;

function animate() {
	torusKnot.rotation.x += 0.01;
	torusKnot.rotation.y += 0.02;

	renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );


