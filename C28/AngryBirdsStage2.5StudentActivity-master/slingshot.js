class slingshot {
constructor (bodyA,pointB){
 var options={
    bodyA: bodyA,
    pointB: pointB,
    length:10,
    stiffness:0.5
 }
this.chain=Matter.Constraint.create(options);
World.add(world,this.chain)
}
display(){
    if (this.chain.bodyA != null){
        var pointA=this.chain.bodyA.position
        var pointB=this.chain.pointB
        line (pointA.x,pointA.y,pointB.x,pointB.y)
    }
}
fly (){
this.chain.bodyA = null    }

}