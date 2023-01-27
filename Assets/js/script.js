//this shows the time

var today = dayjs();
var saveButton = $('#saveBtn');

function displayTime() {

  $('#currentDay').text(today.format('MMM D YYYY, h:mm:ss A'));

};
displayTime();
setInterval(displayTime, 1000);

var time = today.hour();


var timeBlock = $('#timeblock');
var timeEl = $('section');

//this changes the color on each of the text boxes based off of time

timeEl.each(function () {
var timeId = $(this).attr('id')
  if (timeId < time) {
    $(this).css({ 'background-color': '#d3d3d3', color: 'white' });
  } else if (timeId == time) {
    $(this).css({ 'background-color': '#ff6961', color: 'white' });
  } else {
    $(this).css({
      'background-color': '#77dd77',
      color: 'white'
    });
  };
})

//button would save the value that is input inside the textboxes

$('.btn').on("click", function () {
  var task = $(this).siblings('.description').val()
  var key = $(this).attr('id')

  localStorage.setItem(key, task)

  showTasks()

});

//this would output the tasks saved previously

function showTasks() {
  for(var i = 9; i < 18; i++) {
    var currentTask = localStorage.getItem(i)
    $("#text-"+ i).text(currentTask)
  }
}

// this just shows the output at the start of refreshing

showTasks();
