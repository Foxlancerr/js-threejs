import WebGL from "three/addons/capabilities/WebGL.js";
import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const circle = new THREE.CircleGeometry(1, 32);
const material = new THREE.MeshBasicMaterial({ color: "#fff" });
const cube = new THREE.Mesh(circle, material);
scene.add(cube);
camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}

// check whether the browsers support webGl
if (WebGL.isWebGLAvailable()) {
  console.log("WebGL is available");
  animate();
} else {
  const warning = WebGL.getWebGLErrorMessage();
  document.getElementById("container").appendChild(warning);
}
