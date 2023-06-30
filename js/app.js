
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

function generateTaskCard(el){
    spanListElement.innerText = taskCard.taskTitle
}
generateTaskCard(taskCard)

ulListElement.insertAdjacentElement('afterbegin', spanListElement)
ulList.insertAdjacentElement('afterbegin', ulListElement)
document.body.insertAdjacentElement('afterbegin', ulList)