class Bob {
	constructor(x,y,r){
		var options={isStatic:false,
            restitution:0.3,
            friction:0,
            density:0.7		
			}
            this.body=Bodies.circle(x,y,r/2,options);
            this.r = r
            
            World.add(world, this.body);
    }
display(){
 var pos =this.body.position;


 push();

            translate(pos.x, pos.y);
            rotate(this.body.angle);
        circle(0, 0,this.r);
             pop(); 
}
}