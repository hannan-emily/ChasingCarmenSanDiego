var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// When the user clicks on the button, open the modal
//appends an "active" class to .info and .question-content when the "Open" button is clicked
var openModal = function(){
 $(".question-overlay, .question-content").addClass("active");
};

//removes the "active" class off the modal when the "Close" button is clicked
$("#info-close, .question-overlay").on("click", function(){
  $(".question-overlay, .question-content").removeClass("active");
});


//12 questions, each with 1 correct answer
var questions = [{
  question: "An optimistic but unsuccessful metal detectorist spotted someone who looked like Carmen entering the Cave of the Crystals, home to some of the largest salt crystals in the world. If she is stealing crystals, where is she?",
  correctAnswer: 'Naica, Mexico',
  incorrectAnswers: ['Ashgabat, Turkmenistan','Falkland Islands','Pittsburgh, United States']
},
{
  question: "A bored security guard briefly spotted a woman clutching blueprints at the Southwest corner of the Cristo Redentor statue. Where did this sighting happen?",
  correctAnswer: 'Sao Paolo, Brazil',
  incorrectAnswers: ['Naica, Mexico','Geneva, Switzerland','Falkland Islands']
},
{
  question: "While attempting to visit all 446 bridges in 1 day, an off duty firefighter may have seen Carmen trying to steal the historic nuts and bolts off the Liberty Bridge. Where was this incident?",
  correctAnswer: 'Pittsburgh, United States',
  incorrectAnswers: ['Okrug, Russia','Moscow, Russia','Ashgabat, Turkmenistan']
},
{
  question: "Right after pulling out of this train station, the second engineer on the The Fairy Queen steam locomotive thought he saw Carmen, while she attempted to pry historic engine parts loose. If Carmen really was on the world's oldest operating train, where was this station?",
  correctAnswer: 'Alwar, India',
  incorrectAnswers: ['Reykjavik, Iceland','Naica, Mexico','Okrug, Russia']
},
{
  question: "A former army captain thought he saw Carmen atttemping to steal plans from the control area of the Hellisheidarvirkjun geothermal power plant. What does this power?",
  correctAnswer: 'Reykjavik, Iceland',
  incorrectAnswers: ['Geneva, Switzerland','Ashgabat, Turkmenistan','Falkland Islands']
},
{
  question: "This southern hemisphere locale is still officially claimed by two different countries. A fishmonger might have spotted Carmen attempting to fence 1 ton of whale blubber. Where was she trying to make a deal?",
  correctAnswer: 'Falkland Islands',
  incorrectAnswers: ['Sao Paolo, Brazil','Alwar, India','Grootfontein, Namibia']
},
{
  question: "Two seperate unnamed witnesses reportedly saw Carmen chip away at the 69 foot, solid gold statue of their president (atop a solid golid horse). If she stole that gold, where was this statue?",
  correctAnswer: 'Ashgabat, Turkmenistan',
  incorrectAnswers: ['Moscow, Russia','Nevsehir Province, Turkey','Pittsburgh, United States']
},
{
  question: "A group of geologists visiting the 'Monument to the Conquerors of Space' may have witnessed Carmen attempting to pull the 351 foot titanium sculpture away with a rusty crane. She was unsuccessful. Where was this?",
  correctAnswer: 'Moscow, Russia',
  incorrectAnswers: ['Nevsehir Province, Turkey','Pittsburgh, United States','Sao Paolo, Brazil']
},
{
  question: "While inspecting a leaking pipe deep underground in the Hadron Collider, a physiscit may have seen Carmen shuffling away with several laser scopes. What city were they both underneath?"
  correctAnswer: 'Geneva, Switzerland',
  incorrectAnswers: ['Alwar, India','Reykjavik, Iceland','Moscow, Russia']
},
{
  question: "Spotted at night by a amature hot air balloon enthusisast, Carmen may have been digging up the world's largest meteroite: 'The Hoba'. Where did he spot her?",
  correctAnswer: 'Grootfontein, Namibia',
  incorrectAnswers: ['Falkland Islands','Naica, Mexico','Okrug, Russia']
},
{
  question: "On a night shift, a janitor in the world's smallest power plant 'Bilibino Nuclear' thought he saw Carmen slithering out through an air vent. Where is this nuclear plant?",
  correctAnswer: 'Okrug, Russia',
  incorrectAnswers: ['Nevsehir Province, Turkey','Moscow, Russia','Reykjavik, Iceland']
},
{
  question: "During an ironic throwback rave in the underground city Derinkuyu, a slightly dazed student thought he saw Carmen stashing a mysterious battered trunk. What above-ground city is this ruin under?",
  correctAnswer: 'Nevsehir Province, Turkey',
  incorrectAnswers: ['Grootfontein, Namibia','Alwar, India','Naica, Mexico']
}];


// (clickable) boxes i'll use to apply a question to each
var questionBoxes = [
  {
    x: 40,
    y: 40,
    color: 'rgb(255,0,0)'
  },
  {
    x: 600,
    y: 10,
    color: 'rgb(255,0,0)'
  },
  {
    x: 250,
    y: 140,
    color: 'rgb(255,0,0)'
  },
  {
    x: 400,
    y: 400,
    color: 'rgb(255,0,0)'
  },
  {
    x: 550,
    y: 650,
    color: 'rgb(255,0,0)'
  },
  {
    x: 850,
    y: 500,
    color: 'rgb(255,0,0)'
  },
  {
    x: 900,
    y: 40,
    color: 'rgb(255,0,0)'
  },
  {
    x: 600,
    y: 350,
    color: 'rgb(255,0,0)'
  },
  {
    x: 1000,
    y: 700,
    color: 'rgb(255,0,0)'
  },
  {
    x: 10,
    y: 700,
    color: 'rgb(255,0,0)'
  },
  {
    x: 100,
    y: 500,
    color: 'rgb(255,0,0)'
  },
  {
    x: 1010,
    y: 300,
    color: 'rgb(255,0,0)'
  },
];

//canvas functions below

//draw boxes
questionBoxes.forEach(questionBox => {
  ctx.fillStyle = questionBox.color;
  ctx.fillRect(questionBox.x, questionBox.y, 100, 100)
});

//add event listener to click to track where the mouse position is on the canvas
canvas.addEventListener('click', (e) => {
  var pos = {
    x: e.clientX,
    y: e.clientY
  };

  //action for the questionbox click event
  questionBoxes.forEach(function(box, index) {
    var top = box.y;
    var bottom = (box.y + 100);
    var rightSide = (box.x + 100);
    var leftSide = box.x;
    if ((pos.x > leftSide) &&
       (pos.x < rightSide) &&
       (pos.y > top) &&
       (pos.y < bottom)) {
         console.log('box');
         console.log(questionBoxes[index].y);
         openModal ();
      }
  });
});
