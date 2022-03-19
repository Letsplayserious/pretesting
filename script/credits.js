// Made through IIFE, so as not to pollute the LE
// This function printing two lines, and added dropdown F-block

// This script answers for credit scene
(function(){
    function runningCredits(){
        // Change visibility of credits
        let removed = document.querySelectorAll(".credits");
        removed[0].style.display = "flex";

        let i = 0;
        let credits = document.querySelectorAll(".text-after");

        let Interval = setTimeout(function delay(){
            if(credits[i] != credits[0]){
                credits[i-1].style.display = "none";
                credits[i].style.display = "block";
                i++;
            }
            else{
                credits[i].style.display = "block";
                i++;
            }
            setTimeout(delay, 3000);
        }, 3000)
    }

    // Event on space keydown
    document.addEventListener("keydown", (event) => {
        if(event.code == "Space"){
            // Delete slider block
            let removedKey = document.getElementById("credits__wrapper");
            removedKey.parentNode.removeChild(removedKey);

            // Run music
            let music = new Audio("audio/y2mate.com - Directed by Robert B Weide theme meme_192kbps.mp3");
            music.play();

            setTimeout(runningCredits, 4000);
        }
      })
})()
