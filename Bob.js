class Bob
{
  constructor(x,y,r)
  {
      var options = {'isStatic':false,'restitution': 1,'density':0.8,'friction':0};
      this.bodyX = x;
      this.bodyY = y;
      this.r = r;
     

      this.body = Bodies.circle(this.bodyX,this.bodyY,(this.r-20)/2,options);
      World.add(myWorld,this.body);
  }
  display()
  {

    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(this.body.angle);

    rectMode(CENTER);
    fill("red");
   ellipse(0,0,this.r,this.r)
    pop();
  }

};