// Made through IIFE, so as not to pollute the LE
// This function printing two lines, and added space block
(function (){
    function addLetters(line, words, interval){
      for(let i = 0; i < words.length; i++){
        setTimeout(()=>{
          let span = document.createElement('span');
          span.innerHTML = words[i];
          // line.textContent+=words[i];
          line.append(span);
        }, (interval + i*100));
      }
    }

    function secondLineErasing(){
        let elem = document.getElementById("vacancy");
        let text = elem.textContent;

        for(let k = 0; k <= text.length; k++){
          setTimeout(()=>{
              let newtxt = text.slice(0, text.length - k);
              elem.textContent = newtxt;
              if(k == text.length){
                text.textContent = "";
              }
          },k*100);
        }
    }

    let name = document.getElementById("name");
    let vacancy = document.getElementById("vacancy");
    let spaceButton = document.getElementById("space");
    let firstLine = "Ионов Святослав";
    let fakeLine = "Ведущий инженер ПТО";
    let secondLine = "Начинающий web-программист / Junior Frontend Developer";

    let first = addLetters(name, firstLine, 2000);
    let second = addLetters(vacancy, fakeLine, 5500);
    setTimeout(secondLineErasing, 11000);
    let third = addLetters(vacancy, secondLine, 14000);
    setTimeout(()=>{
      spaceButton.style.visibility = "visible";
    }, 20000);
  }
)();
