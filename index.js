//matter JS
const {Engine,Runner,Render,World,Bodies}=Matter;
const width=600;
const height=600;

const engine=Engine.create();
const {world}=engine;
const render=Render.create({
    element:document.body,
    engine:engine,
    options:{
wireframes:true,
        width,
        height
    }
});
Render.run(render);
Runner.run(Runner.create(),engine);


//walls
const walls=[
    Bodies.rectangle(width/2,0,width,40,{  //x-axis,y-axis,width,height    axis to center of shape
        isStatic:true   //dont move otherwise it will fall
    }),
    Bodies.rectangle(width/2,height,width,40,{isStatic:true}),   //bottom border
    Bodies.rectangle(0,height/2,40,height,{isStatic:true}),      //left
    Bodies.rectangle(width,height/2,40,height,{isStatic:true})     //right
     
]
World.add(world,walls)   //to showup

//Maze Geneartion
const grid=Array(3).fill(null).map(()=>
    Array(3).fill(false))
console.log(grid);