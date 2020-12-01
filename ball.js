class Ball{
    constructor(x, y){
    var option={
         restituion:0.3,
         isStatic:false,
         friction:0.5,
         density:1.2
    }
    this.body=Bodies.circle(x, y, 70);
    this.width=width;
    World.add(world, this.body);
    }
    display(){
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(this.body.angle);
    ellipseMode(RADIUS);
    fill("purple");
    pop();
    }    
}