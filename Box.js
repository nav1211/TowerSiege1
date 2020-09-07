class Box{

    constructor(x,y) {

      var options = {
        restitution:0.8,
        friction:1.0,
        density:1.0
          
      }
      this.body = Bodies.rectangle(x,y,60,60,options);
      this.width = 60;
      this.height = 60;
      World.add(world, this.body);

    }
    display(){

      var pos =this.body.position;
      push();
      rectMode(CENTER);
      fill("blue");
      rect(pos.x, pos.y, this.width, this.height);
      pop();

    }

  }