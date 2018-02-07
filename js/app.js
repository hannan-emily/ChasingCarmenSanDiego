var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//12 questions, each with correct and incorrect answers assigned
var questionArray = [{
  question: "An optimistic but unsuccessful metal detectorist spotted someone who looked like Carmen entering 'The Cave of the Crystals', home to the world's of the largest salt crystals. If she is stealing crystals, where is she?",
  correctAnswer: 'Naica, Mexico',
  incorrectAnswers: ['Ashgabat, Turkmenistan','Falkland Islands','Pittsburgh, United States']
},
{
  question: "A bored security guard briefly spotted a woman clutching blueprints at the southwest corner of the Cristo Redentor statue. Where did this sighting happen?",
  correctAnswer: 'Sao Paolo, Brazil',
  incorrectAnswers: ['Naica, Mexico','Geneva, Switzerland','Falkland Islands']
},
{
  question: "While attempting to visit all 446 bridges in 1 day, an off duty firefighter may have seen Carmen trying to steal the historic bolts off The Liberty Bridge. Where was this incident?",
  correctAnswer: 'Pittsburgh, United States',
  incorrectAnswers: ['Okrug, Russia','Sao Paolo, Brazil','Ashgabat, Turkmenistan']
},
{
  question: "Right after pulling out of this train station, the second engineer on the world's oldest steam locomotive, 'The Fairy Queen', thought he saw Carmen attempting to pry valuable engine parts loose. If Carmen really was stealing parts, what city did that train just leave?",
  correctAnswer: 'Alwar, India',
  incorrectAnswers: ['Reykjavik, Iceland','Naica, Mexico','Okrug, Russia']
},
{
  question: "A former army captain thought he saw Carmen atttemping to steal plans from the control room of the Hellisheidarvirkjun geothermal power plant. What city does this power?",
  correctAnswer: 'Reykjavik, Iceland',
  incorrectAnswers: ['Geneva, Switzerland','Ashgabat, Turkmenistan','Moscow, Russia']
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
  question: "While inspecting a leaking pipe deep underground in the Hadron Collider, a physiscit may have seen Carmen shuffling away with several laser scopes. What city were they both underneath?",
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

// 100 to 1000
// (clickable) boxes i'll use to apply a question to each
var questionBoxes = [
  {
    x: 100,
    y: 50,
    img: $('#person1')[0]
  },
  {
    x: 400,
    y: 50,
    img: $('#person2')[0]
  },
  {
    x: 700,
    y: 50,
    img: $('#person3')[0]
  },
  {
    x: 1000,
    y: 50,
    img: $('#person4')[0]
  },
  {
    x: 100,
    y: 280,
    img: $('#person5')[0]
  },
  {
    x: 400,
    y: 280,
    img: $('#person6')[0]
  },
  {
    x: 700,
    y: 280,
    img: $('#person7')[0]
  },
  {
    x: 1000,
    y: 280,
    img: $('#person8')[0]
  },
  {
    x: 100,
    y: 500,
    img: $('#person9')[0]
  },
  {
    x: 400,
    y: 500,
    img: $('#person10')[0]
  },
  {
    x: 700,
    y: 500,
    img: $('#person11')[0]
  },
  {
    x: 1000,
    y: 500,
    img: $('#person12')[0]
  },
];

//this will be the canvas element that interacts with the questionBoxes
var detectiveBox = [{
  x: 250,
  y: 50,
  img: $('#detective')[0]
}];

//display selected elements for this question
var displayQuestion = function() {
  $("#currentQuestion").text(questionArray[0].question); //replace the text in html field with THIS question text
  $("#answer" + 1 + "Text").html(questionArray[0].correctAnswer);
  // questionArray[0].answers.forEach(function(item, index) {
  //   $("#answer" + (index + 1) + "Radio").val(item);
  //   $("#answer" + (index + 1) + "Text").html(item);
  };

//modal for the question array. this appends an "active" class to .question-overlay and .question-content when the "Open" button is clicked
var openModal = function(){
 $(".question-overlay, .question-content").addClass("active");
 displayQuestion(); //call the question data& display in this modal
};

//removes the "active" class off the modal when the "Close" button is clicked
$("#info-close").on("click", function(){
  $(".question-overlay, .question-content").removeClass("active");
});


//CANVAS

$(document).ready(function() {

  //DRAW BOXES WITH IMAGES
  questionBoxes.forEach(function(questionBox) {
    ctx.drawImage(questionBox.img, questionBox.x, questionBox.y, 100, 100);
  });

  //DRAW DETECTIVE BOX
  detectiveBox.forEach(function(detectiveBox) {
    ctx.drawImage(detectiveBox.img, detectiveBox.x, detectiveBox.y, 100, 100);
  });


  // add event listener to click to track where the mouse position is on the canvas
  canvas.addEventListener('click', function(e) {
    var pos = {
      x: e.clientX,
      y: e.clientY
    }

    canvas.addEventListener('keydown', function(event) {
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
           openModal ();
        }
    });

  });
});
