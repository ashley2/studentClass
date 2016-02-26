'use strict';

$(document).ready(init);

function init() {

  $('#addStudent').click(addStudent);
  //only lets click on students
  $('#studentList').on('click', '.student' , clickStudent);

  function addStudent() {

    var age = $('#age').val();
    var name = $('#name').val()

    var $student = $('<div>').addClass('student');
    console.log($student);

    $('#studentList').append($student);
    $student.text(name + age);

  }

 function clickSchool(event){

    $('.selected').appendTo($(this));
    $('.selected').removeClass('selected');

  }

  function clickCup(event) {
    event.stopPropagation();
    var $this = $(this);
    //get initial state of this
    var wasSelected = $this.hasClass('selected');
    $('.cup').removeClass('selected');

      // remove selected from EVERYTHING
      if (!wasSelected) {
      //if it wasn't selected before, select it
      $this.addClass('selected');
    }
    

  }

  function clickStudent(event){
    var $getter = $this.detach();
    $getter.append(whichSchool);
  }


}



