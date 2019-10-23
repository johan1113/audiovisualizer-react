import React from 'react';
//import AudioVisualization from '../../components/AudioVisualization/AudioVisualization';
import './AudioVisualizer.scss';
import * as THREE from 'three';
import  OrbitControls  from 'three-orbitcontrols';
import { TweenMax, Power2, TimelineLite } from "gsap/TweenMax";

function AudioVisualizer() {

    const loaderBarParent = React.useRef();
    const playIntroParent = React.useRef();
    const audioElementParent = React.useRef();
    const btnPlayParent = React.useRef();
    const btnPauseParent = React.useRef();
    const canvasParent = React.useRef();

    React.useEffect( () => {
        AudioVisualization(loaderBarParent.current, playIntroParent.current, audioElementParent.current, btnPlayParent.current, btnPauseParent.current, canvasParent.current);
    }, []);

    return (
        <div className="AudioVisualizer" ref={canvasParent}>

            {/*
            <AudioVisualization />
                        <Audio3D></Audio3D>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/TweenMax.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/87/three.min.js"></script>
            <script src="../../../components/Audio3D/Audio3D.js"></script>
            */}


            <button className="play-intro" ref={playIntroParent}>
                <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 32 32"
                    data-tags="play,media control">
                    <g fill="#ae12d4" transform="scale(0.03125 0.03125)">
                        <path d="M192 0v1024l640-511.264-640-512.736z" />
                    </g>
                </svg>
            </button >


            <div className="credits" title="Music by Garth Knight">
                <h1 className="title">
                    <a href="https://garth-knight.bandcamp.com/" target="_blank" rel="noopener noreferrer">Garth Knight </a>/
                    <a href="https://garth-knight.bandcamp.com/track/autotron-re-master" target="_blank" rel="noopener noreferrer">AutoTron Re​-​Master</a>
                </h1>
                <div className="controls">
                    <button className="play" ref={btnPlayParent}>
                        <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" version="1.1" width="32" height="32" viewBox="0 0 25 32"
                            data-tags="play,media control">
                            <g fill="#ae12d4" transform="scale(0.03125 0.03125)">
                                <path d="M192 0v1024l640-511.264-640-512.736z" />
                            </g>
                        </svg>
                    </button>
                    <button className="pause" ref={btnPauseParent}>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32"
                            data-tags="pause,media control">
                            <g fill="#ae12d4" transform="scale(0.03125 0.03125)">
                                <path d="M352 0h-192c-17.696 0-32 14.336-32 32v960c0 17.696 14.304 32 32 32h192c17.696 0 32-14.304 32-32v-960c0-17.664-14.304-32-32-32zM864 0h-192c-17.696 0-32 14.336-32 32v960c0 17.696 14.304 32 32 32h192c17.696 0 32-14.304 32-32v-960c0-17.664-14.304-32-32-32z"
                                />
                            </g>
                        </svg>
                    </button>
                </div >
            </div >

            <div className="loader" ref={loaderBarParent}></div>
            <audio id="audio" crossOrigin="anonymous" ref={audioElementParent}></audio>

        </div >
    )
}

