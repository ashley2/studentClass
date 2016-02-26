'use strict';

$(document).ready(init);

function init() {

  $('#addStudent').click(addStudent);
  //only lets click on students
  $('#studentList').on('click', '.student' , clickStudent);
  $('.schools').on('click', '.student' , clickStudent);
  $('.schools').click(clickSchool);
  $('#startOver').click(startOver);


  function addStudent() {

    var age = $('#age').val();
    var name = $('#name').val()

    var $student = $('<div>').addClass('student');


    $('#studentList').append($student);
    $student.text(`${name} ${age}`)

    $('#name').val('');
    $('#age').val('');

  }

  function clickSchool(event){
    $('.selected').appendTo($(this));
    $('.selected').removeClass('selected');
    ageAverage();
  }


  function clickStudent(event){
    event.stopPropagation();
    var $this = $(this);
    var wasSelected = $this.hasClass('selected');
    $('.student').removeClass('selected');
    //get initial state of this

      // remove selected from EVERYTHING
      if (!wasSelected) {
      //if it wasn't selected before, select it
      $this.addClass('selected');
    }
  }
  

  function ageAverage (){

    $('.schools').each(function(){
      var sum = 0;
      $(this).find('.student').each(function(){
        var textValue = $(this).text().split(' ');
        var age = parseInt(textValue[1]);

        sum+=age;
        // arr.push(sum++);
        console.log(sum++);
        // $('.schools').append(sum);
      })
    });


  }

  function  startOver (){

    location.reload();
  }
}


