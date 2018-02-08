var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

$(document).ready(function() {

//12 questions, each with correct and incorrect answers assigned
var questionArray = [{
  question: "An optimistic but unsuccessful metal detectorist spotted someone who looked like Carmen entering 'The Cave of the Crystals', home to the world's of the largest salt crystals. If she is stealing crystals, where is she?",
  correctAnswer: 'Naica, Mexico',
  incorrectAnswers: ['Ashgabat, Turkmenistan','Falkland Islands','Pittsburgh, United States'],
  answers:[],
  carmen:[]
},
{
  question: "A bored security guard briefly spotted a woman clutching blueprints at the southwest corner of the Cristo Redentor statue. Where did this sighting happen?",
  correctAnswer: 'Sao Paolo, Brazil',
  incorrectAnswers: ['Naica, Mexico','Geneva, Switzerland','Falkland Islands'],
  answers:[],
  carmen:[]
},
{
  question: "While attempting to visit all 446 bridges in 1 day, an off duty firefighter may have seen Carmen trying to steal the historic bolts off The Liberty Bridge. Where was this incident?",
  correctAnswer: 'Pittsburgh, United States',
  incorrectAnswers: ['Okrug, Russia','Sao Paolo, Brazil','Ashgabat, Turkmenistan'],
  answers:[],
  carmen:[]
},
{
  question: "Right after pulling out of this train station, the second engineer on the world's oldest steam locomotive, 'The Fairy Queen', thought he saw Carmen attempting to pry valuable engine parts loose. If Carmen really was stealing parts, what city did that train just leave?",
  correctAnswer: 'Alwar, India',
  incorrectAnswers: ['Reykjavik, Iceland','Naica, Mexico','Okrug, Russia'],
  answers:[],
  carmen:[]
},
{
  question: "A former army captain thought he saw Carmen atttemping to steal plans from the control room of the Hellisheidarvirkjun geothermal power plant. What city does this power?",
  correctAnswer: 'Reykjavik, Iceland',
  incorrectAnswers: ['Geneva, Switzerland','Ashgabat, Turkmenistan','Moscow, Russia'],
  answers:[],
  carmen:[]
},
{
  question: "This southern hemisphere locale is still officially claimed by two different countries. A fishmonger might have spotted Carmen attempting to fence 1 ton of whale blubber. Where was she trying to make a deal?",
  correctAnswer: 'Falkland Islands',
  incorrectAnswers: ['Sao Paolo, Brazil','Alwar, India','Grootfontein, Namibia'],
  answers:[],
  carmen:[]
},
{
  question: "Two seperate unnamed witnesses reportedly saw Carmen chip away at the 69 foot, solid gold statue of their president (atop a solid golid horse). If she stole that gold, where was this statue?",
  correctAnswer: 'Ashgabat, Turkmenistan',
  incorrectAnswers: ['Moscow, Russia','Nevsehir Province, Turkey','Pittsburgh, United States'],
  answers:[],
  carmen:[]
},
{
  question: "A group of geologists visiting the 'Monument to the Conquerors of Space' may have witnessed Carmen attempting to pull the 351 foot titanium sculpture away with a rusty crane. She was unsuccessful. Where was this?",
  correctAnswer: 'Moscow, Russia',
  incorrectAnswers: ['Nevsehir Province, Turkey','Pittsburgh, United States','Sao Paolo, Brazil'],
  answers:[],
  carmen:[]
},
{
  question: "While inspecting a leaking pipe deep underground in the Hadron Collider, a physiscit may have seen Carmen shuffling away with several laser scopes. What city were they both underneath?",
  correctAnswer: 'Geneva, Switzerland',
  incorrectAnswers: ['Alwar, India','Reykjavik, Iceland','Moscow, Russia'],
  answers:[],
  carmen:[]
},
{
  question: "Spotted at night by a amature hot air balloon enthusisast, Carmen may have been digging up the world's largest meteroite: 'The Hoba'. Where did he spot her?",
  correctAnswer: 'Grootfontein, Namibia',
  incorrectAnswers: ['Falkland Islands','Naica, Mexico','Okrug, Russia'],
  answers:[],
  carmen:[]
},
{
  question: "On a night shift, a janitor in the world's smallest power plant 'Bilibino Nuclear' thought he saw Carmen slithering out through an air vent. Where is this nuclear plant?",
  correctAnswer: 'Okrug, Russia',
  incorrectAnswers: ['Nevsehir Province, Turkey','Moscow, Russia','Reykjavik, Iceland'],
  answers:[],
  carmen:[]
},
{
  question: "During an ironic throwback rave in the underground city Derinkuyu, a slightly dazed student thought he saw Carmen stashing a mysterious battered trunk. What above-ground city is this ruin under?",
  correctAnswer: 'Nevsehir Province, Turkey',
  incorrectAnswers: ['Grootfontein, Namibia','Alwar, India','Naica, Mexico'],
  answers:[],
  carmen:[]
}];

// 100 to 1000
// (clickable) boxes i'll use to apply a question to each
var questionBoxes = [
  {
    x: 150,
    y: 50,
    img: $('#person1')[0],
    answered: false
  },
  {
    x: 400,
    y: 50,
    img: $('#person2')[0]
  },
  {
    x: 650,
    y: 50,
    img: $('#person3')[0]
  },
  {
    x: 900,
    y: 50,
    img: $('#person4')[0]
  },
  {
    x: 1150,
    y: 50,
    img: $('#person5')[0]
  },
  {
    x: 150,
    y: 250,
    img: $('#person6')[0]
  },
  {
    x: 1150,
    y: 250,
    img: $('#person7')[0]
  },
  {
    x: 150,
    y: 500,
    img: $('#person8')[0]
  },
  {
    x: 400,
    y: 500,
    img: $('#person9')[0]
  },
  {
    x: 650,
    y: 500,
    img: $('#person10')[0]
  },
  {
    x: 900,
    y: 500,
    img: $('#person11')[0]
  },
  {
    x: 1150,
    y: 500,
    img: $('#person12')[0]
  },
];

var turnCount = 0;

//CANVAS ELEMENT THAT INTERACTS WITH QUESTIONBOX ELEMENTS
var detectiveBox = {
  x: 650,
  y: 250,
  img: $('#detective')[0]
};

//COLLECT ALL ANSWERS FOR EACH OBJECT INTO A NEW COMBINED ARRAY
var answers = function() {
  questionArray.forEach(function(item) {
    item.answers = item.incorrectAnswers; //add all incorrect answers (in array) to empty answers array
    item.answers.push(item.correctAnswer); //add in 1 more item to the answers array, "correct answer"
  });
  shuffleAnswers();
};

//SHUFFLE COMBINED ANSWERS IN EACH ANSWER ARRAY
var shuffleAnswers = function() {
  questionArray.forEach(function(item) { //run this for every object in the questionArray
    var randomAnswers = [];
    for(var i = 0; i < 4; i++) {
      var randomIndex = Math.round(Math.random() * (item.answers.length - 1));
      randomAnswers[i] = item.answers.splice(randomIndex, 1)[0];
    }
    item.answers = randomAnswers;
    console.log(questionArray);
  });
}

//SET CARMEN CONDITION TO TRUE (THE END GAME WIN CONDITION) FOR ONE RANDOM QUESTI0N
var addCarmenClass = function() {
  var randomIndex = Math.floor((Math.random() * 11) + 1); // generate a random number for one of the 12 objects (0-11 in array)
  console.log(randomIndex);
  questionArray[randomIndex].carmen.push(true); //now add the winning class of carmen to the object at that index number
  console.log(questionArray);
  }

//DISPLAY QUESTIONS & ANSWERS
var displayQuestion = function() {
  $("#currentQuestion").text(questionArray[turnCount].question); //replace the text in html field with THIS question text
  $("#answer" + 1 + "Text").html(questionArray[0].correctAnswer);
  // answers();
  // addCarmenClass();
  // console.log(questionArray);
  // shuffleAnswers();
  // console.log(questionArray)
  // questionArray[0].answers.forEach(function(item, index) {
  //   $("#answer" + (index + 1) + "Radio").val(item);
  //   $("#answer" + (index + 1) + "Text").html(item);
  // });
};

//modal for the question array. this appends an "active" class to .question-overlay and .question-content when the "Open" button is clicked
var openModal = function(){
 $(".question-overlay, .question-content").addClass("active");
 displayQuestion();
 answers();
 addCarmenClass();
};

//removes the "active" class off the modal when the "Close" button is clicked
$("#info-close").on("click", function(){
  $(".question-overlay, .question-content").removeClass("active");
  turnCount++;
});

var crash = false;

//COLLISION DETECTION
var collisionDetection = function(x1, y1, x2, y2,) {
  //calculate the distance first
  var xDistance = x2 - x1;
  var yDistance = y2 - y1;
  var crashZone = Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));//this is how we do an exponent
  if (crashZone < 80) {
    crash = true;
  }
};

