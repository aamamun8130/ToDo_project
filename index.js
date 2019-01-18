function $(id) {
    return document.getElementById(id);
}

function addActivity() {
    $('activity').innerHTML = $("iputActivity").value;
}