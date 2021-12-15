function start() {
    var x = document.createElement("div")
    document.getElementById("main").appendChild(x)
    x.id = 'imageDiv'
    var x = document.createElement("img")
    document.getElementById("imageDiv").appendChild(x)
    x.id = 'image'
    x.src = 'img/frontgoblin.png'
    var x = document.createElement("div")
    document.getElementById("main").appendChild(x)
    x.id = 'gameTitleDiv'
    var x = document.createElement("h1")
    document.getElementById("gameTitleDiv").appendChild(x)
    x.id = 'gameTitle'
    x.innerText = 'The adventure game 3.0'
    var x = document.createElement("div")
    document.getElementById("main").appendChild(x)
    x.id = 'textDiv'
    var x = document.createElement("div")
    document.getElementById("main").appendChild(x)
    x.id = 'buttonDiv'
}