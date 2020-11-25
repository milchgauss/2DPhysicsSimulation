var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

var engine;
var world;
 
 
var circleT;
var ground;

var boxes=[];
var circlesa=[];

function setup(){
    
    createCanvas(400,400);
    engine= Engine.create();
    world=engine.world;
    Engine.run(engine);
    
    var options={
        isStatic:true
    }
     
    var optionsTwo={
      friction:0,
      restitution:1
       
    }
    
    
    ground=Bodies.rectangle(200,height,width,50,options);
    circleT=Bodies.circle(50,50,50,optionsTwo);
 
   
    World.add(world,ground);
    World.add(world,circleT);

}
function mousePressed(){
    boxes.push(new Box(mouseX,mouseY,20,20));
    boxes.push(new Box(mouseX,mouseY,30,30));

    
}

function mouseDragged(){
    circlesa.push(new Circles(mouseX,mouseY,random(5,20)));
    
    
} 
function draw(){
    background(22);
     
   
    ellipse(circleT.position.x,circleT.position.y,100);
    
    
    for (var i=0;i<boxes.length;i++){
        boxes[i].show();
    }
     for (var i=0;i<circlesa.length;i++){
        circlesa[i].show();
    }
    
    
    
    
}