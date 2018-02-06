var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// //overlay modal
// var openOverlay = function() {
//   $(".info-overlay, .info-content").addClass("active");
//   console.log('openOverlay function ran');
// };
//
// removes the "active" class to .info and .info-content when the "Close" button is clicked
// var closeOverlay = function() {
//   $(".info-overlay, .info-content").removeClass("active");
// };

//12 questions, each with 1 correct answer
var questions = [{
  question: "An optimistic but unsuccessful metal detectorist spotted someone who looked like Carmen entering the Cave of the Crystals, home to some of the largest salt crystals in the world. If she is stealing crystals, where is she?",
  correctAnswer: 'Naica, Mexico',
  incorrectChoices: []
},
{
  question: "A bored security guard briefly spotted a woman clutching blueprints at the Southwest corner of the Cristo Redentor statue. Where did this sighting happen?",
  correctAnswer: 'Sao Paolo',
  incorrectChoices: []
},
{
  question: "While attempting to visit all 446 bridges in 1 day, an off duty firefighter may have seen Carmen trying to steal the historic nuts and bolts off the Liberty Bridge. Where was this incident?",
  correctAnswer: 'Pittsburgh',
  incorrectChoices: []
},
{
  question: "Right after pulling out of this train station, the second engineer on the The Fairy Queen steam locomotive thought he saw Carmen, while she attempted to pry historic engine parts loose. If Carmen really was on the world's oldest operating train, where was this station?",
  correctAnswer: 'Alwar, India',
},
{
  question: "A former army captain thought he saw Carmen atttemping to steal plans from the control area of the Hellisheidarvirkjun geothermal power plant. What does this power?",
  correctAnswer: 'Helsinki',
  incorrectChoices: []
},
{
  question: "Both the United Kingdom and Argentina claim this place as theirs. A fishmonger might have spotted Carmen on a crumbling dock, attempting to fence 1 ton of whale blubber. Where was she trying to make a deal?",
  correctAnswer: 'Falkland Islands',
  incorrectChoices: []
},
{
  question: "Two seperate unnamed witnesses reportedly saw Carmen chip away at the 69 foot, solid gold statue of their president (atop a solid golid horse). If she stole that gold, where was this statue?",
  correctAnswer: 'Ashgabat',
  incorrectChoices: []
},
{
  question: "A group of geologists visiting the 'Monument to the Conquerors of Space' may have witnessed Carmen attempting to pull the 351 foot titanium sculpture away with a rusty crane. She was unsuccessful. Where was this?",
  correctAnswer: 'Moscow',
  incorrectChoices: []
},
{
  question: "Enraged sheep farmers blocked the theft of over 1,000 innocent sheep by Carmen (possibly), who escaped through the world's longest rail tunnel. Where was she, allegly?",
  correctAnswer: 'Switzerland',
  incorrectChoices: []
},
{
  question: "Spotted at night by a amature hot air balloon enthusisast, Carmen may have been digging up the world's largest meteroite: 'The Hoba'. Where did he spot her?",
  correctAnswer: 'Namibia',
  incorrectChoices: []
},
{
  question: "On a night shift, a janitor in the world's smallest power plant 'Bilibino Nuclear' thought he saw Carmen slithering out through an air vent. Where is this nuclear plant?",
  correctAnswer: 'Okrug, Russia',
  incorrectChoices: []
},
{
  question: "During an ironic throwback rave in the underground city Derinkuyu, a slightly dazed student thought he saw Carmen stashing a mysetrious batterd trunk. Where is this fabeled city?",
  correctAnswer: 'Turkey',
  incorrectChoices: []
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

//canvas functionality - draw the boxes, add click listeners, execute these functions

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
  questionBoxes.forEach(function(box) {
    var top = box.y;
    var bottom = (box.y - 100);
    var rightSide = (box.x + 100);
    var leftSide = box.x;
    if ((pos.x < leftSide) ||
       (pos.x > rightSide) ||
       (pos.y < top) ||
       (pos.y > bottom)) {
         console.log('box');
       }
       else {
         console.log('no box');
       }
  });
});
