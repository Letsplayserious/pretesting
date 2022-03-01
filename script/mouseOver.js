(function (){
    function randomInteger(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }

    function changeLetters(){
        let spanCollection = document.querySelectorAll("span");

        for(let i = 0; i < spanCollection.length; i++){
            let changingLetters = setInterval(() => {
                let x = randomInteger(0, 9);
                let arrayFonts = ["Neucha", "Caveat", "Balsamiq Sans", "Caveat", "Roboto", "Alegreya SC", "Reggae One", "Bellota", "Hachi Maru Pop", "Kaisei Decol"];
                let font = arrayFonts[x];
                spanCollection[i].style.fontFamily = font;
                }, 500);
            }
    };

    setTimeout(changeLetters, 20000);

})();