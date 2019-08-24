var ContadorTextoH1 = 0
var ContadorTextoH2 = 0

var TextoH1 = 'Wake up, Neo...'
var TextoH2 = 'The matrix has this website.'

var Velocidade = 120

var TimeOut

function WaitToStart()
{
    TimeOut = setTimeout(TypeWriterH1, 1000)
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
    var container = document.getElementById('cabecalho')

    var Pixels = 1080 //Deve ter a mesma quantidade que o 'height' de '#cabecalho' 

    var Intervalo = setInterval(ChangeSize, 0)

    function ChangeSize()
    {
        if (container.offsetHeight == 160)
        {
            clearInterval(Intervalo)

            document.body.style.overflowY = "scroll"
        } else {
            Pixels--

            container.style.height = Pixels + "px"
        }
    }
}