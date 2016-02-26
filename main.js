'use strict';

$(document).ready(init);

function init() {

  $('#addStudent').click(addStudent);
  //only lets click on students
  $('#studentList').on('click', '.student' , clickStudent);
  $('#studentList').on('click', '.schools', clickSchool);

  function addStudent() {

    var age = $('#age').val();
    var name = $('#name').val()

    var $student = $('<div>').addClass('student');


    $('#studentList').append($student);
    $student.text(name + age);

  }

  function clickSchool(event){


    $('.selected').appendTo($(this));
    $('.selected').removeClass('selected');

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

    function pickSchool () {

  
    
      
    }


  }
}