const AudioVisualization = (loaderBar, playIntro, audioElement, btnPlay, btnPause, canvas) => {

    class Loader {
        constructor() {
          this.callback = null;
        }
      
        load(file) {
          const request = new XMLHttpRequest();
      
          request.open('GET', file, true);
          request.onprogress = (evt) => {
            const percent = Math.floor((evt.loaded / evt.total) * 100);
      
            this.callback(percent);
          };
          
          request.onload = () => { this.complete(file) };
          request.send();
        }
      
        progress(callback) { this.callback = callback; };
      
        complete() { }
      }
      

    class App { 

        constructor() {

            console.log('INGRESA AL CONSTRUCTOR DE AUDIO 3D');

            //this.songFile = 'https://iondrimbafilho.me/autotron.mp3';
            //this.songFile = 'https://iondrimbafilho.me/3d5/ocean_drive.mp3';
            this.songFile = './songs/subhuman.mp3';
            this.percent = 0;
            this.playing = false;
            this.volume = 1;
            this.sceneBackGroundColor = 0xfff700;
            this.objectsColor = 0xae12d4;
            this.rowTiles = [];
            this.groupTiles = new THREE.Object3D();

            this.loader = new Loader();
            this.loader.progress(percent => { this.progress(percent); });
            //loaderBar = document.querySelector('.loader');
            this.loader.load(this.songFile);
            this.loader.complete = this.complete.bind(this);
            //playIntro = document.querySelector('.play-intro');

        }

        progress(percent) {
            loaderBar.style.transform = `scale(${(percent / 100) + .1}, 1.1)`;

            if (percent === 100) {
                setTimeout(() => {
                    requestAnimationFrame(() => {
                        playIntro.classList.add('control-show');
                        loaderBar.classList.add('removeLoader');
                        loaderBar.style.transform = 'scale(1, 0)';
                    })
                }, 300);
            }
        }

        complete(file) {
            setTimeout(() => {
                this.firstRing = new THREE.Object3D();

                this.setupAudio();
                this.addSoundControls();
                this.createScene();
                this.createCamera();
                this.addAmbientLight();
                this.addSpotLight();
                this.addCameraControls();
                this.addFloor();
                this.animate();
                this.playSound(file);
                this.addEventListener();

                setInterval(() => {
                    if (this.playing) {
                        this.addTilesRow(this.rowTiles);
                        this.removeOldTiles(this.rowTiles);
                    }
                }, 600);
            });

            document.addEventListener('visibilitychange', (evt) => {
                if (evt.target.hidden) {
                    this.pause();
                } else {
                    this.play();
                }

            }, false);
        }

        visibilityChange() {

        }

        removeOldTiles(tiles) {
            if (tiles.length % 25 === 0) {
                const removedTiles = tiles[0];
                let index = 0;

                for (const tile in removedTiles) {
                    if (removedTiles.hasOwnProperty(tile)) {
                        const element = removedTiles[tile];

                        TweenMax.delayedCall(0.07 * index, () => {
                            TweenMax.to(element.scale, .5, {
                                z: 0.01,
                                ease: Power2.easeOut,
                                onComplete: (element) => {
                                    this.groupTiles.remove(element);
                                },
                                onCompleteParams: [element]
                            });
                        });
                        index++;
                    }
                }

                tiles = tiles.splice(0, 1);
            }
        }

        addTilesRow(tiles) {
            const rows = 8;
            const cols = 1;
            const gutter = 1.05;
            const hasPrev = tiles.length && tiles[tiles.length - 1][0].position;
            let positions = [];
            let index = 0;
            let prevPos = 0;

            if (tiles.length) {
                prevPos = tiles[tiles.length - 1][0].position.x + gutter;
            }

            const size = .5;
            const geometry = new THREE.BoxGeometry(size, size, 5);
            const material = new THREE.MeshLambertMaterial({
                color: this.objectsColor,
                emissive: 0x0
            });

            for (let col = 0; col < cols; col++) {
                positions[col] = [];
                tiles.push([]);

                for (let row = 0; row < rows; row++) {
                    const pos = {
                        z: row,
                        y: 3,
                        x: hasPrev ? prevPos : col
                    }

                    positions[col][row] = pos;
                    const plane = this.createObj(this.objectsColor, geometry, material);

                    plane.scale.set(1, 1, 0.01);

                    if (col > 0) {
                        pos.x = (positions[col - 1][row].x * plane.size) + gutter;
                    }

                    if (row > 0) {
                        pos.z = (positions[col][row - 1].z * plane.size) + gutter;
                    }

                    plane.position.set(pos.x, pos.y, pos.z);

                    plane.rotateX(this.radians(90));

                    this.groupTiles.add(plane);

                    TweenMax.delayedCall(0.1 * index, () => {
                        TweenMax.to(plane.children[0].material, .3, {
                            opacity: 1,
                            ease: Power2.easeOut
                        });
                    });

                    tiles[tiles.length - 1].push(plane);

                    index++;
                }

                index++;
            }

            positions = null;
        }

        playSound(file) {
            setTimeout(() => {
                audioElement.src = file;
            }, 1000);
        }

        drawWave() {
            if (this.playing) {
                this.analyser.getByteFrequencyData(this.frequencyData);
                let index = 0;

                for (var i = 0; i < this.rowTiles.length; i++) {
                    for (var j = 0; j < this.rowTiles[i].length; j++) {
                        const freq = this.frequencyData[index];
                        let scale = freq / 50 <= 0 ? 0.01 : freq / 50;

                        TweenMax.to(this.rowTiles[i][j].scale, .2, {
                            z: scale - 3 < 0 ? 0.01 : scale - 3
                        });
                        index++;
                    }
                    index++;
                }
            }
        }

        addSoundControls() {
            //btnPlay = document.querySelector('.play');
            //btnPause = document.querySelector('.pause');

            btnPlay.addEventListener('click', () => {
                this.play();
            });

            btnPause.addEventListener('click', () => {
                this.pause();
            });
        }

        pause() {
            audioElement.pause();
            btnPause.classList.remove('control-show');
            btnPlay.classList.add('control-show');
        }

        play() {
            this.audioCtx.resume();
            audioElement.play();
            btnPlay.classList.remove('control-show');
            btnPause.classList.add('control-show');
        }

        createScene() {
            this.scene = new THREE.Scene();
            this.scene.background = new THREE.Color(this.sceneBackGroundColor);

            this.renderer = new THREE.WebGLRenderer({ antialias: true });
            this.renderer.setSize(window.innerWidth, window.innerHeight);

            this.renderer.shadowMap.enabled = true;
            this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

            this.groupTiles.position.set(10, 0, -5);
            this.scene.add(this.groupTiles);

            canvas.appendChild(this.renderer.domElement);
        }

        addEventListener() {
            playIntro.addEventListener('click', (evt) => {
                evt.currentTarget.classList.remove('control-show');
                this.play();
            });

            canvas.addEventListener('mouseup', () => {
                requestAnimationFrame(() => {
                    canvas.style.cursor = '-moz-grab';
                    canvas.style.cursor = '-webkit-grab';
                });
            });

            canvas.addEventListener('mousedown', () => {
                requestAnimationFrame(() => {
                    canvas.style.cursor = '-moz-grabbing';
                    canvas.style.cursor = '-webkit-grabbing';
                });
            });

            canvas.addEventListener('keyup', (evt) => {
                if (evt.keyCode === 32 || evt.code === 'Space') {
                    this.playing ? this.pause() : this.play();
                }
            });
        }

        createCamera() {
            this.camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 1000);
            this.camera.position.set(50, 50, -50);
            this.scene.add(this.camera);
        }

        addCameraControls() {
            this.controls = new OrbitControls(this.camera);
        }
        createObj(color, geometry, material) {
            const obj = new THREE.Mesh(geometry, material);

            obj.castShadow = true;
            obj.receiveShadow = true;
            obj.position.z = -2.5;
            obj.size = 1;
            obj.material.opacity = 0;
            obj.material.transparent = true;

            const pivot = new THREE.Object3D();

            pivot.add(obj);
            pivot.size = 1;

            return pivot;
        }

        onResize() {
            const ww = window.innerWidth;
            const wh = window.innerHeight;

            this.camera.aspect = ww / wh;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(ww, wh);
        }

        addFloor() {
            const planeGeometry = new THREE.PlaneGeometry(250, 250);
            const planeMaterial = new THREE.ShadowMaterial({ opacity: .05 });

            this.floor = new THREE.Mesh(planeGeometry, planeMaterial);

            planeGeometry.rotateX(- Math.PI / 2);

            this.floor.position.y = 0;
            this.floor.receiveShadow = true;

            this.scene.add(this.floor);
        }

        addSpotLight() {
            this.spotLight = new THREE.SpotLight(0xffffff);
            this.spotLight.position.set(-10, 60, -10);
            this.spotLight.castShadow = true;
            this.spotLight.angle = Math.PI / 4;
            this.spotLight.penumbra = 0;
            this.spotLight.decay = .5;
            this.spotLight.distance = 100;
            this.spotLight.shadow.mapSize.width = 1024;
            this.spotLight.shadow.mapSize.height = 1024;
            this.spotLight.shadow.camera.near = 10;
            this.spotLight.shadow.camera.far = 100;

            this.scene.add(this.spotLight);
        }

        addAmbientLight() {
            const light = new THREE.AmbientLight(0xffffff);

            this.scene.add(light);
        }

        animate() {
            this.controls.update();

            if (this.rowTiles[this.rowTiles.length - 1]) {
                const x = -this.rowTiles[this.rowTiles.length - 1][0].position.x + 15;

                TweenMax.to(this.groupTiles.position, 1, {
                    x: x,
                    ease: Power2.easeOut
                });
            }

            this.renderer.render(this.scene, this.camera);

            this.drawWave();

            requestAnimationFrame(this.animate.bind(this));
        }

        radians(degrees) {
            return degrees * Math.PI / 180;
        }

        setupAudio() {
            //audioElement = document.getElementById('audio');
            this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();

            this.analyser = this.audioCtx.createAnalyser();
            this.analyser.fftSize = 2048;
            this.analyser.smoothingTimeConstant = .85;

            this.source = this.audioCtx.createMediaElementSource(audioElement);
            this.source.connect(this.analyser);
            this.source.connect(this.audioCtx.destination);

            this.bufferLength = this.analyser.frequencyBinCount;

            this.frequencyData = new Uint8Array(this.bufferLength);
            audioElement.volume = this.volume;

            audioElement.addEventListener('playing', () => {
                this.playing = true;
            });
            audioElement.addEventListener('pause', () => {
                this.playing = false;
            });
            audioElement.addEventListener('ended', () => {
                this.playing = false;
                this.pause();
            });
        }
    }
    new App();
}


export default AudioVisualizer;