var ContadorTextoH1 = 0
var ContadorTextoH2 = 0

var TextoH1 = 'Wake up, Neo...'
var TextoH2 = 'The matrix has this website.'

var Velocidade = 120

var TimeOut

var NivelOpacidade = 99 
var EventoParm

var ComponenteText = document.createElement("H2")
ComponenteText.innerText = "More info"
ComponenteText.style.color = "#1dd1a1"
ComponenteText.style.fontFamily = 'Conv_BRI293', "sans-serif"
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

var ItsNotMorpheus_Opacity = 0
var Skills_Opacity = 0

window.onscroll = function() {Scroll()}

function Scroll()
{
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30)
    {   
        var IntervaloFadeInMorpheus = setTimeout(FadeIn, 50)

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
                
                IntervaloFadeInMorpheus = setTimeout(FadeIn, 50)
            }
        }
    }

    if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450)
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

    TimeOut = setTimeout(TypeWriterH1, 1000)
}

function ScrollToTheTop()
{
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0 
}

function HoverEffect(EventoParm)
{
    FadeOutEffect()

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

    container.classList.add("ChangeSize")

    document.body.style.overflowY = "scroll"
}