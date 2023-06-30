
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

console.log(arrTasks)

//Task List generate
const ulList = document.createElement('ul'),
      ulListElement = document.createElement('li'),
      spanListElement = document.createElement('span');

//Card
function generateTaskCard(el){    
    spanListElement.innerText = taskCard.taskTitle
}
generateTaskCard(taskCard)


//List
ulListElement.insertAdjacentElement('afterbegin', spanListElement)
ulList.insertAdjacentElement('afterbegin', ulListElement)

function renderTaskList(list){
    list.classList = 'task_list'
    document.body.insertAdjacentElement('afterbegin', list)
}

renderTaskList(ulList);
