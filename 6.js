(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{399:function(e,t,n){"use strict";var o,a,r,s,c,d,u,f=30,E=[],l=0;new Date;function h(e){E[e-2]=0,E[e-1]=0,E[e+1]=0,l-=1}function m(){r.render(o,a),function(){for(i=0;i<l;i+=1){var e=4*i+2;0!=E[e]?E[e]-=.4:h(e)}}(),requestAnimationFrame(m)}function p(){var e=$("#container").outerWidth(),t=$("#container").outerWidth();$("canvas").offset().top;a.updateProjectionMatrix(),r.setSize(e,t)}$(function(){!function(){(o=new THREE.Scene).background=new THREE.Color(1338295),(a=new THREE.PerspectiveCamera(f,1,1,1e3)).position.set(0,0,97.5),a.lookAt(o.position),r=new THREE.WebGLRenderer({antialias:!0});var e=$("#container").outerWidth(),t=$("#container").outerWidth();r.setSize(e,t),r.domElement,$("#container").append(r.domElement),E=new Float32Array(64),l=0,d=THREE.UniformsUtils.merge([{activeWaves:{type:"i",value:1}},{waves:{type:"fv",value:E}},THREE.UniformsLib.lights,{ambient:{type:"c",value:new THREE.Color(16711935)}},{color:{value:new THREE.Color(44284)}}]);var n=new THREE.ShaderMaterial({uniforms:d,vertexShader:document.getElementById("vertexshader").textContent,fragmentShader:document.getElementById("fragmentshader").textContent,lights:!0}),i=new THREE.DirectionalLight(16711680);i.position.set(0,0,1),o.add(i),n.transparent=!0,u=new THREE.PlaneBufferGeometry(64,64,64,64),c=new Float32Array(u.attributes.position.count),u.addAttribute("displacement",new THREE.BufferAttribute(c,1)),s=new THREE.Mesh(u,n),o.add(s),$(window).on("resize",p),$(r.domElement).click(function(e){var t=$(this).offset().left+$(this).width()/2,n=$(this).offset().top+$(this).height()/2;!function(e,t){$("#message").css("opacity","0.0");var n=$("#container").outerWidth()/64;!function(e){E.set(e,l%16*4),l+=1}([e/n,-t/n,300,1])}(-(e.pageY-n),e.pageX-t)}),m()}();$("#container").outerWidth(),$("#container").outerWidth(),$("canvas").offset().top}),frame=0}}]);