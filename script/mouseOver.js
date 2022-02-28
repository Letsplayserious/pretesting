let spanCollection = document.querySelectorAll("p > span");

for(let i = 0; i < spanCollection.length; i++){
    spanCollection[i].addEventListener("mouseover", function(){

        let changingLetters = setInterval(() => {

            function randomInteger(min, max) {
                let rand = min + Math.random() * (max + 1 - min);
                return Math.floor(rand);
              }

              let x = randomInteger(0, 9);
              let mass = ["arial", "serif", "times new roman", "verdana", "calibri", "arial", "serif", "times new roman", "verdana", "calibri"];
              let font = mass[x];
              spanCollection[i].style.fontFamily = font;
        }, 500);

        spanCollection[i].addEventListener("mouseout", function(){
            spanCollection[i].style.fontFamily = "times new roman";
          clearTimeout(changingLetters);
        })
    })
}

https://ru.stackoverflow.com/questions/1092454/%D0%9A%D0%B0%D0%BA-%D0%B4%D0%BE%D0%B1%D0%B0%D0%B2%D0%B8%D1%82%D1%8C-%D0%BE%D0%B1%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%87%D0%B8%D0%BA-%D1%81%D0%BE%D0%B1%D1%8B%D1%82%D0%B8%D1%8F-%D0%BD%D0%B0-%D0%BA%D0%B0%D0%B6%D0%B4%D1%8B%D0%B9-%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82-%D0%BC%D0%B0%D1%81%D1%81%D0%B8%D0%B2%D0%B0