var startBtn = document.querySelector(".start-btn")
var nextBtn = document.querySelector(".next-btn")

var questions = [
    {
        prompt: "What is the 16th letter in the alphabet?\n(a) n\n\(b) p\n(c) o",
        answer: "b"
    },
    {
        prompt: "What team won Super Bowl VII?\n(a) Dalls Cowboys\n(b) Green Bay Packers\n(c) Miami Dolphins",
        answer: "c"
    },
    {
        prompt: "Who was the first Africa American Senator?\n(a) Barack Obama\n(b) Hiram Revels\n(c) Edward Brooke",
        answer: "b"
    },
    {
        prompt: "What was the first movie ever made?\n(a) Dickson Greeting\n(b) The Horse in Motion\n(c) Carmencita",
        answer: "b"
    },
    {
        prompt: "Who invented the gas mask?\n(a) Garrett Morgan\n(b) J.P. Knight\n(c) William Potts",
        answer: "a"
    }
]

var score = 0; 

