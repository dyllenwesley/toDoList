
$(".bluebtn").click(function(event){
    let myval = $("#myInput").val();
    if (myval === '') {
        alert("To Start, Type Your New List In The Input Box!");
    } else {
        $(".listContainer").append("<div class='todolist'><div class='listHeaderAddTasks'>" + myval +
            "<input id='" + myval + "' onkeyup='addtheItem(this, this.value, event)'placeholder='Add Item Press Enter' type='text'>" +
            "<div><a class=\"redBtn\" onclick=\"removeRow(this)\">Remove list</a></div></div>" +
            "<div class='taskBox'></div>" +
            "</div>");

        $('#myInput').val("");
    }
});

function addtheItem(incid, myvalue, event){
    if(event.keyCode === 13){
        $(incid).parent().parent().find(".taskBox").append(" <div class=\"row\">" +
            "<div class=\"rowleft\">" +
            "<div class=\"iconspot fa\"></div>" +
            "<div class=\"label\">" + myvalue + "</div>" +
            "</div>" +
            "<div class=\"rowright\">" +
            "<button onclick=\"markComplete(this)\">Mark Complete</button>" +
            "<div class=\"fa fa-trash\" onclick=\"removeRow(this)\"></div>" +
            "</div></div>");
        $(incid).val("");
    }
}

$('#myInput').keyup(function(event) {
    let myval = $("#myInput").val();
    if(event.keyCode === 13){
        $(".listContainer").append("<div class='todolist'><div class='listHeaderAddTasks'>" + myval +
            "<input id='" + myval + "' onkeyup='addtheItem(this, this.value, event)'placeholder='Add Item Press Enter' type='text'>" +
            "<div><a class=\"redBtn\" onclick=\"removeItem(this)\">Remove list</a></div></div>" +
            "<div class='taskBox'></div>" +
            "</div>");

        $('#myInput').val("");

    }
});

function markComplete(myelement){
    let mydad = $(myelement).parent().parent();
    $(mydad).toggleClass("complete");

    $(mydad).find(".iconspot").toggleClass("fa-check");
}

function removeRow(theeElement) {
    let grandpa = $(theeElement).parent().parent();
    $(grandpa).slideUp('1000', function () {
        $(grandpa).remove();
    })
}

function removeItem(theeElement) {
    let grandpa = $(theeElement).parent().parent().parent(this);
    $(grandpa).slideUp('1000', function () {
        $(grandpa).remove();
    })
}


