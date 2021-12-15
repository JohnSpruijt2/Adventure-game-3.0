function clearButtons() {
    document.getElementById('buttonDiv').innerHTML = '';
}
function loadLevel(id) {
    clearButtons();

    document.getElementById('gameTitle').innerText = levels[id]['title'];
    document.getElementById('text').innerText = levels[id]['text'];
    document.getElementById('image').src = 'img/'+levels[id]['img'];
    levels[id]['buttons'].forEach(element => {
        var x = document.createElement("button")
        document.getElementById("buttonDiv").appendChild(x)
        x.className = 'button'
        x.innerText = element['text']
        x.setAttribute('onclick', element['function'])
    });
}