class Ground{
    constructor(x, y, width, height){
        var option={
            restitution:1,
            friction:100,
            isStatic:true
        }
        this.body=Bodies.rectangle(x, y, width, height, option);
        this.width=width;
        this.height=height;
        World.add(world, this.body);
    }
    display(){
        push();
        /*translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);*/
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
        fill("white");
        pop();
    }
}