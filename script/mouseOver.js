let txt = document.querySelectorAll(".txt")[0];

txt.addEventListener("mouseover", function(){

    let changingLetters = setInterval(() => {

        function randomInteger(min, max) {
            let rand = min + Math.random() * (max + 1 - min);
            return Math.floor(rand);
          }

          let x = randomInteger(0, 9);
          let mass = ["arial", "serif", "times new roman", "verdana", "calibri", "arial", "serif", "times new roman", "verdana", "calibri"];
          let font = mass[x];
          txt.style.fontFamily = font;
    }, 500);

    txt.addEventListener("mouseout", function(){
      txt.style.fontFamily = "times new roman";
      clearTimeout(changingLetters);
    })
})