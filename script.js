
function one()
{
    var par = document.getElementsByTagName("p");
    var test = par[0].style.fontStyle = "italic";
}


function backgroundColorChange()
{
    var text = document.getElementById("t").style.backgroundColor = "grey";
}

function reverseColor()
{
    var text = document.getElementById("t").style.backgroundColor = "";
}

function font1() {
    document.body.style.fontFamily = 'sans-serif';
}

function font2() {
    document.body.style.fontFamily = 'Georgia, serif';
}

function font3() {
    document.body.style.fontFamily = 'Times New Roman, Times, serif';
}

function lightTheme()
{
    document.body.style.backgroundColor = 'white';
    let paragraphs = document.getElementsByTagName('p');
    let headers = document.getElementsByTagName('h3');
    let lists = document.getElementsByTagName('li');

    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.color = 'black';
    }
    for (let i = 0; i < headers.length; i++) {
        headers[i].style.color = 'black';
    }
    for (let i = 0; i < lists.length; i++) {
        lists[i].style.color = 'black';
    }
}

function darkTheme()
{
    document.body.style.backgroundColor = 'black';
    let paragraphs = document.getElementsByTagName('p');
    let headers = document.getElementsByTagName('h3');
    let lists = document.getElementsByTagName('li');
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.color = 'white';
    }
    for (let i = 0; i < headers.length; i++) {
        headers[i].style.color = 'white';
    }
    for (let i = 0; i < lists.length; i++) {
        lists[i].style.color = 'white';
    }
}

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       document.getElementById("demo").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();
  }