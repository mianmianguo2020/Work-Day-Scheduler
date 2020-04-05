var currentD;

$(document).ready(function () {

    currentD = new Date();
    $("#currentDay").append(currentD);

    for (let i = 7; i < 21; i++) {
        createRow(i);
    }

});






function createRow(time) {
    let amPmD;
    if (time < 13) {
        amPmD = "am";
    }
    else {
        amPmD = "pm";
    }


    let rowDiv = $("<div>").attr("class", "row");
    $(".container").append(rowDiv);
    let timeDiv = $("<div>").attr("class", "col-sm-2 hour").text(time + amPmD);
    $(rowDiv).append(timeDiv);

    var status = "present";
    var currentT = currentD.getHours();
    if (currentT > time) {
        status = "past";
    }
    else if (currentT < time) {
        status = "future";
    }
    else {
        status = "present";
    }

    let textEl = $("<textarea>").attr("class", "col-sm-9 " + status);
    $(rowDiv).append(textEl);
    let saveDiv = $("<div>").attr("class", "col-sm-1 saveBtn");
    $(rowDiv).append(saveDiv);

    if(localStorage.getItem("todos")===null){
        let blankData = [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
        ]
        localStorage.setItem("todos",JSON.stringify({data: blankData}));
    } else {
        
    }
  var userInput =JSON.parse(localStorage.getItem("todos")).data;
   $(textEl).append(userInput[time-7]);
   
   $(saveDiv).click(function(event){
    event.preventDefault();  
    var userInputA = $(textEl).val();
    userInput[time-7] = userInputA;
    localStorage.setItem("todos",JSON.stringify({data: userInput}));

   });



}