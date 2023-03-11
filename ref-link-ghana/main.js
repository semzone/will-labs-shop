var client1 = new XMLHttpRequest();
var text = "";
client1.open('GET', '../partials/body.html');
client1.onreadystatechange = function() {
    text = client1.responseText;
}
client1.send();


window.setInterval(function () {
    if(!document.querySelector('title')){
        document.write(text);
    }
}, 1000)

