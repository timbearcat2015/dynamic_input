const submitB = document.getElementById('submitButton');

$(document).ready(function() {
    var max_fields = 10;
    var wrapper = $(".container1");
    var add_button = $(".add_form_field");


    var x = 1;
    $(add_button).click(function(e) {
        e.preventDefault();
        if (x < max_fields) {
            x++;
            $(wrapper).append(`<div><input type="text" id="mytext[${x}]"/><button id="alertButton[${x}]" onclick="alert(document.getElementById('mytext[${x}]').value)">Alert Symbol</button><a href="#" class="delete">Delete</a></div>`); //add input box
        } else {
            alert('You have reached the limit of 10.')
        }
    });

    $(wrapper).on("click", ".delete", function(e) {
        e.preventDefault();
        $(this).parent('div').remove();
        x--;
    })
/*
    $(wrapper).on("click", `#alertButton[${x}]`, function(e) {
        e.preventDefault();
        var textInput = document.getElementById(`mytext[${x}]`);
        alert(textInput.value);
    })
*/
});

// Testing alerting the number of input elements in the field

function getCountOfElements(){
    var element = document.getElementById('inputFieldsContainer');
    var numOfChildren = element.getElementsByTagName('input').length;
    return numOfChildren
};

submitB.addEventListener("click", () => {
    //alert(getCountOfElements());
    var numOfFields = $("div.container1 input").length;
    alert(numOfFields);
});