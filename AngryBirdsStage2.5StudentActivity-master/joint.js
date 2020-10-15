class Joint{
constructor(bodyA,bodyB){

var options ={

    bodyA: bodyA,
    bodyB: bodyB,
    stiffness: 0.9,
    length: 10

}
this.joint = Matter.Constraint.create(options)
World.add(world, this.joint);
}
display(){
    strokeWeight(4);
    line(this.joint.bodyA.position.x,this.joint.bodyA.position.y, this.joint.bodyB.position.x,this.joint.bodyB.position.y);
}
}