
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
            {content: 'text1',TextContent: 'texttttt',DateClock: '2022-02-02Time11:31',color: 'text-warning',status: false}
        ]   
        localStorage.setItem("todos", JSON.stringify(todos))
    }

// great or update todos
    function createTodos(todo) {
        let todoslist = document.querySelector('#sortable')
        todoslist.innerHTML = "" 
        
        // greate list tag ech tag
            todos.forEach((todo, index)=> { 
               //   // the div all
              let divFarther = document.createElement('div')
              divFarther.className = "border-bottom mt-1 pt-1 bg-white bg-body  p-1"
                //add date and whach
                let divFartherb = document.createElement('button')
                divFartherb.textContent = todo.DateClock
                divFartherb.className = 'btn btn btn-link m-2 p-2 '

              // the div row 
              let divrow = document.createElement('div')
              divrow.className = "row pb-2"

              // the div for icon 
              let divA = document.createElement('i')
              divA.className = ("btn col-1 bi bi-circle " + todo.color)
              

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
            
              //tim task (clock and date)
              divFarther.append(divFartherb)
            
              
              todoslist.append(divFarther)
               

                 //todo and flase todo 
                
                if (todo.status) {
                    divB.classList.add('text-decoration-line-through', 'text-muted')
                    divA.classList.remove('bi-circle', todo.color)
                    divA.classList.add('bi-check-circle-fill', 'text-success')
                    divFartherb.classList.add('disabled')
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

   /////////add todo//////////


   let add = document.querySelector('#add')
    add.addEventListener('submit', e => { 
            //text contact  
        let textname = add.textname.value
        //time tasks
        let datetime = add.datetime.value
        //color
        let colortask = add.color.value
        
        if (add.name.value) {      
            todos.push({content: add.name.value,TextContent: textname,DateClock: datetime,color: colortask,status: false})
            
            localStorage.setItem("todos", JSON.stringify(todos))
            createTodos(todos)
        }
        
    })
    
      ///////// search todos and filter//////////
        // let search = document.querySelector('#search')
        //     search.addEventListener('keyup', e => { 
        //     if (search.search.value) {  
        //         var todofilter = todos.filter(
        //             todo => todo.content.includes(search.search.value)
        //         )
        //         createTodos(todofilter)
        //     }else{
        //         createTodos(todos)
        //     }
            
        //})


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

   //Jquery scroll
   $( function() {
    $( "#sortable" ).sortable({
      placeholder: "ui-state-highlight"
    });
    $( "#sortable" ).disableSelection();
  } );
  