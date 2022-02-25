// Made through IIFE, so as not to pollute the LE
// This function printing two strokes, and added dropdown F-block

(function (){
    //3 Printing second stroke
    function secondStrokePrinting(){
        let text = document.getElementById("vacancy");
        let secondStrokeBefore = "bla";

        for(let i = 0; i < secondStrokeBefore.length; i++){
          setTimeout(()=>{
            text.textContent += secondStrokeBefore[i];
          }, i*100);
        }

        setTimeout(secondStrokeErasing, 1000);
      }

    //4 Erasing stroke
    function secondStrokeErasing(){
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

        setTimeout(againSecondStroke, 2000);
    }

    // 5 Printing again second stroke
    function againSecondStroke(){
        let text = document.getElementById("vacancy");
        let secondStrokeAfter = "qweqweqwewqqeqQAWRFEKDBLDSgqqaksffsjSEuifhjaHEUIGF";

        for(let i = 0; i < secondStrokeAfter.length; i++){
            setTimeout(()=>{
              text.textContent += secondStrokeAfter[i];
            }, i*100);
          }
    }

    //1 Beginning, print first stroke
    let text = document.getElementById("name");

    let firstStroke = "first stroke will ended now";

    for(let i = 0; i < firstStroke.length; i++){
      setTimeout(()=>{
        text.textContent += firstStroke[i];
      }, i*100);
    }

    //2 Print second stroke, second arg depends on amount of symbols in text param.
    setTimeout(secondStrokePrinting, 3000);
  }
)();
