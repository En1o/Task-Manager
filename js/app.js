/* test
// Task Kard
const arrTasks = [];
let taskTitle = 'Title', taskText = 'Test text';

const taskCard = {
    taskTitle,
    taskText,
    isCompleted: false
}

function pushTask(task){
    arrTasks.push(task);
}

//delete
pushTask(taskCard)
pushTask(taskCard)
pushTask(taskCard)



//Task List generate
const ulList = document.createElement('ul'),
      ulListElement = document.createElement('li'),
      spanListElement = document.createElement('span');

//Card
function generateTaskCard(el){
    for(const key in el){
        if(key === taskTitle){
            spanListElement.innerText = el[key]
            return spanListElement
        }
    }    
    
}
generateTaskCard(arrTasks)


//List
ulListElement.insertAdjacentElement('afterbegin', spanListElement)
ulList.insertAdjacentElement('afterbegin', ulListElement)

function renderTaskList(list){
    list.classList = 'task_list'
    document.body.insertAdjacentElement('afterbegin', list)
}

renderTaskList(ulList);
*/

