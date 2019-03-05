var rock = document.getElementById('rock')
var paper = document.getElementById('paper')
var scissors = document.getElementById('scissors')
var btt = document.getElementById('btt')
var choices = ['Rock', 'Paper', 'Scissors']
var colors = ["red", "blue", "green", "purple", "orange", "yellow", "black"]

rock.addEventListener('click', function() {
    var random = Math.floor(Math.random() * choices.length)
    var choice = choices[random]
    document.getElementById('player').innerHTML = 'Player Chose: Rock'
    if (choice == 'Rock') {
        document.getElementById('outcome').innerHTML = 'Its a Tie'
        document.getElementById('computer').innerHTML = 'Computer Went With: ' + choice
    } else if (choice == 'Scissors') {
        document.getElementById('outcome').innerHTML = 'You Won!'
        document.getElementById('computer').innerHTML = 'Computer Went With: ' + choice
    } else {
        document.getElementById('outcome').innerHTML = 'You Lost!'
        document.getElementById('computer').innerHTML = 'Computer Went With: ' + choice
    }
})

paper.addEventListener('click', function() {
    var random = Math.floor(Math.random() * choices.length)
    var choice = choices[random]
    document.getElementById('player').innerHTML = 'Player Chose: Paper'
    if (choice == 'Paper') {
        document.getElementById('outcome').innerHTML = 'Its a Tie'
        document.getElementById('computer').innerHTML = 'Computer Went With: ' + choice
    } else if (choice == 'Rock') {
        document.getElementById('outcome').innerHTML = 'You Won!'
        document.getElementById('computer').innerHTML = 'Computer Went With: ' + choice
    } else {
        document.getElementById('outcome').innerHTML = 'You Lost!'
        document.getElementById('computer').innerHTML = 'Computer Went With: ' + choice
    }
})

scissors.addEventListener('click', function() {
    var random = Math.floor(Math.random() * choices.length)
    var choice = choices[random]
    document.getElementById('player').innerHTML = 'Player Chose: Scissors'
    if (choice == 'Scissors') {
        document.getElementById('outcome').innerHTML = 'Its a Tie'
        document.getElementById('computer').innerHTML = 'Computer Went With: ' + choice
    } else if (choice == 'Paper') {
        document.getElementById('outcome').innerHTML = 'You Won!'
        document.getElementById('computer').innerHTML = 'Computer Went With: ' + choice
    } else {
        document.getElementById('outcome').innerHTML = 'You Lost!'
        document.getElementById('computer').innerHTML = 'Computer Went With: ' + choice
    }
})

btt.addEventListener("click", changeColor)
    function changeColor() {
        document.body.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)]
}