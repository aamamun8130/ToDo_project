function $(id) {
    return document.getElementById(id);
}

var id=0;

function addActivity() {
    id =id + 1;
    var inputActivity= $("iputActivity").value;
    $('actContainer').innerHTML += '<li id="'+id+'">' +
    '<span id="#" >' + inputActivity + '</span>' +
    '<i class="fa fa-check-circle" style="padding-left:15px; color:aqua; float: right; height: 50px;"></i>' +
    '<i id="'+id+'" onclick="removeElement('+this.id+');" class="fa fa-trash" aria-hidden="true" style="border-right: 2px solid violet; padding: 5px 15px; border-color: lightgrey; float: right"></i>' +
'</li>';
   
}

function removeElement(elementId) {
    // Removes an element from the document
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
    //console.log(elementId);
}