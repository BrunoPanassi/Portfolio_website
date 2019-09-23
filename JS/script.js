var TextoH1 = 'Wake up, Neo...'
var ContadorTextoH1 = 0
var TextoH2 = 'The matrix has this website.'
var ContadorTextoH2 = 0
var Velocidade = 120
var TimeOut

var EventoParm

var ComponenteText = document.createElement("H2")
ComponenteText.innerText = "More info"
ComponenteText.style.color = "#1dd1a1"
ComponenteText.style.fontFamily = 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', "Arial", "sans-serif"
ComponenteText.style.fontSize = "3em"
ComponenteText.style.textAlign = "center"
ComponenteText.style.opacity = "0"

var ComponenteImgLink = document.createElement("A")
ComponenteImgLink.href = "https://www.linkedin.com/in/bruno-henrique-bb3a19141/"
ComponenteImgLink.target = "_blank"

var ComponenteImg = document.createElement("IMG")
ComponenteImg.src = "Images/Linkedin.png"
ComponenteImg.className = "Image_Small Image_Small_Center"
ComponenteImg.style.ItsNotMorpheus_Opacity = "0"
ComponenteImgLink.appendChild(ComponenteImg)

var ContactBox  = document.getElementById('Contact_Text_Box')  

var Skills_Opacity = 0

window.onscroll = function() {Scroll()}

window.onresize = function() {OnResize()}

function Scroll()
{
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50)
    {
        var IntervaloFadeInSkills = setTimeout(FadeIn, 50)

        function FadeIn()
        {
            if (Skills_Opacity == 99)
            {
                clearTimeout(IntervaloFadeInSkills)
            }
            else
            {
                document.getElementById('Section_Skills').style.opacity = (Skills_Opacity/100).toString()
                ComponenteText.style.opacity = (Skills_Opacity/100).toString()
                
                Skills_Opacity++
                
                IntervaloFadeInSkills = setTimeout(FadeIn, 50)
            }
        }
    }
}

function WaitToStart()
{
    ContactBox  = document.getElementById('Contact_Text_Box')
    ContactBox.appendChild(ComponenteText)

    OnResize()

    TimeOut = setTimeout(TypeWriterH1, 1000)
}

function ScrollToTheTop()
{
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0 
}

function HoverEffect(EventoParm)
{
    var NivelOpacidade = 99 

    if (ContactBox.offsetWidth > 1280)
    {
        FadeOutEffect()
    }

    function FadeOutEffect()
    {
        if (NivelOpacidade == 0)
        {
            if (EventoParm == 'MouseOver')
            {
                ContactBox.removeChild(ComponenteText)
                ContactBox.appendChild(ComponenteImgLink)
            }
            else if (EventoParm == 'MouseOut')
            {
                ContactBox.removeChild(ComponenteImgLink)
                ContactBox.appendChild(ComponenteText)
            }

            FadeInEffect()
        }
        else
        {
            if (EventoParm == 'MouseOver')
            {
                ComponenteText.style.opacity = (NivelOpacidade/100).toString()
                NivelOpacidade--
            }
            else if (EventoParm == 'MouseOut')
            {   
                ComponenteImg.style.opacity = (NivelOpacidade/100).toString()
                NivelOpacidade--
            }

            FadeOutEffect()
        }
    }

    function FadeInEffect()
    {
        var IntervaloFadeIn = setTimeout(FadeIn, 0)

        function FadeIn()
        {
            if (NivelOpacidade == 99)
            {
                clearTimeout(IntervaloFadeIn)
            }
            else
            {
                if (EventoParm == 'MouseOver')
                {
                    ComponenteImg.style.opacity = (NivelOpacidade/100).toString()
                    NivelOpacidade++
                }
                else if (EventoParm == 'MouseOut')
                {
                    ComponenteText.style.opacity = (NivelOpacidade/100).toString()
                    NivelOpacidade++
                }

                IntervaloFadeIn = setTimeout(FadeIn, 0)
            }
        }
    }
}

function TypeWriterH1()
{
    ScrollToTheTop()

    if (ContadorTextoH1 < TextoH1.length)
    {
        Velocidade = 120

        document.getElementById('titulo_cabecalho').innerHTML += TextoH1.charAt(ContadorTextoH1)

        if (TextoH1.charAt(ContadorTextoH1) == ' ') //Para o efeito de demora na digitação é colocado uma velocidade maior
        {
            Velocidade = 380
        }
        ContadorTextoH1++

        TimeOut = setTimeout(TypeWriterH1, Velocidade)
    }

    if (ContadorTextoH1 == TextoH1.length)
    {
        TImeOut =  setTimeout(TypeWriterH2, 1000)
    }
}

function TypeWriterH2()
{
    Velocidade = 120

    if (ContadorTextoH2 < TextoH2.length)
    {
        document.getElementById('titulo_2_cabecalho').innerHTML += TextoH2.charAt(ContadorTextoH2)

        if (TextoH2.charAt(ContadorTextoH2) == ' ')
        {
            Velocidade = 700
        }
        ContadorTextoH2++

        if (ContadorTextoH2 == TextoH2.length)
        {
            clearTimeout(TimeOut)
            ChangeSizeContainer()
        } else 
        {
            TimeOut = setTimeout(TypeWriterH2, Velocidade)
        }
    }
}

function ChangeSizeContainer()
{
    var container = document.getElementsByClassName("cabecalho")[0]

    var Cabecalho = document.getElementById("cabecalho")

    container.classList.add("ChangeSize")

    document.body.style.overflowY = "scroll"

    var Intervalo = setTimeout(WaitTilResize, 50)

    function WaitTilResize ()
    {
        if (Cabecalho.offsetHeight == 160)
        {
            clearTimeout(Intervalo)

            var ItsNotMorpheus_Opacity = 0
            var IntervaloFadeInMorpheus = setTimeout(FadeIn, 0)

            function FadeIn()
            {
                if (ItsNotMorpheus_Opacity == 99)
                {
                    clearTimeout(IntervaloFadeInMorpheus)
                }
                else
                {
                    document.getElementById('Section_ItsNotMorpheus').style.opacity = (ItsNotMorpheus_Opacity/100).toString()
                    ItsNotMorpheus_Opacity++
                    
                    IntervaloFadeInMorpheus = setTimeout(FadeIn, 0)
                }
            }
        }
        else
        {
            Intervalo = setTimeout(WaitTilResize, 50)
        }
    }
}

function OnResize()
{
    var Footer = document.getElementsByTagName("footer")[0]

    if(ContactBox.offsetWidth < 1280)
    {
        ComponenteText.style.fontSize = "2em"
        ComponenteImg.style.width = "48px"
        ComponenteImg.style.height = "50px"
        ComponenteImg.style.marginLeft = "calc((100% - 48px)/2)"

        Footer.style.paddingTop = "26.8px"
        ContactBox.appendChild(ComponenteImgLink)
    }
    else
    {
        ComponenteText.style.fontSize = "3em"
        ComponenteImg.style.width = "68px"
        ComponenteImg.style.height = "70px"
        ComponenteImg.style.marginLeft = "calc((100% - 68px)/2)"
        
        Footer.style.paddingTop = "42.2px"

        if(ContactBox.contains(ComponenteImgLink))
        {
            ContactBox.removeChild(ComponenteImgLink)
        }

    }
}