
var i;
var menino,pista;
var imgMenino, imgPista;
var limite1, limite2;

function preload(){
  imgMenino = loadAnimation("Jake1.png","Jake2.png");
  imgPista = loadImage("path.png");
  //loadImage (carregarImagem) da pista)
  //loadAnimation (carregarAnimação) de corrida para o menino

}

function setup(){
  createCanvas(400,400);
  pista = createSprite(250,400,125,400);
  pista.addImage(imgPista);
  limite1 = createSprite(250,400,10,400);
  limite2 = createSprite(250,400,10,400);
  menino = createSprite(200,200,50,50);
  menino.addAnimation("menino", imgMenino);
 //crie um sprite para a pista 
//adicione uma imagem para a pista
//Faça com que a pista seja um fundo que se move dando a ela velocity Y.
  

//crie um sprite de menino
//adicione uma animação de corrida para ele

  
//crie um limite à esquerda
//defina visibilidade como falsa para o limite à esquerda

//crie um limite à direita
//defina visibilidade como falsa para o limite à direita
}

function draw() {
  background(0);
  pista.velocityY = 4;
  menino.x = World.mouseX
  // mover o menino com o mouse usando mouseX
limite1 = createEdgeSprites();
limite2 = createEdgeSprites();
menino.collide(limite1);
menino.collide(limite2);
menino.scale=1;
pista.scale=1.2;

  // colidir o menino com os limites invisíveis da esquerda e da direita
  
  //código para redefinir o fundo
  if(pista.y > 350 ){
    pista.y = height/2;
  }
  
  drawSprites();
}
