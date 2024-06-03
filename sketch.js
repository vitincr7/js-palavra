let palavra; 

function setup() {
   createCanvas(400,  400); 
  
  palavra= palavraAleatoria(); 
}

function palavraAleatoria() {
  let palavras = ["cr7" , "messi", "neymar"]
   return random(palavras);
}

function inicializaCores() {
  background("orange");
  fill("black");
  textSize(64);
  textAlign(CENTER, CENTER);
}

function palavraParcial(minimo, maximo)  {
   let quantidade = map(mouseX,minimo, maximo,1,palavra.length);
  
  let efeito = palavra.substring(0, quantidade);
  
   return efeito;
}

function draw() {
  inicializaCores(); 
  
  let texto = palavraParcial(0,width);
  text(texto, 200, 200);
}
