const  Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var particles;
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
var engine,world;
var gameState = end;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {

       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {

       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {

       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {

       plinkos.push(new Plinko(j,375));
    }




}



function draw() {
  background("black");
  textSize(20)

 text("Score : "+score,20,30);
 text("500",180,570);
 text("500",260,570);
 text("500",340,570);
 text("500",440,570);
 text("500",520,570);
 text("500",600,570);
 text("500",660,570);
 text("500",740,570);
// mousePressed();
  Engine.update(engine);
  ground.display();
  
   for (var i = 0; i < plinkos.length; i++) {

     plinkos[i].display();

   }
  // if(frameCount%60===0){
  //   particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
  //   score++;
  // }


   for (var k = 0; k < divisions.length; k++) {

     divisions[k].display();
   }
   function mousePressed(){
      if(gameState!=="end"){
        score++;
        particles = new Particals(mouseX,mouseY,10,10);
      }
        for (var j = 0; j < particles.length; j++) {

     particles[j].display();
   }
   
   }
   if(particles!=null){
     particles.display();
     if(particles.body.position.y>760){
       if(particles.body.position.x<300){
         score=score+500;
         particles = null;
         if(count>=5) gameState = "end";
       }
     }
   }
} 