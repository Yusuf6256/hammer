class Hammer {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':2.3,
          'density':2.0
      }
      this.body = Bodies.rectangle(x, y, 50, 100, options);
      this.width = 50;
      this.height = 300;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x =mouseX;
      pos.y =mouseY;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill('yellow');
      rect(0, 0, this.width, this.height);
      pop();
    }
  }