
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
            {content: 'text1',TextContent: 'texttttt',whach: "6:12" ,date: '4/3/99 ', status: false},
            {content: 'text2',TextContent: 'texttttt',whach: '6:12' ,date: '4/3/99 ', status: false},
            {content: 'text3',TextContent: 'texttttt',whach: '6:12' ,date: '4/3/99 ', status: true},
            {content: 'text4',TextContent: 'texttttt',whach: '6:12' ,date: '4/3/99 ', status: true},
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
                //add date and whach
                let divFartherb = document.createElement('button')
                divFartherb.textContent = todo.whach
                divFartherb.className = 'btn btn btn-link '

                let divFartherc = document.createElement('button')
                divFartherc.textContent = todo.date
                divFartherc.className = ' btn  btn-link ms-2 '

              // the div row 
              let divrow = document.createElement('div')
              divrow.className = "row pb-2"

              // the div for icon 
              let divA = document.createElement('i')
              divA.className = "  btn col-1 bi bi-circle"
              

              // text contact
              let divB = document.createElement('span')
              divB.className = "col-10 fs-6 text-break pt-2 "
              divB.textContent = todo.content

                // add text to tasks
                let divBd = document.createElement('br')
                let divBc = document.createElement('span')
                    divBc.textContent = todo.TextContent
                    divBc.classList = ' text-muted'
                
                

            
              //delete or ((edit) the son.....)
              let divC = document.createElement('i')
              divC.className = "col-1 btn bi bi-trash-fill"


              // elmant to  append the row  
              divrow.append(divA)
              divrow.append(divB)
              divrow.append(divC)
              
              
                
              divB.append(divBd)
              divB.append(divBc)
                
                
              // row to append the divFather
              divFarther.append(divrow)

              divFarther.append(divFartherb)
              divFarther.append(divFartherc)
              
              todoslist.append(divFarther)
               

                 //todo and flase todo 
                
                if (todo.status) {
                    divB.classList.add('text-decoration-line-through', 'text-muted')
                    divA.classList.remove('bi-circle')
                    divA.classList.add('bi-check-circle-fill')
                    divFartherb.classList.add('disabled')
                    divFartherc.classList.add('disabled')
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

   /////////add text//////////


   let add = document.querySelector('#add')
   add.addEventListener('submit', e => {   
       let textname = add.textname.value
       if (add.name.value) {      
         todos.push({content: add.name.value,TextContent: textname,whach: '00:00' ,date: '00/00/00',status: false})
         
         localStorage.setItem("todos", JSON.stringify(todos))
          createTodos(todos)
       }
   })



   // show fild add task to the tasks

   let showfild = document.querySelector('#showfild')
   
   showfild.addEventListener('click', e=>{
    ButtonShowText.classList.remove('d-none')
    e.target.classList.add('d-none')
    
   })

   // hadin filds and show button add tasks 
   let deletetask = document.querySelector('#deletetask')
   deletetask.addEventListener('click', e=>{
    ButtonShowText.classList.add('d-none')
    showfild.classList.remove('d-none')
    
   })
