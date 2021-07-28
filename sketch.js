const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer, hammer2, hammer3;
var rubber;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    hammer2 = new Hammer(40,50);
    hammer3 = new Hammer(50,150);
    rubber = new Rubber(70,90,50);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    hammer2.display();
    hammer3.display(); 
    rubber.display();
}