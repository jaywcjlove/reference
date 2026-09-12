Three.js 备忘清单
===

Three.js 是一个跨浏览器的 JavaScript 库和 API，用于创建和显示动画 3D 计算机图形。以下是一些常用的 Three.js 操作和用法。

入门
---

### 安装

```bash
# 使用 npm 安装
npm install three
```

### 基本场景设置

```javascript
import * as THREE from 'three';

// 创建场景
const scene = new THREE.Scene();

// 创建相机
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// 创建渲染器
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 渲染循环
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
```

### 添加几何体

```javascript
// 创建几何体
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);

// 添加到场景
scene.add(cube);
```

### 响应窗口大小调整

```javascript
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
```

几何体与材质
---

### 常用几何体

```javascript
const box = new THREE.BoxGeometry(1, 1, 1);
const sphere = new THREE.SphereGeometry(1, 32, 32);
const plane = new THREE.PlaneGeometry(5, 5);
const cone = new THREE.ConeGeometry(1, 2, 32);
const cylinder = new THREE.CylinderGeometry(1, 1, 2, 32);
```

### 常用材质

```javascript
const basicMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const lambertMaterial = new THREE.MeshLambertMaterial({ color: 0xff0000 });
const phongMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000, shininess: 100 });
const standardMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });
const physicalMaterial = new THREE.MeshPhysicalMaterial({ color: 0xff0000, roughness: 0.5 });
```

灯光
---

### 常用灯光

```javascript
const ambientLight = new THREE.AmbientLight(0x404040); // 环境光
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff); // 点光源
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

const directionalLight = new THREE.DirectionalLight(0xffffff); // 平行光
directionalLight.position.set(0, 1, 0);
scene.add(directionalLight);

const spotLight = new THREE.SpotLight(0xffffff); // 聚光灯
spotLight.position.set(5, 5, 5);
scene.add(spotLight);
```

纹理
---

### 加载纹理

```javascript
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('path/to/texture.jpg');

const material = new THREE.MeshBasicMaterial({ map: texture });
const geometry = new THREE.BoxGeometry();
const cube = new THREE.Mesh(geometry, material);

scene.add(cube);
```

动画
---

### 使用 Tween.js

```javascript
import TWEEN from '@tweenjs/tween.js';

function animate() {
  requestAnimationFrame(animate);
  TWEEN.update();
  renderer.render(scene, camera);
}

const coords = { x: 0, y: 0 }; // 初始坐标
const tween = new TWEEN.Tween(coords)
  .to({ x: 100, y: 100 }, 1000) // 目标坐标和持续时间
  .easing(TWEEN.Easing.Quadratic.Out) // 缓动函数
  .onUpdate(() => {
    cube.position.set(coords.x, coords.y, 0);
  })
  .start();

animate();
```

高级操作
---

### 加载模型

```javascript
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const loader = new GLTFLoader();
loader.load('path/to/model.glb', (gltf) => {
  scene.add(gltf.scene);
});
```

### 使用 OrbitControls

```javascript
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const controls = new OrbitControls(camera, renderer.domElement);

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

animate();
```

### 使用 Raycaster

```javascript
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

function onMouseMove(event) {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(scene.children);

  if (intersects.length > 0) {
    intersects[0].object.material.color.set(0xff0000);
  }
}

window.addEventListener('mousemove', onMouseMove);
```

性能优化
---

### 使用抗锯齿

```javascript
const renderer = new THREE.WebGLRenderer({ antialias: true });
```

### 降低阴影质量

```javascript
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
```

### 使用实例化几何体

```javascript
const geometry = new THREE.InstancedBufferGeometry();
const material = new THREE.MeshBasicMaterial();
const mesh = new THREE.InstancedMesh(geometry, material, count);

scene.add(mesh);
```

工具
---

### Three.js 编辑器

Three.js 编辑器是一个在线工具，可以用来创建和编辑 Three.js 场景。

- [Three.js 编辑器](https://threejs.org/editor/)

### 三维模型和纹理资源

- [Sketchfab](https://sketchfab.com/)
- [Poly Haven](https://polyhaven.com/)

另见
---

- [Three.js 官方文档](https://threejs.org/docs/)
- [Three.js 示例](https://threejs.org/examples/)
