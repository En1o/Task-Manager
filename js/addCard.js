const addCardWindow = document.querySelector('.add_card'),
      addCardBtn = addCardWindow.querySelector('.add_card_btn'),
      closeAddCardWindow = document.querySelector('.close_card_btn'),
      tasksCardList = document.querySelector('.task_list1')



addCardBtn.addEventListener('click', () => {
    let addCardText = addCardWindow.querySelector('.add_card_text').value
    tasksCardList.innerHTML += `
        <li>${addCardText}</li>
    `
})

closeAddCardWindow.addEventListener('click', () => {
    addCardWindow.classList += ' add_card_text_none'
})
console.log(addCardWindow)
