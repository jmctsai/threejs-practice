import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js';

const scene = new THREE.Scene();

const fov = 60;
const aspect = window.innerWidth / window.innerHeight;
const near = 0.1;
const far = 1000;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
	requestAnimationFrame(animate);

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render(scene, camera);
}

animate();
