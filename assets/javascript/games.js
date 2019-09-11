$(document).ready(function () {

    //start function

    //define variables
    var randomNum = 0
    var totalScore = 0;


    //scoreboard
    var winCounter = 0;
    var lossCounter = 0;

    //computer generate random number between 19-120
    var randomNum = Math.floor(Math.random() * 101 + 19)
    //append randomNum to html browser
    $("#randomNumber").text(randomNum);


    // rename with Random included
    //computer generate hidden 4 random crystal values between 1- 12
    var crystal1 = Math.floor(Math.random() * 10 + 2)
    console.log(crystal1);

    var crystal2 = Math.floor(Math.random() * 10 + 2)
    console.log(crystal2);

    var crystal3 = Math.floor(Math.random() * 10 + 2)
    console.log(crystal3);

    var crystal4 = Math.floor(Math.random() * 10 + 2)
    console.log(crystal4);



    //crystal5.value

    //hide crystal amount until player clicks crystal

    // on clicking a crystal, add random crystal1 
    // click each crystal, console.log random crystal value
    $("#crystal-1").on("click", function () {
        console.log(crystal1);
        // crystalOneScore += crystal1;
        totalScore += crystal1;
        //add the value to the to var totalScore
        $("#total-score").text(totalScore);
        checker()


    })


    $("#crystal-2").on("click", function () {
        console.log(crystal2);
        totalScore += crystal2;
        $("#total-score").text(totalScore);
        checker()

    })

    $("#crystal-3").on("click", function () {
        console.log(crystal3);
        totalScore += crystal3;
        $("#total-score").text(totalScore);
        checker()

    })

    $("#crystal-4").on("click", function () {
        console.log(crystal4);
        totalScore += crystal4;
        $("#total-score").text(totalScore);
        checker()

    })

    // console.log('totalScore', totalScore)


    //if player score === computer random number
    //increase wins +1
    function checker() {
        console.log("before if statement: ", totalScore, randomNum);
        if (totalScore === randomNum) {
            alert("You WIN!");
            winCounter++
            $("#win-counter").text(winCounter);
            //reset
            reset()



        }
        //if player score > computer random number
        else if (totalScore > randomNum) {
            alert("Bummer, you lost!")
            lossCounter++
            $("#loss-counter").text(lossCounter);
            reset()
        };
    }


        function reset() {
        //reset crystals
        crystal1 = Math.floor(Math.random() * 10 + 2);
            console.log(crystal1);
        crystal2 = Math.floor(Math.random() * 10 + 2);
            console.log(crystal2);
        crystal3 = Math.floor(Math.random() * 10 + 2);
            console.log(crystal3);
        crystal4 = Math.floor(Math.random() * 10 + 2);
            console.log(crystal4);
        

        //reset random 
        randomNum = Math.floor(Math.random() * 101 + 19);
        console.log(randomNum);
        $("#randomNumber").text(randomNum);



        //reset total score
        totalScore = 0
        $("#total-score").text(totalScore);

        



    }


});
