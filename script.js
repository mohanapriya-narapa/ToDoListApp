
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
      li.innerHTML=`${task.title}
       <div>
     
        <button class="delete" onclick="deleteTask(${task.id})">Delete</button>
      </div>
      `
        taskList.appendChild(li);
    }

    )
   

}
async function deleteTask(id){
   try {
      // Make a DELETE request to the API to remove the task
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
      console.log(`Task with id ${id} deleted from server`);
  
      // Remove the task from the local array
      const index = tasks.findIndex(task => task.id === id);
      if (index !== -1) {
        tasks.splice(index, 1); // Remove the task by index
      }
  
      // Re-render the updated task list
      renderTasks();
    } catch (error) {
      console.error(`Error deleting task with id ${id}:`, error);
    }
}