const tasks = [   { taskName: "Write report", completed: true, priority: 2 },   { taskName: "Attend meeting", completed: false, priority: 3 },   { taskName: "Fix bug", completed: false, priority: 1 },   { taskName: "Update website", completed: true, priority: 4 } ];
const firstTask=tasks.find((val)=>{
    if(val.priority<3)
        return val;
})
const firstTaskNotCompletedIndex=tasks.findIndex((val)=>{
    if(val.completed===false)
        return val;
})
const totalTaks=tasks.reduce((acc,val)=>{
    if(val.completed===true)
        return acc+1;
    return acc;
},0);
tasks.forEach((val)=>{
    console.log(val.taskName);
});
console.log(firstTask);
console.log(firstTaskNotCompletedIndex);
console.log(totalTaks);