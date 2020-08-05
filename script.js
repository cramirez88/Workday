$("#currentDay").text(  moment().format("dddd, MMMM Do"))

var workday =["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"];
  for (let i = 0; i < workday.length; i++) {
       var row = $("<div class='row'>")
       var column1 = $("<div class='col-sm-1 time-block'>")
       column1.text(workday[i])
       var column2 = $("<div class='col-sm-10'>")
       var textarea= $("<textarea class='form-control'>")
        column2.html(textarea)
       var column3 = $("<div class='col-sm-1'>")
       var saveBtn = $("<button class= 'saveBtn'>").text("save")
       column3.html(saveBtn)
       row.append(column1, column2, column3)
       $("#workday").append(row)
      
  }

// <div class="row">
// <div class="col-sm-1">
// <div class="time-block">
//  9A.M
// </div>

// </div>
// <div class="col-sm-10">

//   <textarea class="form-control"  ></textarea>
// </div>
// <div class="col-sm-1">

//   <div class="saveBtn">save</div>
// </div>
// </div>