var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Constraint=Matter.Constraint,
    Composites=Matter.Composites;
    Composite = Matter.Composite

var engine;
var world;
 
 
var parts=[];
var p1;
var p2;

function setup(){
    
    createCanvas(400,400);
    engine= Engine.create();
    world=engine.world;
    Engine.run(engine);
    var options={
        isStatic:true
    }
   
    
    
    for (var x=20;x<380;x+=20){}
     p1=new Particles(200,100,10);
      p2=new Particles(200,100,10);
   
    
    
    
        parts.push(p1);
        parts.push(p2);
        
    
        var optionsTwo={
            
        bodyA:p1.body,
        bodyB:p2.body,
            
        length: 30,
        stiffness:0
        }
        
       

    var constraint=Constraint.create(optionsTwo);  
    
 
 

 
    ground=Bodies.rectangle(200,height,width,50,options);
    
    
    World.add(world,ground);
    World.add(world,p1);
    World.add(world,constraint);
 

}
 

function mouseDragged(){
 
    
    
} 
function draw(){
    background(50);
    Engine.update(engine);
    
    for (var i=0;i<parts.length;i++){
        parts[i].show();
    }
    
     
    
    
}