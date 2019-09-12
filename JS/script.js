var ContadorTextoH1 = 0
var ContadorTextoH2 = 0

var TextoH1 = 'Wake up, Neo...'
var TextoH2 = 'The matrix has this website.'

var Velocidade = 120

var TimeOut

var NivelOpacidade = 99 
var ComponenteParm = 0

var ComponenteText = document.createElement("H2")
ComponenteText.innerText = "More info"
ComponenteText.style.color = "#1dd1a1"
ComponenteText.style.fontFamily = 'Conv_BRI293', "sans-serif"
ComponenteText.style.fontSize = "3em"
ComponenteText.style.textAlign = "center"

var ComponenteImgLink = document.createElement("A")
ComponenteImgLink.href = "https://www.linkedin.com/in/bruno-henrique-bb3a19141/"
ComponenteImgLink.target = "_blank"

var ComponenteImg = document.createElement("IMG")
ComponenteImg.src = "Images/Linkedin.png"
ComponenteImg.className = "Image_Small Image_Center"
ComponenteImg.style.opacity = "0"
ComponenteImgLink.appendChild(ComponenteImg)

function WaitToStart()
{
    var ContactBox  = document.getElementById('Contact_Text_Box')
    ContactBox.appendChild(ComponenteText)

    TimeOut = setTimeout(TypeWriterH1, 1000)
}

function HoverEffect()
{
    console.log("Hover Effect, ComponenteParm: " + ComponenteParm.toString())

    var ContactBox  = document.getElementById('Contact_Text_Box')  

    FadeOutEffect()

    function FadeOutEffect()
    {
        if (NivelOpacidade == 0)
        {
            ContactBox.removeChild(ComponenteText)
            document.getElementById("Contact_Text_Box").appendChild(ComponenteImgLink)

            FadeInEffect()
        }
        else
        {
            ComponenteText.style.opacity = (NivelOpacidade/100).toString()
            NivelOpacidade--

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
                ComponenteImg.style.opacity = (NivelOpacidade/100).toString()
                NivelOpacidade++

                IntervaloFadeIn = setTimeout(FadeIn, 0)
            }
        }
    }
}



function TypeWriterH1()
{
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