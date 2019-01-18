function $(id) {
    return document.getElementById(id);
}

function addActivity() {
    $('actContainer').innerHTML += '<li>' +
    '<span id="activity">Item 1</span>' +
    '<i class="fa fa-check-circle" style="padding-left:15px; color:aqua; float: right; height: 50px;"></i>' +
    '<i class="fa fa-trash" aria-hidden="true" style="border-right: 2px solid violet; padding: 5px 15px; border-color: lightgrey; float: right"></i>' +
'</li>';
    $('activity').innerHTML = $("iputActivity").value;
}