document.addEventListener("keydown", (event) => {
    if(event.code == "Space"){
        let removedKey = document.getElementById("main");
        removedKey.parentNode.removeChild(removedKey);

        let music = new Audio("audio/y2mate.com - Directed by Robert B Weide theme meme_192kbps.mp3");
        music.play();

        let removed = document.querySelector(".removed");
        removed.className = "afterAll";

    }
  })