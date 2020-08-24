
function removeSplash(){
  document.getElementById("splashscreen").remove();
};

function removeWinPopup(){
document.getElementById("winPopup").style.display = "none";
};

 
  
      // here we register che 'clickhandler' component to allow clicking
      AFRAME.registerComponent("clickhandler2", {
        init: function() {
          this.el.addEventListener("click", () => {         
          this.el.remove();
         });
        }
      });
    
    
     
    // SCRIPT FOR SCORING
       AFRAME.registerComponent("points", {
         
        init: function() {
         var button = document.getElementById("clickme"),
         count = -0.5;
          
         this.el.addEventListener("click", () => { 
             count +=0.5;
             button.innerHTML = "Score: " + count;
             
             if (count === 20){
              document.getElementById("winPopup").style.display ="unset";
             }});
        }
      });
