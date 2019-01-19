function lsSet(vname, data) {
    localStorage.setItem(vname, data);
}

function lsSetJ(vname, data) {
    localStorage.setItem(vname, JSON.stringify(data));
}

function lsGet(vname) {
    return localStorage.getItem(vname);
}

function lsGetJ(vname) {
    return JSON.parse(localStorage.getItem(vname));
}

function lsExGJInit(vname, data) {
    return lsGet(vname) ? lsGetJ(vname) : data;
}

function $(id) {
    return document.getElementById(id);
}

var activityArr = [];
var eId = 0;

/// Input data save in variable

function inputData(){
    eId += 1;
    let inputActivity = $("iputActivity").value;
    let expireDate = "25/05/19";
    $("iputActivity").value = "";
    let  data = {
                    id : eId,
                    activity : inputActivity,
                    expData : expireDate
    
                };
   // console.log(data);
    activityArr.push(data);
    // DOMRender(data);           
    
}

// dom remder function

function DOMRender(data){
    $('actContainer').innerHTML += '<li id="'+data.id+'">' +
        '<span id="#" >' + data.activity + '</span>' +
        '<i id="'+data.id+'"onclick="doneActivity(this.id); removeElement(this.id);" class="fa fa-check-circle" style="padding-left:15px; color:aqua; float: right; height: 50px;"></i>' +
        '<i id="'+data.id+'"  onclick="removeElement(this.id);" class="fa fa-trash" aria-hidden="true" style="border-right: 2px solid violet; padding: 5px 15px; border-color: lightgrey; float: right"></i>' +
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