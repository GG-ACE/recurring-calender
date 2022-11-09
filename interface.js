$(function() {
    $(function() {
        $("#event-name").focus();
        if ($('#all-day-event-checkbox')[0].checked) {
            showAllDayEventOptions();
        }
    });
     $(document).on( 'keydown', function( e ){
        if ( ! $( e.target ).is( ':input' ) ) {
        
            if ( 83 == e.which && e.ctrlKey && e.shiftKey) {
           
                $('#create-event-button').click();
                $(document).trigger('log', ['ShortcutCreate', {key1: "val1", key2: "val2",key3:"val3"}])
            }
        }
        });


    $( "#event-start-date" ).datetimepicker();
    $( "#event-end-date" ).datetimepicker();
    $("#all-day-event-date").datetimepicker({
        timepicker: false,
        onChangeDateTime: function(dp, $input) {
            var datetime = $input.val();
            var date = datetime.split(" ")[0];
            $input.val(date);
        }
    });
    
    $( "#recurrent-event-end-date" ).datetimepicker();

    $('#all-day-event-checkbox, #all-day-event-checkbox1').change(function() {
    
        if ($('#all-day-event-checkbox')[0].checked) {
            showAllDayEventOptions();
        } else {
            hideAllDayEventOptions();
        }
    });

    $('#recurrent-event-type-selector').change(function() {
        var val = $("#recurrent-event-type-selector option:selected").val();
        hideRecurrentEventOptions();
        hideRecurrentEventDetails();
        
        if (val == "custom") {
            showRecurrentEventOptions();
        } else {
            resetAllRecurrentEventDetails();
        }

        if (val == ("none")) {
            hideRecurrentEventEndDetails();
        } else {
            showRecurrentEventEndDetails();
        }
    });

    $('#recurrent-event-time-selector').change(function() {
        var val = $("#recurrent-event-time-selector option:selected").val();
        hideRecurrentEventDetails();

        if (val == "daily") {
            $('#daily-recurrent-details').show();
        } else if (val == "weekly") {
            $('#weekly-recurrent-details').show();
        } else if (val == "monthly") {
            $('#monthly-recurrent-details').show();
        } else if (val == "yearly") {
            $('#yearly-recurrent-details').show();
        }
    });

    $('input[type=text]').focus(function() { 
        $(this).select(); 
    });
});

// Functions to reset recurrent event interface
function hideRecurrentEventDetails() {
    $('#daily-recurrent-details').hide();
    $('#weekly-recurrent-details').hide();
    $('#monthly-recurrent-details').hide();
    $('#yearly-recurrent-details').hide();
}
function hideRecurrentEventOptions() {
    $('#recurrent-event-details-line').hide();
    $('#recurrent-event-details').hide();
}
function showRecurrentEventOptions() {
    $('#recurrent-event-details-line').show();
    $('#recurrent-event-details').show();
    $('#daily-recurrent-details').show();
}
function resetAllRecurrentEventDetails() {
    $('#recurrent-event-time-selector').val('daily');
    $('.weekday-checkbox').prop('checked', false);
    $('.day-checkbox').prop('checked', false);
    $('.month-checkbox').prop('checked', false);
}
function showAllDayEventOptions() {
    $('#start-time-row').hide();
    $('#end-time-row').hide();
    $('#all-day-event-row').show();
}
function hideAllDayEventOptions() {
    $('#all-day-event-row').hide();
    $('#start-time-row').show();
    $('#end-time-row').show();
    $('#all-day-event-date').val('');
}

function showRecurrentEventEndDetails() {
    $('#recurrent-event-end-date-row').show();
}
function hideRecurrentEventEndDetails() {
    $('#recurrent-event-end-date-row').hide();
    $('#recurrent-event-end-date').val('');
}

// hacky way to get the button to accommodate size of hidden divs in Safari
function hideAndShowCreateEventButtom() {
    $('#create-event-button').hide();
    $('#create-event-button').show();
}
function clearInput(){
    var getValue= document.getElementById("event-name");
    var getValue1= document.getElementById("event-location");
    var getValue2= document.getElementById("event-start-date");
    var getValue3= document.getElementById("event-end-date");
    var getValue4= document.getElementById("all-day-event-date");
    var getValue5= document.getElementById("recurrent-event-type-selector");
    var getValue6= document.getElementById("recurrent-event-end-date");
      if (getValue.value !="") {
          getValue.value = "";
      }
      if (getValue1.value !="") {
        getValue1.value = "";
      }
      if (getValue2.value !="") {
        getValue2.value = "";
      }
      if (getValue3.value !="") {
        getValue3.value = "";
      }
      if (getValue4.value !="") {
        getValue4.value = "";
      }
      if (getValue5.value !="") {
        getValue5.value = "None";
      }
      if (getValue6.value !="") {
        getValue6.value = "";
      }
    
      $(document).trigger('log', ['resetbutton', {key1: "val1", key2: "val2"}])
}
