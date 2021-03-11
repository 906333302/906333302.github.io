

var check = '<i class="bi bi-check-circle-fill" id="icon-check"></i>';
var error = '<i class="bi bi-exclamation-square-fill"></i>'

var unavailableDates = [];
const setDateFormat = "mm/dd/yy";

var popup_prof = '<div class="alert alert-warning alert-dismissible"><button type="button" class="close" data-dismiss="alert">&times;</button><strong>Please Notice! </strong>Professor filted</div>';
var popup_date = '<div class="alert alert-warning alert-dismissible"><button type="button" class="close" data-dismiss="alert">&times;</button><strong>Please Notice! </strong>Date filted</div>';

function disableDates(date) {
    // Sunday is Day 0, disable all Sundays
    if (date.getDay() == 0 || date.getDay() == 6)
        return [false];
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ unavailableDates.indexOf(string) == -1 ]
}

function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
    if(a.length != 9){
        return false;
    }else{
        return true;
    }
}


function validateCreditCard(txtCredit) {
    var a = document.getElementById(txtCredit).value;
    if(a.length != 16){
        return false;
    }else{
        return true;
    }
}

function validateDateByProf(prof){
    switch (prof){
        case 'Coco':
            unavailableDates = ["03/25/2021","07/26/2021","07/30/2021"];
            break;
        case 'Helen':
            unavailableDates = ["03/15/2021","03/18/2021","07/19/2021"];
            break;
        case 'Tony':
            unavailableDates = ["03/15/2021","03/18/2021","03/22/2021"];
            break;
        case 'Jerry':
            unavailableDates = ["03/03/2021","03/12/2021","03/19/2021"];
            break;
        case 'Jim':
            unavailableDates = ["03/05/2021","03/31/2021"];
            break;
        case 'Jax':
            unavailableDates = ["03/03/2021","03/19/2021"];
            break;
        case 'Karl':
            unavailableDates = ["03/11/2021"];
            break;
        case 'Alex':
            unavailableDates = ["03/03/2021","03/12/2021","03/19/2021"];
            break;
        default:
            unavailableDates = [];
    }
}

unavailableProfs = [];

function validateProfByService(service){
    switch (service){
        case 'Haircut':
            unavailableProfs = ['Helen', 'Karl', 'Alex', 'Tony', 'Jerry'];
            break;
        case 'Drying':
            unavailableProfs = ['Coco', 'Jax', 'July', 'Tony', 'Herry'];
            break;
        case 'Coloring':
            unavailableProfs = ['Helen', 'Coco', 'Jax', 'Karl', 'Alex'];
            break;
        case 'SPA':
            unavailableProfs = ['Coco', 'July', 'Karl', 'Tony', 'Jim'];
            break;
        default:
            unavailableProfs = [];
    }
}





$(document).ready(function(){

    var service = "Drying";
    var prof = "Coco";

    $( "#radioset" ).buttonset();

    var section = $("section:not('.negative')").attr('id');
    console.log(section);

    $(".home-nav").on("click", function(){
        $(".navbar-nav .active").removeClass("active");
        if($("section:not('.negative')").attr('id') == 'home'){
            console.log("home");
        }else{
            $("section:not('.negative')").addClass('negative');
            $("#home").removeClass("negative");
        }
    });
    $(".service-nav").on("click", function(){
        $(".navbar-nav .active").removeClass("active");
        if($("section:not('.negative')").attr('id') == 'service'){
            console.log("service");
        }else{
            $(".service-nav").addClass("active");
            $("section:not('.negative')").addClass('negative');
            $("#service").removeClass("negative");
        }
    });
    $(".photos-nav").on("click", function(){
        $(".navbar-nav .active").removeClass("active");
        if($("section:not('.negative')").attr('id') == 'photos'){
            return;
        }else {
            $(".photos-drop-nav").addClass("active");
            $("section:not('.negative')").addClass('negative');
            $("#photos").removeClass('negative');
        }
    });
    $(".payment-nav").on("click", function(){
        $(".navbar-nav .active").removeClass("active");
        if($("section:not('.negative')").attr('id') == 'payment'){
            return;
        }else {
            $(".payment-nav").addClass("active");
            $("section:not('.negative')").addClass('negative');
            $("#payment").removeClass('negative');
        }
    });
    $(".contact-nav").on("click", function(){
        $(".navbar-nav .active").removeClass("active");
        if($("section:not('.negative')").attr('id') == 'contact'){
            return;
        }else {
            $(".contact-nav").addClass("active");
            $("section:not('.negative')").addClass('negative');
            $("#contact").removeClass('negative');
        }
    });

    $(".login").on("click", function(){
        $("#appoint_div").addClass('negative');
        $("#login_div").removeClass('negative');
    });

    $("#appoint").on("click", function(event){
        event.preventDefault();
        $("#login_div").addClass('negative');
        $("#appoint_div").removeClass('negative');
    });
    


    $( "#dateInput" ).datepicker(
        {
            dateFormat: setDateFormat,
            // no calendar before June 1rst 2020
            minDate: new Date('06/01/2020'),  
            maxDate: '+4M',
            // used to disable some dates
            beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDates
        }   
    );

    $("#phone").on("change", function(){
        if (!validatePhone("phone")){
            $("#button-addon2").text('');
            $("#button-addon2").attr({title: "Wrong phont number format; 9 digits required."});
            $("#button-addon2").append(error);
        }
        else {
            $("#button-addon2").text('');
            $("#button-addon2").attr({title: "Verification completed!"});
            $("#button-addon2").append(check);
            $("#icon-check").animate({"color": "green"}, 1000);
        }
    });

    $("#credit-card").on("change", function(){
        if (!validateCreditCard("credit-card")){
            $("#button-addon3").text('');
            $("#button-addon3").attr({title: "Invalid credit card; 16 digits required."});
            $("#button-addon3").append(error);
        }
        else {
            $("#button-addon3").text('');
            $("#button-addon3").attr({title: "Verification completed!"});
            $("#button-addon3").append(check);
            $("#icon-check").animate({"color": "green"}, 1000);
        }
    });

    $("#FormControlSelect1").on("change", function(){
        prof = ($("#FormControlSelect1 option:selected").text());
        validateDateByProf(prof);
        console.log(unavailableDates);
        $("div.prof_popup").html(popup_date);
        // $("#FormControlSelect1 option").removeAttr('disabled');
        // for(let i = 0; i<unavailableDates.length; i++){
        //     let d = unavailableDates[i];
        //     $('#'+d).prop('disabled', true);
        // }
    });

    $("#radioset input").on("change", function(){
        service = ($('input[name=radio]:checked', '#radioset').val());
        validateProfByService(service);
        console.log(unavailableProfs);
        $("#FormControlSelect1 option").removeAttr('disabled');
        for(let i = 0; i<unavailableProfs.length; i++){
            let p = unavailableProfs[i];
            $('#'+p).prop('disabled', true);
        }
        $("div.service_popup").html(popup_prof);
    });


    $("#credit-card").on("mouseenter", function(){
        $("#credit-card").addClass("showInput");
    });
 
    $("#credit-card").on("mouseleave", function(){
        $("#credit-card").removeClass("showInput");
    });
  
    // https://jqueryui.com/tooltip/ 
    // The class "highlight" used here is predefined in JQuery UI
    // the message of the tooltip is encoded in the input (in the HTML file)
    $("#credit-card").tooltip({
        classes: {
          "ui-tooltip": "highlight"
        }
      });

      $("#phone").tooltip({
        classes: {
          "ui-tooltip": "highlight"
        }
      });


});