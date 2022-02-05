
// get to dose frome storeg
let todos =localStorage.getItem("todos")


// try parse date or null 
    try {
        todos = JSON.parse(todos)
        todos = todos.length ? todos : null
    } catch (e) {
        todos = null
    }

// data

    if(!todos){
        todos =[
            "task1",
            "task2",
            "task3",
            "task4",
            
        ]   
        localStorage.setItem("todos", JSON.stringify(todos))
    }

// great or update todos
    function GreateTodos(todo) {
        let todoslist = document.querySelector('#todos-list')
        todoslist.innerHTML = "" 
         
        // greate list tag ech tag
            todos.forEach((todo, index) => { 
                let li = document.createElement('li')
                li.className = 'list-group-item'
                let content =document.createElement('span')
                content.textContent = todo
                let deletebtn = document.createElement('img')
                deletebtn.src = "./img/delete.png"
                deletebtn.alt = "delete icon"
                deletebtn.className = "float-end"
            // append contact and deleted btn to li
               li.append(content)
               li.append(deletebtn)
               todoslist.append(li)
            // button delete todos
             deletebtn.addEventListener('click', e=>{
                 todos.splice(index, 1)
                 localStorage.setItem("todos", JSON.stringify(todos))
                 GreateTodos(todo)

            })
                                
               


        });
    }
    


    // click and show text and button( save task, cancel)
    let ButtonShowText = document.querySelector('#ButtonShowText')
        ButtonShowText.addEventListener('click', e => {
            document.querySelector('#TextShowText').classList.remove('d-none')
            ButtonShowText.classList.add('d-none')
        })
    //hadin text and button and show button ( add tsks)
    let cancelbutton = document.querySelector('#cancelbutton')
        cancelbutton.addEventListener('click', e => {
        document.querySelector('#TextShowText').classList.add('d-none')
        ButtonShowText.classList.remove('d-none')
        })


    GreateTodos(todos)