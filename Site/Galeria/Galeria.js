const esquerda = document.getElementById("setaEsquerda");
const direita = document.getElementById("setaDireita");
const imagens = document.getElementById("imagens");
const contador = document.getElementById("contador");
const titulo = document.getElementById("titulo");
const info = document.getElementById("info");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
var active = img1;
var unactive = img2;
var counter = 1;

esquerda.addEventListener("click", setaEsquerda);
direita.addEventListener("click", setaDireita);
atualizar();

function setaEsquerda()
{
	counter--;
	if (counter == 0)
	{
		counter = 9;
	}
	unactive.src = "Recursos/" + counter + ".jpg";
	
	
	esquerda.style.animationName = "none";
	esquerda.offsetHeight;
	esquerda.style.animation = null;
	esquerda.style.animationName = "bounce";
	esquerda.style.animationDuration = "0.5s";
	
	active.style.animationName = "desaparecerDireita";
	active.style.animationDuration = "2s";
	unactive.style.animationName = "aparecerEsquerda";
	unactive.style.animationDuration = "2s";
	
	
	trocar();
	atualizar();
}

function setaDireita()
{
	counter++;
	if (counter == 10)
	{
		counter = 1;
	}
	unactive.src = "Recursos/" + counter + ".jpg";
	
	direita.style.animationName = "none";
	direita.offsetHeight;
	direita.style.animation = null;
	direita.style.animationName = "bounce";
	direita.style.animationDuration = "0.5s";
	
	active.style.animationName = "desaparecerEsquerda";
	active.style.animationDuration = "2s";
	unactive.style.animationName = "aparecerDireita";
	unactive.style.animationDuration = "2s";
	
	
	trocar();
	atualizar();
}

function trocar()
{
	if (active == img1)
	{
		active = img2;
		unactive = img1;
	}
	else
	{
		active = img1;
		unactive = img2;
	}
}
	
function atualizar()
{
	contador.innerHTML = counter + "/9";
	
	
	switch(counter)
	{
		case 1:
		titulo.innerHTML = "Mico-leão-dourado";
		info.innerHTML = "A poluição do ar e do solo impacta indiretamente o mico leão dourado, reduzindo a disponibilidade de alimentos e habitats adequados. A exposição a pesticidas e produtos químicos prejudica sua saúde e capacidade de reprodução.";
		break;
		case 2:
		titulo.innerHTML = "Cervo-do-pantanal";
		info.innerHTML = "A qualidade da água é vital para o cervo do pantanal, e a poluição hídrica prejudica diretamente seus habitats aquáticos. Substâncias químicas e resíduos industriais contaminam os rios e lagoas onde esses cervos se abastecem, impactando sua saúde e bem-estar.";
		break;
		case 3:
		titulo.innerHTML = "Arara-azul-grande";
		info.innerHTML = "A poluição atmosférica afeta diretamente as araras azuis, comprometendo sua respiração e saúde. Além disso, a destruição do ambiente natural devido à poluição e ao desmatamento reduz as áreas disponíveis para sua reprodução e sobrevivência.";
		break;
		case 4:
		titulo.innerHTML = "Gato-maracajá";
		info.innerHTML = "Os gatos maracujás são afetados pela poluição atmosférica e hídrica, comprometendo a qualidade de seus ambientes naturais. A exposição a pesticidas e outros compostos químicos pode prejudicar sua saúde e capacidade de caçar alimentos.";
		break;
		case 5:
		titulo.innerHTML = "Carangueijo";
		info.innerHTML = "A poluição da água é especialmente prejudicial para os caranguejos, pois eles habitam ambientes aquáticos. Contaminação por produtos químicos e resíduos industriais nos manguezais e estuários onde vivem compromete sua sobrevivência e reprodução.";
		break;
		case 6:
		titulo.innerHTML = "Lobo-guará";
		info.innerHTML = "A poluição da água e do solo afeta indiretamente o lobo guará, comprometendo a disponibilidade de alimentos e habitats. A destruição ambiental devido à poluição e ao desmatamento reduz suas áreas de sobrevivência e reprodução.";
		break;
		case 7:
		titulo.innerHTML = "Tamanduá-bandeira";
		info.innerHTML = "A poluição do ar e do solo compromete indiretamente o tamanduá bandeira, reduzindo a disponibilidade de alimentos e habitats. A exposição a pesticidas e produtos químicos afeta sua saúde e capacidade de reprodução.";
		break;
		case 8:
		titulo.innerHTML = "Tartaruga-de-couro";
		info.innerHTML = "A poluição dos oceanos representa uma ameaça grave para as tartarugas de couro, que podem ingerir plásticos por engano, causando obstrução intestinal e morte. Além disso, a contaminação química compromete sua saúde e reprodução.";
		break;
		case 9:
		titulo.innerHTML = "Tucano-de-papo-branco";
		info.innerHTML = "A qualidade do ar é crucial para a saúde dos tucanos, que podem ser afetados pela poluição atmosférica. Além disso, a destruição do habitat devido à poluição e ao desmatamento diminui as áreas de reprodução e sobrevivência dessas aves.";
		break;
		
		
	}
}