 class Snow {
     constructor(x,y,r) {
         var options={
             restitution:0.3,
             
         }
         this.r=r
         this.image=loadImage("snow4.webp");
         this.body=Bodies.circle(x,y,this.r,options);
         World.add(world,this.body);

         
     }
     display() {
        var pos = this.body.position;
        var angle= this.body.angle;

        push();
        translate(pos.x , pos.y);
        rotate(angle);
        noStroke();
        //fill(this.color)
        imageMode(CENTER);
        ellipseMode(CENTER)
        image(this.image, 0,0,this.r*3, this.r*3)
        pop();
     
    

     }

}