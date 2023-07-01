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
}]


const tasksList = document.querySelector('.task_list');

const tasksListItem = `
    <li class="task_list_item">
        <span class="task_list_title">Test title JS</span>
        <p class="task_list_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel itaque reprehenderit, ex magnam nulla maiores nesciunt sint perspiciatis, ullam possimus odio accusantium soluta est corrupti eaque eveniet, expedita praesentium enim?</p>
        <button class="task_list_btn list_btn_complite">Complite</button>
        <button class="task_list_btn list_btn_edit">Edit</button>
        <button class="task_list_btn list_btn_delete">DEL</button>
    </li>
`

tasksList.insertAdjacentHTML('afterbegin', tasksListItem)