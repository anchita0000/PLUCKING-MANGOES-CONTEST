class Ground{
   constructor(){
       var options={
           isStatic:true,
           friction:0.4
       }
     this.body=Bodies.rectangle(0,700,800,20,options);
     World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        fill(102,51,0);
        rect(0,700,800,20);
    }
}