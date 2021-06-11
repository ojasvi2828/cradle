class Roof{
    constructor(){ 
      var options = { isStatic: true }
       this.body = Bodies.rectangle(400,250,800,10,options);
       this.width=800;
       this.height=10;
       World.add(world,this.body)
      }
      display(){
          var pos =this.body.position; 
          rectMode(CENTER); 
          fill("brown");
           rect(pos.x, pos.y, this.width, this.height);
      
      }
      }