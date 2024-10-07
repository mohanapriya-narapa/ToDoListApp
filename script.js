
const tasks = []; 
window.onload=async function(){
   try{
const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5');
tasks.push(...response.data); 
renderTasks();
   } 
   catch(error){
    console.error('Error fetching tasks:', error);
   }
}
function renderTasks(){
   const taskList=document.getElementById("task_list");
   taskList.innerHTML="";

    tasks.forEach(task=>{
        const li=document.createElement("li");
      //   
      li.textContent = task.title;
        taskList.appendChild(li);
    }

    )
   

}