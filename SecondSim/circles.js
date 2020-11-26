function Circles(x,y,sides){
    
     var options={
      friction:0.4,
      restitution:0.4,
      mass:100
    }

    this.body=Bodies.circle(x,y,sides,options);
    
    this.x=x;
    this.y=y;
    this.sides=sides;
    
     World.add(world,this.body);
     this.show=function(){
        //Draws the individual boxes
        var pos=this.body.position;
        var angle=this.body.angle;
         

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        
        ellipseMode(CENTER);
        fill("rgba(255,192,203,0.7)");
        ellipse(0,0,sides*2);
        pop();
        
    }
    
    
    
}