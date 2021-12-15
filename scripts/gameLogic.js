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
    var x = document.createElement("p")
    document.getElementById("textDiv").appendChild(x)
    x.id = 'text'
    x.innerText = 'Exercitation Lorem laborum ad et elit et adipisicing proident Lorem cupidatat aliquip. Incididunt duis ea elit laboris dolore laboris nostrud ipsum proident officia occaecat nisi velit. Aute proident nostrud mollit culpa aliquip. Laborum do exercitation sunt amet ad aliqua magna fugiat aliqua dolore veniam id consectetur. Id exercitation ut dolore adipisicing. Eiusmod aliquip adipisicing pariatur Lorem veniam aliquip. Elit voluptate ex voluptate veniam sunt occaecat excepteur mollit.'
    var x = document.createElement("div")
    document.getElementById("main").appendChild(x)
    x.id = 'buttonDiv'

    loadLevel(0)
}