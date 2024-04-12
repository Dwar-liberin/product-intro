import { videoLoader } from "https://cdn.jsdelivr.net/gh/aadarshbabu/lib/videoLoader/videoLoader.js";
import { loadGLTF } from "https://cdn.jsdelivr.net/gh/aadarshbabu/lib/loader.js";
import * as THREE from "three";
import { MindARThree } from "mindar-image-three";

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

    const target_image32c5af_iconGeometry = new THREE.PlaneGeometry(
      1,
      0.49850746268656715
    );
    const target_image32c5af_texture = textureLoader.load("assets/about.jpg");
    const target_image32c5af_image = new THREE.MeshBasicMaterial({
      map: target_image32c5af_texture,
    });
    const target_image32c5af = new THREE.Mesh(
      target_image32c5af_iconGeometry,
      target_image32c5af_image
    );
    target_image32c5af.scale.set(1, 1, 1);
    target_image32c5af.position.set(0, 0, 0);
    target_image32c5af.rotation.set(-0.0007963267948964958, 0, 0);

    const [video_asset_898d53, video_asset_898d53_video] = await videoLoader({
      path: "assets/Savanto in Savantide.mp4",
      ratio: 1,
    });

    const isIOS = navigator.appVersion.indexOf("Mac") != -1 ? true : false;

    video_asset_898d53_video.muted = isIOS;

    video_asset_898d53.position.set(0, 0, 0.1);

    video_asset_898d53.scale.set(1, 0.5, 1);

    video_asset_898d53.rotation.set(-0.0007963267948964958, 0, 0);

    const logo_bc715221_f38b_iconGeometry = new THREE.CircleGeometry(0.5);
    const logo_bc715221_f38b_texture = textureLoader.load(
      "assets/circle-vk-sm_112.png"
    );
    const logo_bc715221_f38b_image = new THREE.MeshBasicMaterial({
      map: logo_bc715221_f38b_texture,
    });
    const logo_bc715221_f38b = new THREE.Mesh(
      logo_bc715221_f38b_iconGeometry,
      logo_bc715221_f38b_image
    );
    logo_bc715221_f38b.scale.set(0.1, 0.1, 1);
    logo_bc715221_f38b.position.set(-0.4, -0.4, 0);
    logo_bc715221_f38b.rotation.set(-0.0007963267948964958, 0, 0);
    logo_bc715221_f38b.userData.clickable = true;
    const logo_5cb2669a_2d1a_iconGeometry = new THREE.CircleGeometry(0.5);
    const logo_5cb2669a_2d1a_texture = textureLoader.load(
      "assets/circle-wa-sm_113.png"
    );
    const logo_5cb2669a_2d1a_image = new THREE.MeshBasicMaterial({
      map: logo_5cb2669a_2d1a_texture,
    });
    const logo_5cb2669a_2d1a = new THREE.Mesh(
      logo_5cb2669a_2d1a_iconGeometry,
      logo_5cb2669a_2d1a_image
    );
    logo_5cb2669a_2d1a.scale.set(0.1, 0.1, 1);
    logo_5cb2669a_2d1a.position.set(0, -0.4, 0);
    logo_5cb2669a_2d1a.rotation.set(-0.0007963267948964958, 0, 0);
    logo_5cb2669a_2d1a.userData.clickable = true;
    const logo_0d289e59_7576_iconGeometry = new THREE.CircleGeometry(0.5);
    const logo_0d289e59_7576_texture = textureLoader.load(
      "assets/circle-web-sm_114.png"
    );
    const logo_0d289e59_7576_image = new THREE.MeshBasicMaterial({
      map: logo_0d289e59_7576_texture,
    });
    const logo_0d289e59_7576 = new THREE.Mesh(
      logo_0d289e59_7576_iconGeometry,
      logo_0d289e59_7576_image
    );
    logo_0d289e59_7576.scale.set(0.1, 0.1, 1);
    logo_0d289e59_7576.position.set(0.4, -0.4, 0);
    logo_0d289e59_7576.rotation.set(-0.0007963267948964958, 0, 0);
    logo_0d289e59_7576.userData.clickable = true;

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

        if (o.userData.clickable && o === logo_bc715221_f38b) {
          window.location.href = "https://vk.com/naumag";
        }

        if (o.userData.clickable && o === logo_5cb2669a_2d1a) {
          window.location.href =
            "https://api.whatsapp.com/send/?phone=79175704772";
        }

        if (o.userData.clickable && o === logo_0d289e59_7576) {
          window.location.href = "https://nau-ra.com";
        }
      }
    });

    const anchor = mindThree.addAnchor(0);
    anchor.group.add(target_image32c5af);
    anchor.group.add(video_asset_898d53);
    anchor.group.add(logo_bc715221_f38b);
    anchor.group.add(logo_5cb2669a_2d1a);
    anchor.group.add(logo_0d289e59_7576);

    anchor.onTargetFound = () => {
      video_asset_898d53_video.play();
    };

    anchor.onTargetLost = () => {
      video_asset_898d53_video.pause();
    };

    await mindThree.start();
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
    });
  }

  start();
});
