// variables for game
var score = 0;
var yourScore = 0;
var superNT = 0;
var yGB = 0;
var pGB = 0;
var bGB = 0;
var wins = 0;
var losses = 0;

// randomize score
$(document).ready(function () {
     score = Math.floor(Math.random () * 30+19);
    $('#score').text(score);


    // setting up random number for each system
    sNT = Math.floor(Math.random() * 11+1);
    $("#sNT").attr("data-value",sNT);
    $("#sNT img").attr("src", "assets/images/jason-leung-770944-unsplash.jpg" )
    
    yGB = Math.floor(Math.random () * 11+1);
    $("#yellowGB").attr('data-value',yGB);
    $('#yellowGB img').attr('src', "assets/images/mike-meyers-737491-unsplash.jpg")

    pGB = Math.floor(Math.random () * 11+1);
    $("#purpleGB").attr('data-value', pGB);
    $('#purpleGB').attr('src', "assets/images/mike-meyers-737492-unsplash.jpg")


    bGB = Math.floor(Math.random () * 11+1);
    $("#blueGB").attr('data-value', bGB);
    $('#blueGB').attr('src', "assets/images/mike-meyers-737494-unsplash.jpg")


    // set clicks for systems and add wins and losses //
    // unable to get losses variable to add a point upon losing the game
    $("#sNT").on('click', function () {
         yourScore = yourScore + sNT;
        $("#yourScore").html(yourScore);
        if(yourScore === score){
        $("#wins").html('wins: ' +wins);
        }
        else if(yourScore > score) {
        $("#losses").html('losses: ' +losses);
        }
    });

    $('#yellowGB').on('click', function () {
        yourScore = yourScore + yGB;
        $('#yourScore').html(yourScore);
        if(yourScore === score){
            $("#wins").html('wins: ' +wins);
        }
        else if(yourScore > score) {
            $("#losses").html('losses: ' +losses);
        }
    });

    $('#purpleGB').on('click', function () {
        yourScore = yourScore + pGB;
        $("#yourScore").html(yourScore);
        if(yourScore === score){
            $("#wins").html('wins: ' +wins);
         }
         else if(yourScore > score) {
            $("#losses").html('losses: ' +losses);
        }
    });

    $('#blueGB').on('click', function () {
        yourScore = yourScore + bGB;
        $('#yourScore').html(yourScore);
        if(yourScore === score){
            $("#wins").html('wins: ' +wins);
        }
        else if(yourScore > score) {
            $("#losses").html('losses: ' +losses);
        }
    });

})


$("#wins").html('wins: ' +wins);
    $("#losses").html('losses: ' +losses);

    if(yourScore === score) {
        wins++;
    } 
   else if(yourScore > score) {
        losses++;
    }console.log(losses);
    
    
    function reset() {
        score = 0;
        yourScore = 0;
        superNT = 0;
        yGB = 0;
        pGB = 0;
        bGB = 0;
        wins = 0;
        losses = 0;
    }
    

