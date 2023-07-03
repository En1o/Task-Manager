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

const taskArray = [{
    title: 'Test title',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, quas perferendis? Odio totam exercitationem, labore possimus nulla recusandae similique, facere dignissimos minus eveniet suscipit facilis delectus eos eius quidem deleniti.',
    isCompleted: false
},
{
    title: 'Test title',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, quas perferendis? Odio totam exercitationem, labore possimus nulla recusandae similique, facere dignissimos minus eveniet suscipit facilis delectus eos eius quidem deleniti.',
    isCompleted: false
},
{
    title: 'Test title',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, quas perferendis? Odio totam exercitationem, labore possimus nulla recusandae similique, facere dignissimos minus eveniet suscipit facilis delectus eos eius quidem deleniti.',
    isCompleted: false
},
{
    title: 'Test title',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, quas perferendis? Odio totam exercitationem, labore possimus nulla recusandae similique, facere dignissimos minus eveniet suscipit facilis delectus eos eius quidem deleniti.',
    isCompleted: false
},
{
    title: 'Test title',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, quas perferendis? Odio totam exercitationem, labore possimus nulla recusandae similique, facere dignissimos minus eveniet suscipit facilis delectus eos eius quidem deleniti.',
    isCompleted: false
},{
    title: 'Test title',
    text: 'Lorem ipsum dolor sit ',
    isCompleted: false
}]

const tasksList = document.querySelector('.task_list');
let tasksListItem; 


function createTaskListItem(task){
    const taskListElem = document.createElement('li')
    taskListElem.classList = 'task_list_item'
    taskListElem.innerHTML = `
        <span class="task_list_title">${task.title}</span>
        <p class="task_list_text">${task.text}</p>
        <span class = "task_list_btn_block">
            <button class="task_list_btn list_btn_complite">Complite</button>
            <button class="task_list_btn list_btn_edit">Edit</button>
            <button class="task_list_btn list_btn_delete">DEL</button>
        </span>        
`

    return taskListElem
}

/*
taskArray.forEach((task) => {
    tasksListItem = createTaskListItem(task)
    tasksList.insertAdjacentElement('afterbegin', tasksListItem)
    
})
*/


//delete card element (first version)
const delElem = document.querySelectorAll('.list_btn_delete')


delElem.forEach((el, i) => {
    el.addEventListener('click', () => {
        document.querySelectorAll('.task_list_item').forEach((card, j) =>{
            if(j == i){
                console.log(i)
                deleteCard(i)
                render(taskArray)
            }
        })
    })
})

function deleteCard(index){
    taskArray.splice(index, 1)
}

function render(elem){
    tasksList.innerHTML = ''
    elem.forEach((task) => {
        tasksListItem = createTaskListItem(task)
        tasksList.insertAdjacentElement('afterbegin', tasksListItem)        
    })
}


