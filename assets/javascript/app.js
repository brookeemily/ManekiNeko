var messages = [
    "A conclusion is simply the place where you got tired of thinking",
    "A cynic is only a frustrated optimist",
    "A foolish man listens to his heart. A wise man listens to a cat on the internet.",
    "You will die alone and poorly dressed",
    "An alien of some sort will be appearing to you shortly",
    "You should eat a snack",
    "It is a good day to have a good day",
    "You spend too much time on the internet",
    "Your road to glory will be rocky, but fulfilling",
    "Your everlasting patience will be rewarded sooner or later",
    "Good luck is the result of good planning"
];

var messagesLength = messages.length;
var randomMessageNum = Math.floor((Math.random() * messagesLength) + 1);

var chosenMessage = messages[randomMessageNum];



function giveAdvice() {
    console.log(messagesLength);
    var randomMessageNum = Math.floor((Math.random() * messagesLength) + 1);
    var chosenMessage = messages[randomMessageNum];
    console.log(randomMessageNum);
    console.log("advice");
    $("#catSpeech").html(chosenMessage);

}