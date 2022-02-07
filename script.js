
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
            {content: 'text1', status: true},
            {content: 'text2', status: true},
            {content: 'text3', status: false},
            {content: 'text4', status: true},
        ]   
        localStorage.setItem("todos", JSON.stringify(todos))
    }

// great or update todos
    function createTodos(todo) {
        let todoslist = document.querySelector('#todos-list')
        todoslist.innerHTML = "" 
        
        // greate list tag ech tag
            todos.forEach((todo, index)=> { 
               //   // the div all
              let divFarther = document.createElement('div')
              divFarther.className = "border-bottom mt-1 pt-1"

              // the div row 
              let divrow = document.createElement('div')
              divrow.className = "row pb-2"

              // the div for icon 
              let divA = document.createElement('i')
              divA.className = "  btn col-1 bi bi-circle"
              

              // text contact
              let divB = document.createElement('span')
              divB.className = "col-10 fs-6 text-break pt-2"
              divB.textContent = todo.content
              
                
                

            
              //delete or ((edit) the son.....)
              let divC = document.createElement('i')
              divC.className = "col-1 btn bi bi-trash-fill"


              // elmant to  append the row  
              divrow.append(divA)
              divrow.append(divB)
              divrow.append(divC)
            
            
              // row to append the divFather
              divFarther.append(divrow)
              todoslist.append(divFarther)



                 //todo and flase todo 
                
                if (todo.status) {
                    divB.classList.add('text-decoration-line-through', 'text-muted')
                    divA.classList.remove('bi-circle')
                    divA.classList.add('bi-check-circle-fill')
                }  
        
                divA.addEventListener('click', e=> {
                    todos[index].status =  !todos[index].status
                    localStorage.setItem("todos", JSON.stringify(todos))
                    createTodos(todos)
                })

                //delete tasks
                    divC.addEventListener('click', e=> {
                    todos.splice(index, 1)
                    localStorage.setItem("todos", JSON.stringify(todos))
                    createTodos(todos)
                 })    
            });           
    }
    createTodos(todos)  



    //click and show text and button( save task, cancel)
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

