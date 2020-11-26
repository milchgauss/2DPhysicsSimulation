// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Composite= Matter.Composite,
    Composites= Matter.Composites,
    Constraint= Matter.Constraint,
    Body = Matter.Body,
    Runner = Matter.Runner,
    Mouse=Matter.Mouse,
    MouseConstraint = Matter.MouseConstraint;

var myCanvas=document.getElementById('world');

// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
    canvas:myCanvas,
    element: document.body,
    engine: engine,
       options: {
            width: 800,
            height: 600,
            showAngleIndicator: true,
            showCollisions: true,
            showVelocity: true
        }
});

    Render.run(render);

    var runner = Runner.create();
    Runner.run(runner, engine);
// create two boxes and a ground


var boxA = Bodies.rectangle(400, 200, 80, 80);
var boxB = Bodies.rectangle(450, 50, 80, 80);
boxA.restitution=1;
boxA.mass=50;
boxA.friction=0;

boxB.restitution=1;
boxB.mass=50;
boxB.friction=0;


console.log(boxA);

var circB = Bodies.circle(100, 100, 30, { isStatic: true });
var circC = Bodies.circle(500, 100, 30);
 
 
 
var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

var sidewallright= Bodies.rectangle(800, 610, 60, 1000, { isStatic: true });
var sidewallleft= Bodies.rectangle(0, 610, 60, 1000, { isStatic: true });
 
    var group = Body.nextGroup(true);

    var ropeB = Composites.stack(200, 400, 10, 1, 10, 10, function(x, y) {
        return Bodies.circle(x, y, 20, { collisionFilter: { group: group } });
    });
    Composites.chain(ropeB, 0.5, 0, -0.5, 0, { stiffness: 0.8, length: 10, render: { type: 'line' } });

    Composite.add(ropeB, Constraint.create({ 
        bodyB: ropeB.bodies[0],
        pointB: { x: -20, y: 0 },
        pointA: { x: ropeB.bodies[0].position.x, y: ropeB.bodies[0].position.y },
        stiffness: 0.5
        
    }));

//Console.log the properties and set the last element of bodies to static for a bridge.
 




//Static rope
group = Body.nextGroup(true);
    var ropeC = Composites.stack(400, 100, 10, 1, 10, 10, function(x, y) {
        return Bodies.circle(x, y, 20, { collisionFilter: { group: group } });
    });
    Composites.chain(ropeC, 0.5, 0, -0.5, 0, { stiffness: 0.8, length: 2, render: { type: 'line' } });

    Composite.add(ropeC, Constraint.create({ 
        bodyB: ropeC.bodies[0],
        pointB: { x: 0, y: 0 },
        pointA: { x: ropeC.bodies[0].position.x, y: ropeC.bodies[0].position.y },
        stiffness: 0.5
    }));

ropeB.bodies[9].isStatic=true;
//ropeB.bodies[9].isStatic=true;
 
console.log(ropeB);

 var mouse=Mouse.create(myCanvas),
  mouseConstraint = MouseConstraint.create(engine, {
            mouse : mouse,
            constraint: {
                stiffness: 0.6,
                render: {
                    visible: true
                }
            }
        });
   

console.log(mouseConstraint);

World.add(engine.world, [boxA,boxB, ground,circB,circC,ropeB,ropeC,mouseConstraint,sidewallright,sidewallleft]);

    // keep the mouse in sync with rendering
// run the engine

Engine.run(engine);
// run the renderer


 
  Render.lookAt(render, {
        min: { x: 0, y: 0 },
        max: { x: 800, y: 600 }
    });
