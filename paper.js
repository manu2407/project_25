class Paper
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
            
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
		this.image=loadImage("paper.png");
		World.add(world, this.body);
	
	}
	display()
	{
			
			var paperPos=this.body.position;		

			push()
			translate(paperPos.x, paperPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			imageMode(CENTER);
        image(this.image, 0, 0, 100, 100);
	
		
		
			pop()
			
	}}