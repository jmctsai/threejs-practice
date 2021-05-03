import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js';

let scene, camera, renderer, cube;

function init() {
	scene = new THREE.Scene();

	const fov = 60;
	const aspect = window.innerWidth / window.innerHeight;
	const near = 0.1;
	const far = 1000;

	camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

	renderer = new THREE.WebGLRenderer({
		antialias: true,
		alpha: true,
	});
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

	const geometry = new THREE.BoxGeometry(2, 2, 2);
	// const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });
	const texture = new THREE.TextureLoader().load('textures/crate.gif');
	const material = new THREE.MeshBasicMaterial({ map: texture });
	cube = new THREE.Mesh(geometry, material);
	scene.add(cube);

	camera.position.z = 5;
}

function animate() {
	requestAnimationFrame(animate);

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render(scene, camera);
}

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
}
//event listener to listen for resize browser
window.addEventListener('resize', onWindowResize, false);

init();
animate();
