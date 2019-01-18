function $(id) {
    return document.getElementById(id);
}

var eId = 0;
function addActivity() {
    eId += 1;
    var inputActivity = $("iputActivity").value;
    $('actContainer').innerHTML += '<li id="'+eId+'">' +
        '<span id="#" >' + inputActivity + '</span>' +
        '<i id="'+eId+'"onclick="doneActivity(this.id); removeElement(this.id);" class="fa fa-check-circle" style="padding-left:15px; color:aqua; float: right; height: 50px;"></i>' +
        '<i id="'+eId+'"  onclick="removeElement(this.id);" class="fa fa-trash" aria-hidden="true" style="border-right: 2px solid violet; padding: 5px 15px; border-color: lightgrey; float: right"></i>' +
        '</li>';

}

function removeElement(elementId) {
    // Removes an element from the document
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
    //console.log(elementId);
}

function doneActivity(eId) {
    var element = document.getElementById(eId);
    var activity=element.childNodes[0].innerHTML;
    $('doneActContainer').innerHTML += '<li id="'+eId+'">' +
        '<span id="#" >' + activity + '</span>' +
        '<i id="'+eId+'"onclick="doneActivity(this.id);" class="fa fa-check-circle" style="padding-left:15px; color:aqua; float: right; height: 50px;"></i>' +
        '<i id="'+eId+'"  onclick="removeElement(this.id);" class="fa fa-trash" aria-hidden="true" style="border-right: 2px solid violet; padding: 5px 15px; border-color: lightgrey; float: right"></i>' +
        '</li>';

    //console.log(id, name);
    //$('doneActContainer').appendChild(nodeg);
    //$('doneActContainer').innerHTML=n;
}