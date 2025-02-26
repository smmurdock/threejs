import * as THREE from 'three';

const scene = new THREE.Scene()

const cubeGeometry = new THREE.BoxGeometry(1, 1, 1,)
const cubeMaterial = new THREE.MeshBasicMaterial({ color: "red" })

const cubeMesh = new THREE.Mesh(
    cubeGeometry,
    cubeMaterial
)

console.log(cubeMesh)
console.log(scene)

scene.add(cubeMesh)

console.log(scene)

// Initialize the camera
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    30
)

// Position the camera
camera.position.z = 5
scene.add(camera)