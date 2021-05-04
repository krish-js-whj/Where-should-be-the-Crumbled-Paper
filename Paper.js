class Paper{
    constructor(x,y,r)
	{
		var options={
			isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.5
			}
            this.body=Bodies.circle(x, y, r-70 , options);
		this.x=x;
		this.y=y;
		this.r=r;
		
 		World.add(world, this.body);
        this.image=loadImage("paper.png")
	}
	display()
	{
			push()
            translate(this.body.position.x, this.body.position.y);
			
			//strokeWeight(4);
			pop()
			
			imageMode(CENTER);
            image(this.image,this.body.position.x,this.body.position.y,this.r,this.r)
            
	}
}