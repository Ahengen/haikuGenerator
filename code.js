$(document).ready(function () {
    $("button#clicktoAdd").on("click", addWord);
    $("button#clickGenerate").on("click", generateHaiku);
});

//outer:create a two-dimensional array outer (index indicates # of syllables in words in inner
//inner: the words

let dictionaryArray = [
    [],                                                 //0 syllables
    ['crab', 'boat', 'bay'],                            //1 syllable
    ['ocean', 'hiking', 'poodle'],                      //2 syllables
    ['banana', 'bicycle'],                              //3 syllables
    ['population', 'historian', 'technology'],          //4 syllables
    ['curiosity', 'archaeology', 'abracadabra'],        //5 syllables
    ['teleportality', 'indecipherable', 'humanitarian'],//6 syllables
    ['artificiality', 'conceptualization']              //7 syllables
];

let line1;
let line2;
let line3;

function addWord(event){
    event.preventDefault();
    //Get the word entered by the user
    let word = $("#addWord").val();
    /*Count the number of dashes to determine the number of syllables in the word,
    and remove the dashes*/
    /*If the word has more than 7 syllables, display an error message, otherwise add
    the word to the correct location in the dictionary array*/
    let arr = word.split("-");
    if (arr.length > 7) {
      console.log("Error, choose word with no more than 7 syllables.");
    } else {
        word = arr.join("");
        dictionaryArray[arr.length].push(word);
    };
}

function generateHaiku(event){
    event.preventDefault();
    /*Pick words randomly from the dictionary to build three lines of text:
    one with 5 syllables, one with 7 syllables, and another with 5 syllables*/
    /*If a random word causes a line to exceed syllable count, another word is
    chosen until one of acceptable size is found.*/
    //Display the complete haiku

    numSyllables = 0;
    line1 = "";
    line2 = "";
    line3 = "";

    while (numSyllables < 5){
        //pick a random number between 1 and 5
        let randomNum = Math.floor(Math.random() * 5) + 1;

        if (randomNum + numSyllables <= 5) {
            numSyllables += randomNum;
            let w = dictionaryArray[randomNum];
            let randomWord = Math.floor(Math.random() * w.length);
            line1 += w[randomWord] + " ";
        }

    }
    numSyllables = 0;

    while (numSyllables < 7) {
        //pick a random number between 1 and 7
        let randomNum = Math.floor(Math.random() * 7) + 1;

        if (randomNum + numSyllables <= 7) {
            numSyllables += randomNum;
            let w = dictionaryArray[randomNum];
            let randomWord = Math.floor(Math.random() * w.length);
            line2 += w[randomWord] + " ";
        }
    }
    numSyllables = 0;

    while (numSyllables < 5) {
        //pick a random number between 1 and 7
        let randomNum = Math.floor(Math.random() * 5) + 1;

        if (randomNum + numSyllables <= 5) {
            numSyllables += randomNum;
            let w = dictionaryArray[randomNum];
            let randomWord = Math.floor(Math.random() * w.length);
            line3 += w[randomWord] + " ";
        }
    }

    $("#line1").text(line1);
    $("#line2").text(line2);
    $("#line3").text(line3);

}