//CHECKS FOR COLLISIONS WITH TREASURE
var collisonCheck = function(question){
  for (var i = 0; i < questionBoxes.length; i++) {
    collisionDetection(detectiveBox.x, detectiveBox.y, questionBoxes[i].x,questionBoxes[i].y);
    if (crash === true) {
      crash = false;
      detectiveBox.x = 650;
      detectiveBox.y = 350;
      console.log(turnCount);
      openModal();
    }
  }
};

var animationLoop = function() {

  //CLEAR BOARD BEFORE DRAWING
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //DRAW BOXES WITH IMAGES
  questionBoxes.forEach(function(questionBox) {
    ctx.drawImage(questionBox.img, questionBox.x, questionBox.y, 100, 100);
  });

  //DRAW DETECTIVE BOX
  ctx.drawImage(detectiveBox.img, detectiveBox.x, detectiveBox.y, 100, 100);

  collisonCheck();
};

setInterval(animationLoop, 100);

//MOVE DETECTIVE ICON AROUND CANVAS
  window.addEventListener('keydown', function(event) {

    if (event.keyCode === 38) {
      detectiveBox.y -= 10;
    }
    //down
    if (event.keyCode === 40) {
      detectiveBox.y += 10;
    }
    //left
    if (event.keyCode === 37) {
      detectiveBox.x -= 10;
    }
    //innerH
    if (event.keyCode === 39) {
      detectiveBox.x += 10;
    }
  });
});



    // //action for the questionbox click event
    // questionBoxes.forEach(function(box, index) {
    //   var top = box.y;
    //   var bottom = (box.y + 100);
    //   var rightSide = (box.x + 100);
    //   var leftSide = box.x;
    //   if ((pos.x > leftSide) &&
    //      (pos.x < rightSide) &&
    //      (pos.y > top) &&
    //      (pos.y < bottom)) {
    //        openModal ();
    //     }
    // });
