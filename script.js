
function removeSplash(){
  document.getElementById("splashscreen").remove();
  // $(this).parent().fadeOut(500);
  // this.remove();
};


//402 
// AFRAME.registerComponent("b402", {
//   init: function() {
//    this.el.addEventListener("click", () => {  
//    document.getElementById("b402Popup").style.display ="unset";
//       });}});

function removeWinPopup(){
document.getElementById("winPopup").style.display = "none";
};



// AFRAME.registerComponent('rotation-reader', {

//     tick: (function () {
//       var position = new THREE.Vector3();
//       var quaternion = new THREE.Quaternion();
  
//       return function () {
//         this.el.object3D.getWorldPosition(position);
//         this.el.object3D.getWorldQuaternion(quaternion);
//         // position and rotation now contain vector and quaternion in world space.
//       };
//     })
//   });
    
  
  
      // here we register che 'clickhandler' component
      AFRAME.registerComponent("clickhandler2", {
        init: function() {
          // we add the click event listener to any instance of this component
          this.el.addEventListener("click", () => {  
          // this.el.setAttribute('animation__2', 'property: position; to: 4 -2 0; duration:1000'),
            
          this.el.remove();
            
  
            });
        }
      });
    
    
     
    // SCRIPT FOR SCORING
       AFRAME.registerComponent("points", {
         
        init: function() {
          // we add the click event listener to any instance of this component
          var button = document.getElementById("clickme"),
          count = -0.5;
          
          
          this.el.addEventListener("click", () => { 
            
                        
            count +=0.5;
            button.innerHTML = "Score: " + count;
              if (count === 30){
              document.getElementById("winPopup").style.display ="unset";
              // window.alert("You win!");
            }
            
  
            });
        }
      });
  
  
    
  
     AFRAME.registerComponent('vanish', {
    // ...
    pause: function () {
      
      this.removeEventListener();
    }
    // ...
  });
   

     
      //   window.onload = () => {navigator.geolocation.getCurrentPosition((position) => {
      //     document.querySelector('a-shere').setAttribute('gps-entity-place', `latitude: ${position.coords.latitude}; longitude: ${position.coords.longitude};`)
      //   });
      //  }
      


      //  TEST FOR ADDING MULTIPLE LOCATIONS
  
  
// window.onload = () => {
//   let places = staticLoadPlaces();
//   renderPlaces(places);
// };

// function staticLoadPlaces() {
//  return [
//      {
//         //  name: 'Magnemite',
//          location: {
//              lat: 39.477202,
//              lng: -105.081940,
//            },
//           },

//           {
//             // name: 'Magnemite',
//             location: {
//               lat: 39.477517,
//             lng: -105.081951,  
//               },
//              },

//              {
//               // name: 'Magnemite',
//               location: {
//                 lat: 39.476855,
//             lng: -105.081862, 
//                 },
//                },

//                {
//                 // name: 'North on Rampart',
//                 location: {
//                   lat: 39.478308,
//               lng: -105.073157, 
//                   },
//                  },
//                  {
//          // name: 'Magnemite',
//             location: {
//            lat: 39.479435,
//             lng: -105.073180, 
//            },
//           },
//        {
//                     // name: 'Magnemite',
//       location: {
//        lat: 39.482924,
//        lng: -105.073187, 
//         },
//       },
//        {
//       // name: 'Magnemite',
//      location: {
//       lat: 39.485329,
//        lng: -105.073208, 
//             },
//               },
//            {
//             // name: 'Magnemite',
//             location: {
//             lat: 39.485426,
//            lng: -105.074996, 
//             },
//          },
//          {
//           // name: 'Magnemite',
//         location: {
//        lat: 39.486189,
//        lng: -105.076673, 
//            },
//              },
//               {
//             // name: 'Magnemite',
//              location: {
//              lat: 39.486715,
//            lng: -105.079080, 
//           },
//          },
//           {
//          // name: 'Magnemite',
//         location: {
//           lat: 39.486752,
//        lng: -105.082913, 
//           },
//          },
//        {
//    // name: 'Magnemite',
//     location: {
//    lat: 39.487450,
//      lng: -105.086266, 
//        },
//         },
//         {
//          // name: 'Magnemite',
//         location: {
//        lat: 39.486548,
//       lng: -105.089487, 
//       },
//       },
//       {
//          // name: 'Magnemite',
//         location: {
//          lat: 39.486929,
//          lng: -105.091498, 
//          },
//         },
//         {
//         // name: 'Magnemite',
//         location: {
//         lat: 39.489533,
//         lng: -105.094009, 
//         },
//         },
//          {
//         // name: 'Magnemite',
//         location: {
//         lat: 39.491982,
//         lng: -105.094044, 
//       },
//        },
//       {
//         // name: 'Magnemite',
//       location: {
//      lat: 39.494499,
//      lng: -105.092799, 
//       },
//        },
          
        
        
        
        
