import { videoLoader } from "https://cdn.jsdelivr.net/gh/aadarshbabu/lib/videoLoader/videoLoader.js";
import { loadGLTF } from "https://cdn.jsdelivr.net/gh/aadarshbabu/lib/loader.js";
import * as THREE from "three";
import { MindARThree } from "mindar-image-three";
import { FontLoader } from "https://unpkg.com/three@0.160.0/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "https://unpkg.com/three@0.160.0/examples/jsm/geometries/TextGeometry.js";

document.addEventListener("DOMContentLoaded", () => {
  async function start() {
    const textureLoader = new THREE.TextureLoader();
    const mindThree = new MindARThree({
      container: document.body,
      imageTargetSrc: "assets/target.mind",
    });

    const { renderer, scene, camera } = mindThree;
    const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
    scene.add(light);

    const loadFont = () => {
      return new Promise((resolve, reject) => {
        const loader = new FontLoader();

        loader.load(
          "https://cdn.jsdelivr.net/gh/mrdoob/three.js/examples/fonts/helvetiker_regular.typeface.json",
          (font) => {
            resolve(font); // Resolve the promise with the loaded font
          },
          undefined, // Progress callback (optional)
          (error) => {
            reject(error); // Reject the promise with the error
          }
        );
      });
    };

    const font = await loadFont();

    const [video_asset_f09cfb89a24, video_asset_f09cfb89a24_video] =
      await videoLoader({
        path: "assets/ad2.mp4",
        ratio: 1,
      });

    video_asset_f09cfb89a24.position.set(0, 0, 0.1);

    const isIOS = navigator.appVersion.indexOf("Mac") != -1 ? true : false;

    video_asset_f09cfb89a24_video.muted = isIOS;

    video_asset_f09cfb89a24.scale.set(1, 2.1, 1);

    video_asset_f09cfb89a24.rotation.set(-0.0007963267948964958, 0, 0);

    const target_imagee2ad2a0d30c_iconGeometry = new THREE.PlaneGeometry(
      1,
      2.211453744493392
    );
    const target_imagee2ad2a0d30c_texture =
      textureLoader.load("assets/target.jpg");
    const target_imagee2ad2a0d30c_image = new THREE.MeshBasicMaterial({
      map: target_imagee2ad2a0d30c_texture,
    });
    const target_imagee2ad2a0d30c = new THREE.Mesh(
      target_imagee2ad2a0d30c_iconGeometry,
      target_imagee2ad2a0d30c_image
    );
    target_imagee2ad2a0d30c.scale.set(1, 1, 1);
    target_imagee2ad2a0d30c.position.set(0, 0, 0);
    target_imagee2ad2a0d30c.rotation.set(-0.0007963267948964958, 0, 0);

    const logo_69d86362_bd2469d86_iconGeometry = new THREE.CircleGeometry(0.5);
    const logo_69d86362_bd2469d86_texture = textureLoader.load(
      "assets/circle-wa-sm_113.png"
    );
    const logo_69d86362_bd2469d86_image = new THREE.MeshBasicMaterial({
      map: logo_69d86362_bd2469d86_texture,
    });
    const logo_69d86362_bd2469d86 = new THREE.Mesh(
      logo_69d86362_bd2469d86_iconGeometry,
      logo_69d86362_bd2469d86_image
    );
    logo_69d86362_bd2469d86.scale.set(0.4, 0.4, 1);
    logo_69d86362_bd2469d86.position.set(-0.2, -1.5, 0.1);
    logo_69d86362_bd2469d86.rotation.set(-0.0007963267948964958, 0, 0);
    logo_69d86362_bd2469d86.userData.clickable = true;

    const text_b99b9b31_90dab99b9_textGeo = new TextGeometry("Contact Us", {
      font: font,
      size: 0.1,
      height: 0,
    });

    const text_b99b9b31_90dab99b9_textMaterial = new THREE.MeshBasicMaterial({
      color: 0x073158,
    });

    const text_b99b9b31_90dab99b9 = new THREE.Mesh(
      text_b99b9b31_90dab99b9_textGeo,
      text_b99b9b31_90dab99b9_textMaterial
    );

    text_b99b9b31_90dab99b9.position.set(-0.3, -1.2, 0.1);
    text_b99b9b31_90dab99b9.scale.set(0.8, 0.8, 0.5);
    text_b99b9b31_90dab99b9.rotation.set(-0.0007963267948964958, 0, 0);

    const logo_fd2ddb36_7d5dfd2dd_iconGeometry = new THREE.CircleGeometry(0.5);
    const logo_fd2ddb36_7d5dfd2dd_texture = textureLoader.load(
      "assets/circle-web-sm_114.png"
    );
    const logo_fd2ddb36_7d5dfd2dd_image = new THREE.MeshBasicMaterial({
      map: logo_fd2ddb36_7d5dfd2dd_texture,
    });
    const logo_fd2ddb36_7d5dfd2dd = new THREE.Mesh(
      logo_fd2ddb36_7d5dfd2dd_iconGeometry,
      logo_fd2ddb36_7d5dfd2dd_image
    );
    logo_fd2ddb36_7d5dfd2dd.scale.set(0.4, 0.4, 1);
    logo_fd2ddb36_7d5dfd2dd.position.set(0.3, -1.5, 0.1);
    logo_fd2ddb36_7d5dfd2dd.rotation.set(-0.0007963267948964958, 0, 0);
    logo_fd2ddb36_7d5dfd2dd.userData.clickable = true;

    document.body.addEventListener("click", (e) => {
      const mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(e.clientY / window.innerHeight) * 2 + 1;

      const mouse = new THREE.Vector2(mouseX, mouseY);
      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(scene.children, true);

      if (intersects.length > 0) {
        let o = intersects[0].object;

        while (o.parent && !o.userData?.clickable) {
          o = o.parent;
        }

        if (o.userData.clickable && o === logo_69d86362_bd2469d86) {
          window.location.href = "https://wa.me/8100556677/?text=hi";
        }

        if (o.userData.clickable && o === logo_fd2ddb36_7d5dfd2dd) {
          window.location.href = "https://apnaghar.shyamsteel.com/";
        }
      }
    });

    const anchor = mindThree.addAnchor(0);
    anchor.group.add(video_asset_f09cfb89a24);
    // anchor.group.add(target_imagee2ad2a0d30c)
    anchor.group.add(logo_69d86362_bd2469d86);
    anchor.group.add(text_b99b9b31_90dab99b9);
    anchor.group.add(logo_fd2ddb36_7d5dfd2dd);

    anchor.onTargetFound = () => {
      video_asset_f09cfb89a24_video.play();
    };

    anchor.onTargetLost = () => {
      video_asset_f09cfb89a24_video.pause();
    };

    await mindThree.start();
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
    });
  }

  start();
});
