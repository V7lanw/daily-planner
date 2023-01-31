$(document).ready(function () {
    // listen for save button clicks
    $(".saveBtnOdd, .saveBtnEven").on("click", function () {
        console.log("It saved");
        let timeId = $(this).parent().attr("id");
        console.log(timeId);
        let value = $(this).siblings(".description").val();
        console.log(value);
        // TODO: using JSON here
        localStorage.setItem(timeId, value);
        $(".notification").addClass("show");
        setTimeout(function () {
            $(".notification").removeClass("show");
        }, 5000);
    });
    
    function hourUpdate () {
        let currentHour = moment().hours();
        console.log(currentHour);
        // One way of traverse all time blocks
        // $(".time-block").each(function () {
        //     let blockHour = parseInt($(this).attr("id").split("-")[1]);
        //     console.log(blockHour);
        // });
        // Another way of traverse all time blocks
        for (let i = 0; i < $(".time-block").length; i++) {
            let blockHour = parseInt($(".time-block")[i].getAttribute("id").split("-")[1]);
            console.log(blockHour);
            // Here, if you would like to test all the time blocks and current 
            // time, you could change your system clock. That works for localhost, 
            // or live server version, I don't know whether it works for GitHub pages.
            if (blockHour < currentHour) {
                $(".time-block")[i].classList.add("past");
                $(".time-block")[i].classList.remove("present");
                $(".time-block")[i].classList.remove("future");
            } else if (blockHour === currentHour) {
                $(".time-block")[i].classList.remove("past");
                $(".time-block")[i].classList.add("present");
                $(".time-block")[i].classList.remove("future");
            } else {
                $(".time-block")[i].classList.remove("past");
                $(".time-block")[i].classList.remove("present");
                $(".time-block")[i].classList.add("future");
            }
        }
    }
    hourUpdate();

    let interval = setInterval(hourUpdate, 15000);

    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));

    // I don't know why the text content is blank if I just set text using jQuery,
    // but now the text content is the formatted date info.
    let today = $("#currentDay").text(moment().format("dddd, MMMM, Do"));
    console.log(today);
});