(this.webpackJsonpaudiovisualizer=this.webpackJsonpaudiovisualizer||[]).push([[0],{111:function(e,t,a){e.exports=a.p+"static/media/wave.7540868e.svg"},120:function(e,t,a){e.exports=a(302)},125:function(e,t,a){},134:function(e,t,a){},135:function(e,t,a){},298:function(e,t,a){},300:function(e,t,a){},301:function(e,t,a){},302:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(24),i=a.n(l),s=a(52),r=a(25),c=a(10),u=(a(125),a(111)),h=a.n(u);var m=function(){var e=Object(n.useState)(0),t=Object(c.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){var e=setInterval((function(){l((function(e){return e<5?e+1:0}))}),7e3);return function(){return clearInterval(e)}}),[]),o.a.createElement("div",{className:"home",style:{backgroundColor:["red","green","blue","yellow","pink","purple"][a]}},o.a.createElement("div",{className:"container"},o.a.createElement("h1",null,"AUDIO VISUALIZER"),o.a.createElement("img",{src:h.a}),o.a.createElement(s.b,{to:"/audiovisualizer",className:"button"},"LET\xb4S START")))},d=a(37),g=a(113),f=a(8),p=a(114),v=a.n(p),C=a(20),y=(a(134),function(e,t,a){return new(function(){function n(){Object(d.a)(this,n),console.log("INGRESA AL CONSTRUCTOR DE AUDIO 3D"),this.songFile="https://iondrimbafilho.me/autotron.mp3",this.percent=0,this.playing=!1,this.volume=1,this.sceneBackGroundColor=t,this.objectsColor=a,this.rowTiles=[],this.groupTiles=new f.Object3D,this.complete(),this.scene=new f.Scene,this.scene.background=new f.Color(this.sceneBackGroundColor)}return Object(g.a)(n,[{key:"setSongFile",value:function(e){this.audioElement&&this.audioElement.pause(),this.songFile=e,console.log("///////////// ENTRA A CAMBIO DE AUDIO ////////////////"),this.setupAudio()}},{key:"setSceneColor",value:function(e){this.scene.background=new f.Color(e)}},{key:"setTalesColor",value:function(e){this.objectsColor=e}},{key:"setupAudio",value:function(){var e=this;this.audioElement=new Audio,this.audioElement.src=this.songFile,this.audioCtx=new(window.AudioContext||window.webkitAudioContext),this.analyser=this.audioCtx.createAnalyser(),this.analyser.fftSize=2048,this.analyser.smoothingTimeConstant=.85,this.source=this.audioCtx.createMediaElementSource(this.audioElement),this.source.connect(this.analyser),this.source.connect(this.audioCtx.destination),this.bufferLength=this.analyser.frequencyBinCount,this.frequencyData=new Uint8Array(this.bufferLength),this.audioElement.volume=this.volume,this.audioElement.addEventListener("playing",(function(){e.playing=!0})),this.audioElement.addEventListener("pause",(function(){e.playing=!1})),this.audioElement.addEventListener("ended",(function(){e.playing=!1,e.pause()}))}},{key:"complete",value:function(){var e=this;setTimeout((function(){e.firstRing=new f.Object3D,e.setupAudio(),e.createScene(),e.createCamera(),e.addAmbientLight(),e.addSpotLight(),e.addCameraControls(),e.addFloor(),e.animate(),e.addEventListener(),setInterval((function(){e.playing&&(e.addTilesRow(e.rowTiles),e.removeOldTiles(e.rowTiles))}),600)})),document.addEventListener("visibilitychange",(function(t){t.target.hidden?e.pause():e.play()}),!1)}},{key:"visibilityChange",value:function(){}},{key:"removeOldTiles",value:function(e){var t=this;if(e.length%25===0){var a=e[0],n=0;for(var o in a)a.hasOwnProperty(o)&&function(){var e=a[o];C.b.delayedCall(.07*n,(function(){C.b.to(e.scale,.5,{z:.01,ease:C.a.easeOut,onComplete:function(e){t.groupTiles.remove(e)},onCompleteParams:[e]})})),n++}();e=e.splice(0,1)}}},{key:"addTilesRow",value:function(e){var t=this,a=e.length&&e[e.length-1][0].position,n=[],o=0,l=0;e.length&&(l=e[e.length-1][0].position.x+1.05);for(var i=new f.BoxGeometry(.5,.5,5),s=new f.MeshLambertMaterial({color:this.objectsColor,emissive:0}),r=0;r<1;r++){n[r]=[],e.push([]);for(var c=function(c){var u={z:c,y:3,x:a?l:r};n[r][c]=u;var h=t.createObj(t.objectsColor,i,s);h.scale.set(1,1,.01),r>0&&(u.x=n[r-1][c].x*h.size+1.05),c>0&&(u.z=n[r][c-1].z*h.size+1.05),h.position.set(u.x,u.y,u.z),h.rotateX(t.radians(90)),t.groupTiles.add(h),C.b.delayedCall(.1*o,(function(){C.b.to(h.children[0].material,.3,{opacity:1,ease:C.a.easeOut})})),e[e.length-1].push(h),o++},u=0;u<8;u++)c(u);o++}n=null}},{key:"drawWave",value:function(){if(this.playing){this.analyser.getByteFrequencyData(this.frequencyData);for(var e=0,t=0;t<this.rowTiles.length;t++){for(var a=0;a<this.rowTiles[t].length;a++){var n=this.frequencyData[e],o=n/50<=0?.01:n/50;C.b.to(this.rowTiles[t][a].scale,.2,{z:o-3<0?.01:o-3}),e++}e++}}}},{key:"pause",value:function(){null!=this.audioElement&&this.audioElement.pause()}},{key:"play",value:function(){this.audioCtx.resume(),this.audioElement.play()}},{key:"createScene",value:function(){this.renderer=new f.WebGLRenderer({antialias:!0}),console.log("width: "+e.offsetWidth+"  //   height:"+e.offsetHeight),this.renderer.setSize(e.offsetWidth,e.offsetHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=f.PCFSoftShadowMap,this.groupTiles.position.set(10,0,-5),this.scene.add(this.groupTiles),e.appendChild(this.renderer.domElement)}},{key:"addEventListener",value:function(){var t=this;e.addEventListener("mouseup",(function(){requestAnimationFrame((function(){e.style.cursor="-moz-grab",e.style.cursor="-webkit-grab"}))})),e.addEventListener("mousedown",(function(){requestAnimationFrame((function(){e.style.cursor="-moz-grabbing",e.style.cursor="-webkit-grabbing"}))})),e.addEventListener("keyup",(function(e){32!==e.keyCode&&"Space"!==e.code||(t.playing?t.pause():t.play())}))}},{key:"createCamera",value:function(){this.camera=new f.PerspectiveCamera(30,e.offsetWidth/e.offsetHeight,1,1e3),this.camera.position.set(50,50,-50),this.scene.add(this.camera)}},{key:"addCameraControls",value:function(){this.controls=new v.a(this.camera)}},{key:"createObj",value:function(e,t,a){var n=new f.Mesh(t,a);n.castShadow=!0,n.receiveShadow=!0,n.position.z=-2.5,n.size=1,n.material.opacity=0,n.material.transparent=!0;var o=new f.Object3D;return o.add(n),o.size=1,o}},{key:"onResize",value:function(){var t=e.offsetWidth,a=e.offsetHeight;this.camera.aspect=t/a,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,a)}},{key:"addFloor",value:function(){var e=new f.PlaneGeometry(250,250),t=new f.ShadowMaterial({opacity:.05});this.floor=new f.Mesh(e,t),e.rotateX(-Math.PI/2),this.floor.position.y=0,this.floor.receiveShadow=!0,this.scene.add(this.floor)}},{key:"addSpotLight",value:function(){this.spotLight=new f.SpotLight(16777215),this.spotLight.position.set(-10,60,-10),this.spotLight.castShadow=!0,this.spotLight.angle=Math.PI/4,this.spotLight.penumbra=0,this.spotLight.decay=.5,this.spotLight.distance=100,this.spotLight.shadow.mapSize.width=1024,this.spotLight.shadow.mapSize.height=1024,this.spotLight.shadow.camera.near=10,this.spotLight.shadow.camera.far=100,this.scene.add(this.spotLight)}},{key:"addAmbientLight",value:function(){var e=new f.AmbientLight(16777215);this.scene.add(e)}},{key:"animate",value:function(){if(this.controls.update(),this.rowTiles[this.rowTiles.length-1]){var e=15-this.rowTiles[this.rowTiles.length-1][0].position.x;C.b.to(this.groupTiles.position,1,{x:e,ease:C.a.easeOut})}this.renderer.render(this.scene,this.camera),this.drawWave(),requestAnimationFrame(this.animate.bind(this))}},{key:"radians",value:function(e){return e*Math.PI/180}}]),n}())}),b=function(e){var t=o.a.useState(" "),a=Object(c.a)(t,2),n=a[0],l=a[1],i=o.a.useState(" "),s=Object(c.a)(i,2),r=s[0],u=s[1],h=o.a.useRef(),m=o.a.useRef();return o.a.useEffect((function(){m.current=y(h.current,e.bgColor,e.fgColor)}),[]),o.a.useEffect((function(){e.onPlay?m.current.play():m.current.pause()}),[e.onPlay]),o.a.useEffect((function(){m.current.setSceneColor(e.bgColor)}),[e.bgColor]),o.a.useEffect((function(){m.current.setTalesColor(e.fgColor)}),[e.fgColor]),o.a.useEffect((function(){m.current.setSongFile(e.mp3File)}),[e.mp3File]),o.a.useEffect((function(){var t=e.fileName.replace(".mp3","").split("-",2);l(t[1]),u(t[0])}),[e.fileName]),o.a.createElement("div",{className:"Audio3D",width:"65%",height:"100%",ref:h,style:{backgroundColor:e.bgColor}},o.a.createElement("h1",{style:{color:e.fgColor}},n),o.a.createElement("h2",{style:{color:e.fgColor}},r))},E=(a(135),a(75)),w=function(e){return o.a.createElement("div",{className:"MixingBoard"},o.a.createElement("div",{className:"title"},o.a.createElement("h1",null,"Sound Mixer")),o.a.createElement("div",{className:"loaderPlayer"},o.a.createElement("input",{type:"file",id:"labelSong",accept:".mp3",onChange:function(t){var a=URL.createObjectURL(t.currentTarget.files[0]),n=t.currentTarget.files[0].name;console.log("/////// NEW MP3 FILE //////////"),console.log(a),console.log(n),e.setMp3File(a),e.setFileName(n)}}),o.a.createElement("label",{className:"button",id:"btn_black",for:"labelSong"},"Load Audio"),o.a.createElement("div",{className:"controls"},o.a.createElement("button",{className:"play",style:{display:e.onPlay?"none":"block"},onClick:function(){e.setOnPlay(!0)}},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink",version:"1.1",width:"32",height:"32",viewBox:"0 0 25 32","data-tags":"play,media control"},o.a.createElement("g",{fill:"#000000",transform:"scale(0.03125 0.03125)"},o.a.createElement("path",{d:"M192 0v1024l640-511.264-640-512.736z"})))),o.a.createElement("button",{className:"pause",style:{display:e.onPlay?"block":"none"},onClick:function(){e.setOnPlay(!1)}},o.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink",width:"32",height:"32",viewBox:"0 0 32 32","data-tags":"pause,media control"},o.a.createElement("g",{fill:"#000000",transform:"scale(0.03125 0.03125)"},o.a.createElement("path",{d:"M352 0h-192c-17.696 0-32 14.336-32 32v960c0 17.696 14.304 32 32 32h192c17.696 0 32-14.304 32-32v-960c0-17.664-14.304-32-32-32zM864 0h-192c-17.696 0-32 14.336-32 32v960c0 17.696 14.304 32 32 32h192c17.696 0 32-14.304 32-32v-960c0-17.664-14.304-32-32-32z"})))))),o.a.createElement("section",{id:"fg"},o.a.createElement("h2",null,"Figures Color"),o.a.createElement(E.CirclePicker,{color:e.fgColor,onChange:function(t){e.setFgColor(t.hex),console.log(t.hex),console.log(e.fgColor)}})),o.a.createElement("section",{id:"bg"},o.a.createElement("h2",null,"Background Color"),o.a.createElement(E.CirclePicker,{color:e.bgColor,onChange:function(t){e.setBgColor(t.hex),console.log(t.hex),console.log(e.bgColor)}})),o.a.createElement("div",{className:"windowButtons"},o.a.createElement("button",{className:"button",id:"btn_black",onClick:function(){var t=JSON.parse(localStorage.getItem("songsList")),a={mp3File:e.mp3File,fileName:e.fileName,fgColor:e.fgColor,bgColor:e.bgColor};null!=t?t.push(a):(t=[]).push(a),localStorage.setItem("songsList",JSON.stringify(t)),console.log("/////////// SE ACTUALIZ\xd3 EL LOCAL STORAGE //////////////"),console.log(JSON.parse(localStorage.getItem("songsList")))}},"save this song"),o.a.createElement("button",{className:"button",id:"btn_black",onClick:function(){e.setControllerCase(1)}},"your saved songs")))},k=a(320),S=a(322),N=a(323),F=a(321),x=a(116),L=a.n(x),O=a(115),T=a.n(O),A=a(118),M=a.n(A),P=a(117),z=a.n(P),j=(a(298),function(e){var t=JSON.parse(localStorage.getItem("songsList")),a=o.a.useState(0),n=Object(c.a)(a,2),l=n[0],i=n[1],s=function(a){console.log("//////// ingresa a selected song ///////////"),i(parseInt(a.currentTarget.dataset.index)),console.log(l);var n=t[l];e.setBgColor(n.bgColor),e.setFgColor(n.fgColor),e.setMp3File(n.mp3File),e.setFileName(n.fileName)};return o.a.createElement("div",{className:"Playlist"},o.a.createElement("div",{className:"title"},o.a.createElement("h1",null,"My Playlist")),null!=t?o.a.createElement(k.a,{component:"nav","aria-label":"main mailbox folders",className:"songs-list",id:"scrollbar"},t.map((function(e,t){return o.a.createElement(S.a,{button:!0,onClick:s,"data-index":t}," ",o.a.createElement(N.a,{primary:e.fileName.replace(".mp3","").split("-",2)[1],secondary:e.fileName.replace(".mp3","").split("-",2)[0]})," ",o.a.createElement(F.a,null," ",o.a.createElement(T.a,{style:{fill:e.fgColor}})," ",o.a.createElement(L.a,{style:{fill:e.bgColor}})," "),"  ")}))):o.a.createElement("h3",null,"First, you need to save your songs"),o.a.createElement("div",{className:"controls"},o.a.createElement(z.a,{button:!0,onClick:function(){console.log("////////// entra a previous song //////////"),console.log(l),console.log(t.length),i(0==l?t.length-1:l-1);var a=t[l];e.setBgColor(a.bgColor),e.setFgColor(a.fgColor),e.setMp3File(a.mp3File),e.setFileName(a.fileName)},style:{fill:"black"},fontSize:"large"}),o.a.createElement("button",{className:"play",style:{display:e.onPlay?"none":"block"},onClick:function(){e.setOnPlay(!0)}},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink",version:"1.1",width:"32",height:"32",viewBox:"0 0 25 32","data-tags":"play,media control"},o.a.createElement("g",{fill:"#000000",transform:"scale(0.03125 0.03125)"},o.a.createElement("path",{d:"M192 0v1024l640-511.264-640-512.736z"})))),o.a.createElement("button",{className:"pause",style:{display:e.onPlay?"block":"none"},onClick:function(){e.setOnPlay(!1)}},o.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink",width:"32",height:"32",viewBox:"0 0 32 32","data-tags":"pause,media control"},o.a.createElement("g",{fill:"#000000",transform:"scale(0.03125 0.03125)"},o.a.createElement("path",{d:"M352 0h-192c-17.696 0-32 14.336-32 32v960c0 17.696 14.304 32 32 32h192c17.696 0 32-14.304 32-32v-960c0-17.664-14.304-32-32-32zM864 0h-192c-17.696 0-32 14.336-32 32v960c0 17.696 14.304 32 32 32h192c17.696 0 32-14.304 32-32v-960c0-17.664-14.304-32-32-32z"})))),o.a.createElement(M.a,{button:!0,onClick:function(){console.log("////////// entra a next song //////////"),console.log(l),console.log(t.length),l===t.length-1?i(0):i(l+1);var a=t[l];e.setBgColor(a.bgColor),e.setFgColor(a.fgColor),e.setMp3File(a.mp3File),e.setFileName(a.fileName)},style:{fill:"black"},fontSize:"large"})),o.a.createElement("div",{className:"windowButtons"},o.a.createElement("button",{className:"button",id:"btn_black",onClick:function(){e.setControllerCase(0)}},"get back to Sound Mixer")))}),B=(a(300),o.a.createContext({bgColor:"#fff700",setBgColor:function(){return null},fgColor:"#ae12d4",setFgColor:function(){return null},mp3File:"https://iondrimbafilho.me/3d5/ocean_drive.mp3",setMp3File:function(){return null}}));var I=function(){var e=o.a.useState("#fff700"),t=Object(c.a)(e,2),a=t[0],n=t[1],l=o.a.useState("#ae12d4"),i=Object(c.a)(l,2),s=i[0],r=i[1],u=o.a.useState(!1),h=Object(c.a)(u,2),m=h[0],d=h[1],g=o.a.useState("https://iondrimbafilho.me/3d5/ocean_drive.mp3"),f=Object(c.a)(g,2),p=f[0],v=f[1],C=o.a.useState("Artista - T\xedtulo.mp3"),y=Object(c.a)(C,2),E=y[0],k=y[1],S=o.a.useState(0),N=Object(c.a)(S,2),F=N[0],x=N[1],L={bgColor:a,setBgColor:n,fgColor:s,setFgColor:r,onPlay:m,setOnPlay:d,mp3File:p,setMp3File:v,fileName:E,setFileName:k,controllerCase:F,setControllerCase:x};return o.a.createElement("div",{className:"AudioVisualizer"},o.a.createElement(B.Provider,{value:L},0==F?o.a.createElement(w,{setBgColor:n,setFgColor:r,setOnPlay:d,setMp3File:v,setFileName:k,setControllerCase:x,bgColor:a,fgColor:s,onPlay:m,mp3File:p,fileName:E}):o.a.createElement(j,{setControllerCase:x,setBgColor:n,setFgColor:r,setOnPlay:d,setMp3File:v,setFileName:k,onPlay:m}),o.a.createElement(b,{bgColor:a,fgColor:s,onPlay:m,mp3File:p,fileName:E})))};a(301);var R=function(){return o.a.createElement(s.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(r.a,{from:"/",to:"/home"}),o.a.createElement(r.d,null,o.a.createElement(r.b,{path:"/home",component:m}),o.a.createElement(r.b,{path:"/audiovisualizer",component:I}))))};i.a.render(o.a.createElement(R,null),document.getElementById("root"))}},[[120,1,2]]]);
//# sourceMappingURL=main.3bc424b3.chunk.js.map