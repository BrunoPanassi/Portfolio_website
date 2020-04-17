var cena = 0
var RedPillClick = false
var BluePillClick = false

var divButtons = document.createElement("div")
divButtons.setAttribute("id", "div-buttons")
divButtons.className = "row"

var buttonRedPill = document.createElement("button")
buttonRedPill.setAttribute("id", "red-pill")
buttonRedPill.innerHTML = "Red Pill"
buttonRedPill.setAttribute("onclick", "RedPill()")

var buttonBluePill = document.createElement("button")
buttonBluePill.setAttribute("id", "blue-pill")
buttonBluePill.innerHTML = "Blue Pill"
buttonBluePill.setAttribute("onclick", "BluePill()")

function StartVideo()
{
    document.getElementById('Video').addEventListener('ended', EndVideo)
}

function EndVideo()
{
    cena ++

    document.getElementById('Video').controls = false
    document.getElementById('Track_Video').src = ''
    document.getElementById('Track_Video_EN').src = ''

    if (cena == 1)
    {
        document.getElementById('Video').src = 'Video/2_Scene.mp4'
        document.getElementById('Video').playbackRate = 0.5
        document.getElementById('Video').muted = true

        document.body.appendChild(divButtons)
        divButtons.appendChild(buttonRedPill)
        divButtons.appendChild(buttonBluePill)

        setTimeout(function(){document.getElementById("red-pill").classList.add("show")}, 500)
        setTimeout(function(){document.getElementById("blue-pill").classList.add("show")}, 500)
    }

    if (RedPillClick)
    {
        window.location.replace('main.html')
    }

    if (BluePillClick)
    {
        window.location.replace('https://www.google.com/')
    }
}

function RedPill()
{
    document.getElementById('Track_Video').src = ''
    document.getElementById('Track_Video_EN').src = ''
    document.getElementById('Video').src = 'Video/Red_Pill_Scene.mp4'
    document.getElementById('Video').muted = false
    document.body.removeChild(divButtons)
    
    RedPillClick = true
}

function BluePill()
{
    document.getElementById('Track_Video').src = ''
    document.getElementById('Track_Video_EN').src = ''
    document.getElementById('Video').src = 'Video/Blue_Pill_Scene.mp4'
    document.getElementById('Video').muted = false
    document.body.removeChild(divButtons)

    BluePillClick = true
}