//         ];
//         }
        
        










// function renderPlaces(places) {
//  let scene = document.querySelector('a-scene');

//  places.forEach((place) => {
//      let latitude = place.location.lat;
//      let longitude = place.location.lng;

//      let model = document.createElement('a-entity');

//     //  model.addEventListener('clickhandler2');
//     //  this.addEventListener("click", clickhandler2);
//      model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
//      model.setAttribute('gltf-model', 'models/sword2Transparency test2.gltf');
//     //  model.setAttribute();
//     //  model.setAttribute('rotation', '0 180 0');
    
//     model.setAttribute("fotation", "0 270 0", "loop: true", "easing: linear");
//     model.setAttribute('scale', '0.75 0.75 0.75');
 
//     //  model.setAttribute('animation-loop', {action: e.action, loopDelta: e.loopDelta});

//     //  model.addAttribute('animation-mixer',{clip: "*",loop: "repeat", repetitions: 2});
//     model.setAttribute('rotation', loop="repeat", {x: 0 , y: 360, z: 0,});
//     // model.addEventListener('raycaster-intersection',
//     // function () {
//     //   window.alert('Player hit something!');
//     model.addEventListener('loaded', () => {
//     window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
      
//      });

// //removes model when clicked
// model.addEventListener('click', () => {
//   model.remove();
       
//      });

//      scene.appendChild(model);
//  });
// }

//TESTS TO GET ANIMATION ON MODEL

// function renderPlaces(places) {
//   let scene = document.querySelector('a-scene');
 
//   places.forEach((place) => {
//       let latitude = place.location.lat;
//       let longitude = place.location.lng;
 
//       let model = document.createElement('a-dodecahedron');


// //allows position panning
//       // var t = 0;
//       // function render() {
//       //   t += 0.01;
//         // requestAnimationFrame(render);
//         // model.setAttribute('position', +(Math.sin(t*2)+1)+' 0');
 
//       // }
//       // render();

//       // model.addEventListener('clickhandler2');
//       // this.addEventListener("click", clickhandler2);
//       model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
//       // model.setAttribute('gltf-model', 'models/sword2Transparency test2.gltf');

//       //allows to rotate
//       model.setAttribute('animation', 'property: rotation; to: 0 360 0; loop:true; dur: 3000; easing: linear');

//       // model.setAttribute('animation-mixer','clip: Take 001; loop:repeat');
//     //  model.tree.rotateY(0.01);
//     // model.setAttribute.tree.rotateY(0.01);
//     // model.object3D.rotation.y = THREE.Math.degToRad(360);
//     // this.animate('properties[rotate]');
//     // this.setAttribute('animate',{rotateY: "*",loop: "repeat", repetitions: 2});
//     // model.object3D.rotation.divideScalar(2);
//     // model.setAttribute('rotation', '180');


//      model.setAttribute('scale', '50 50 50');
//      model.setAttribute('color', 'green');
//      model.setAttribute('opacity', '0.75');

//      //  model.setAttribute('animation-loop', {action: e.action, loopDelta: e.loopDelta});
 
//       // model.setAttribute('animation-mixer',{clip: "*",loop: "repeat", repetitions: 2});
//     //  model.setAttribute('rotation', loop="repeat", {x: 0 , y: 360, z: 0,});
//      // model.addEventListener('raycaster-intersection',
//      // function () {
//      //   window.alert('Player hit something!');
//      model.addEventListener('loaded', () => {
//      window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
       
//       });



//       // model.object3D.rotation.set(
//       //   THREE.Math.degToRad(15),
//       //   THREE.Math.degToRad(30),
//       //   THREE.Math.degToRad(90)
//       // );
//       // model.object3D.rotation.y += Math.PI;
      
//       // With .setAttribute (less recommended).
//       // model.setAttribute('rotation', {x: 15, y: 30, z: 90});
 
//  //removes model when clicked
//  model.addEventListener('click', () => {
//    model.remove();
        
//       });
 
//       scene.appendChild(model);
//   });
//  }