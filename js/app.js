var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//
// var questions = [{
//   question: "An optimistic but unsuccesfful metal dectetorist spotted someone who looked like Carmen entering the Cave of the Crystals, who had dropped a scrap of paper labeled: world's largest salt crystals. Where was she stealing salt?",
//   correctAnswer: 'Naica, Mexico',
//   incorrectChoices: []
// }, {
//   question: "A bored security guard briefly spotted a woman clutching blueprints at the southwest corner of the Cristo Redentor statue. If this was Carmen, where was she?"
//   correctAnswer: 'Sao Paolo',
//   incorrectChoices: []
// }, {
//   question: "While attempting to visit all 446 bridges of this area in 1 day, an off duty firefighter may have seen Carmen trying to steal the historic nuts and bolts off the Liberty Bridge. Where was this incident?"
//   correctAnswer: 'Pittsburgh',
//   incorrectChoices: []
// }, {
//   question: "Right after pulling out of this train station, the second engineer on the The Fairy Queen steam locomotive thought he saw Carmen, attempting to pry engine parts loose. If Carmen really was on the world's oldest operating train, where were they?"
//   correctAnswer: 'Alwar, India',
// }, {
//   question: "A former army captain thought he saw Carmen atttemping to steal plans from the control area of the Hellisheidarvirkjun geothermal power plant. What main area does this power?"
//   correctAnswer: 'Helsinki',
//   incorrectChoices: []
// }, {
//   question: "Both the UK and Argentina claim this place as theirs. A fishmonger might have spotted Carmen on a crumbling dock, attempting to fence whale blubber. Where was she trying to make a deal?".
//   correctAnswer: 'Falkland Islands',
//   incorrectChoices: []
// }, {
//   question: "Two seperate unnamed witnesses reported seeing Carmen chip away at the 69 foot solid gold statue of their president (atop a solid golid horse). If she stole the gold, where was this statue?",
//   correctAnswer: 'Ashgabat',
//   incorrectChoices: []
// }, {
//   question: "A group of geologists visiting the Monument to the Conquerors of Space may have witnessed Carmen attempting to pull the 351 foot titanium sculpture away with a crane. She was uncessful. Where was this?",
//   correctAnswer: 'Moscow',
//   incorrectChoices: []
// }, {
//   question: "Enraged sheep farmers blocked the theft of over 1,000 sheep by someone like Carmen, who escpaed through the world's longest rail tunnel. Where was she, allegly?",
//   correctAnswer: 'Switzerland',
//   incorrectChoices: []
// } {
//   question: "Spotted at night by a amature hot air balloon enthusisat, Carmn may have been digging up the world's largest metroite - the Hoba. Where did he spot her?",
//   correctAnswer: 'Namibia',
//   incorrectChoices: []
// }, {
//   question: "On a night shift, a janitor in the world's smallest power plant, Bilibino Nuclear, thought he saw Carmen slithering back out into air vent. Where is this plant?",
//   correctAnswer: 'Okrug, Russia',
//   incorrectChoices: []
// }, {
//   question: "During an ironic throwback rave in the underground city Derinkuyu, a slightly dazed student thought he saw Carmen stashing a mysetrious batterd trunk. Where is this fabeled city?",
//   correctAnswer: 'Turkey',
//   incorrectChoices: []
// }];

// create circles to draw
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

//tracking intersection - old code
function isIntersect(point, questionBox) {
  return Math.sqrt((point.x-questionBox.x) ** 2 + (point.y - questionBox.y) ** 2) < circle.radius;
}

//action for the questionbox click event
questionBoxes.forEach(questionBox => {
  if (pos, questionBox) {
    console.log('click on question box: ' + questionBoxes.id);
  }

  });
});
