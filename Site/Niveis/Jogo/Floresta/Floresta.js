
const widthReal 	= 1920;
const heightReal	= 1080;
const tela 			= document.getElementById("Jogo");
const animal01 		= document.getElementById("Animal01");
const animal02 		= document.getElementById("Animal02");
const animal03 		= document.getElementById("Animal03");
const lixo			= document.getElementsByClassName("Lixo");
const escuro		= document.getElementById("escuro");
const popup			= document.getElementById("popup");
const fechar		= document.getElementById("fechar");

var	lixoQnt = 9;

resizeDiv();
window.addEventListener("resize", resizeDiv);
fechar.addEventListener("click", matarDiv);
for (i = 0; i < lixo.length; i++)
{
	lixo[i].addEventListener("click", removerLixo);
}


//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

function removerLixo()
{
	let e = event || window.event;
	let thisLixo = e.target;
	let styling = window.getComputedStyle(thisLixo);
	
	if (styling.animationName != "Coletar")
	{
/* 		animation: example;
		animation-duration: 1s;
		animation-timing-function: linear;
		animation-fill-mode: forwards; */
		
		thisLixo.style.animationName = "Coletar";
		thisLixo.style.animationDuration = "1s";
		thisLixo.style.animationFillMode = "forwards";
		
		lixoQnt--;
		
		if (lixoQnt == 6)
		{
			animal01.src = "../Recursos/Animais/Mico-Leao-Dourado-Feliz.gif";
			animal01.style.animationName = "Alegrar";
			animal01.style.animationDuration = "1s";
			animal01.style.animationTimingFunction = "ease";
			animal01.style.animationIterationCount = "1";
		}
		if (lixoQnt == 3)
		{
			animal02.src = "../Recursos/Animais/Arara-feliz-final.gif";
			animal02.style.animationName = "Alegrar";
			animal02.style.animationDuration = "1s";
			animal02.style.animationTimingFunction = "ease";
			animal02.style.animationIterationCount = "1";
		}
		if (lixoQnt == 0)
		{
			animal03.src = "../Recursos/Animais/Tucano-Feliz.gif";
			animal03.style.animationName = "Alegrar";
			animal03.style.animationDuration = "1s";
			animal03.style.animationTimingFunction = "ease";
			animal03.style.animationIterationCount = "1";
			escuro.style.animationName = "Escurecer";
			escuro.style.animationDuration = "1s";
			escuro.style.animationTimingFunction = "linear";
			escuro.style.animationFillMode = "both";
			popup.style.animationName = "Aparecer";
			popup.style.animationDuration = "1s";
			popup.style.animationTimingFunction = "ease-in";
			popup.style.animationFillMode = "both";
			popup.style.visibility = "visible";
		}
	}
}

function matarDiv()
{
	escuro.style.animationName = "Clarear";
	popup.style.animationName = "Desaparecer";
}

function resizeDiv()
{
	let newWidth	= (window.innerWidth / 16) - 3;
	let newHeight	= (window.innerHeight / 9) - 3;
	let setWidth	= "";
	let setHeight	= "";
	
	if (newWidth < newHeight)
	{
		resizeRatio = newWidth;
	}
	else
	{
		resizeRatio = newHeight;
	}
	resizeRatio = Math.floor(resizeRatio);
	
	newWidth	= resizeRatio * 16;
	newHeight	= resizeRatio * 9;
	setWidth	= newWidth.toString() + "px";
	setHeight	= newHeight.toString() + "px";
	
	tela.style.width	= setWidth;
	tela.style.height	= setHeight;
}