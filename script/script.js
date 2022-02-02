function runningCredits(){
    // Change visibility of credits
    let removed = document.querySelectorAll(".removed");
    removed[0].style.display = "flex";

    let credits = document.querySelectorAll(".text-after");
    let currentCredit = credits[0];
    let count = 1;

    let Interval = setInterval(() =>{
        if(count == credits.length - 1){
            clearInterval(Interval);
        }
        else{
            currentCredit.style.display ="none";
            currentCredit.style.display ="block";
            count++;
            currentCredit = credits[count];
        }

    }, 3000)
    // https://stackoverflow.com/questions/49133336/show-and-hide-based-on-time-interval/49133834
            // setTimeout(() => {
            // for (let i = 0; i < credits.length; i++) {

            // setTimeout(() => {
            //     console.log(Date.now());
            //     console.log(credits[i]);
            // }, 3000)
            // setInterval(() => {
            //     console.log(credits[i]);
            //     credits[i].style.display = "block";
            // }, 3000)
            // setInterval(() => {
            //     console.log(credits[i]);
            //     credits[i].style.display = "none";
            // }, 6000)
}

// Event on space keydown
document.addEventListener("keydown", (event) => {
    if(event.code == "Space"){
        // Delete main section
        let removedKey = document.getElementById("main");
        removedKey.parentNode.removeChild(removedKey);

        // Run music
        let music = new Audio("audio/y2mate.com - Directed by Robert B Weide theme meme_192kbps.mp3");
        music.play();

        setTimeout(runningCredits, 7000);
    }
  })