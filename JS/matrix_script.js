var cena = 0
var RedPillButton = false
var BluePillButton = false

function CheckScreenWidth()
{
    if (window.innerWidth < 1280)
    {
        window.location.replace('main.html')
    }
}

function StartVideo()
{  
    document.getElementById('Video').addEventListener("ended", EndVideo)
    document.getElementById('Red_Pill').disabled = true
    document.getElementById('Blue_Pill').disabled = true
}

function EndVideo()
{
    cena++

    document.getElementById('Red_Pill').disabled = false
    document.getElementById('Blue_Pill').disabled = false
    document.getElementById('Video').controls = false

    if (cena == 1)
    {
        document.getElementById('Video').src = 'Video/2_Scene.mp4'
        document.getElementById('Video').playbackRate = 0.5
        document.getElementById('Video').muted = true
    }

    if (RedPillButton)
    {
        window.location.replace('main.html')
    }

    if (BluePillButton)
    {
        window.location.replace('https://www.google.com/')
    }
}

function RedPill()
{
    document.getElementById('Video').src = 'Video/Red_Pill_Scene.mp4'
    document.getElementById('Video').muted = false
    RedPillButton = true
}

function BluePill()
{
    document.getElementById('Video').src = 'Video/Blue_Pill_Scene.mp4'
    document.getElementById('Video').muted = false
    BluePillButton = true
}



