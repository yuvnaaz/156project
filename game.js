AFRAME.registerComponent("game-play",{
    schema:{
        elementID: {type: "string", default: "#coins"},
    },
    update: function () {
        this.isTouching(this.data.elementID);
    },

    init: function(){
        var duration = 120;
        const timerEl = document.querySelector("#timer")
        this.startTimer(duration, timerEl);
    },
    isTouching: function (elementID){
        const element = document.querySelector(elementID);
        element.addEventListener("touch", (e)=> {
            if(elementID.includes("#coins")){
                element.setAttribute("visible", false)
            } else{
                this.game_over()
            }
        })
    },
    game_over: function (){
        var diver = document.querySelector("#diver")
        var element = document.querySelector("#game_over_text")
        element.setAttribute("visible", true)
        plane.setAttribute("dynamic-body", {
          mass: 0
        })
    
    
      },

      startTimer: function(duration, timerEl){
          var minutes;
          var seconds;
          var timer = setInterval(countDown, 1000)
          
          function countDown() {
            if (duration >= 0) {
              minutes = parseInt(duration / 60);
              seconds = parseInt(duration % 60);
      
              if (minutes < 10) {
                minutes = "0" + minutes;
              }
              if (seconds < 10) {
                seconds = "0" + seconds;
              }
      
              timerEl.setAttribute("text", {
                value: minutes + ":" + seconds,
              });
      
              duration -= 1;
            } 
            else {
              this.game_over()
            }
          }

      },

      isTouching: function(elementID){
          const element = document.querySelector(elementID);
          element.addEventListener("collide", e =>{
              if(elementID.includes("#coinz")){
                  element.setAttribute("visible", false);
                  console.log("coin collision");
              }
          })
      },

      updateScore: function (){
          var element = document.querySelector("#score")
          var count = element.getAttribute("text").value
    var score = parseInt(count)
    score += 10 
    element.setAttribute("text", {
      value: score
    })
      }



})