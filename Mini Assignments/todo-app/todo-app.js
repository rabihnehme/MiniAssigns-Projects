const todos=[{
    text:'Order cat food',
    completed: false
}, {
    text:'Clean kitchen',
    completed: true
}, {
    text:'Buy food',
    completed:true
}, {
    text:'Do work',
    completed: false
}, {
    text:'Exercise',
    completed:true
}
]

//start

const filters={
    searchText:'',
    hidecompleted: false
}

const renderTodos= function(todos, filters){
    const filteredTodos= todos.filter(function(todo){
        const searchbool=todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const completedbool= !filters.hidecompleted || !todo.completed
        return searchbool && completedbool
    })

    //you have 2 todos left
    const incomplete= filteredTodos.filter(function(x){
        return !x.completed
    })

    
    document.querySelector('#todos').innerHTML=''

    const summary = document.createElement('h2')
    summary.textContent='You have '+incomplete.length+' todos left'
    document.querySelector('#todos').appendChild(summary)

    filteredTodos.forEach(function(x){
        const p= document.createElement('p')
        p.textContent=x.text
        document.querySelector('#todos').appendChild(p)
})


}
//end

renderTodos(todos,filters)


document.querySelector('#search-text').addEventListener('input', function(e){
    filters.searchText=e.target.value
    renderTodos(todos,filters)
})

document.querySelector('#todo-form').addEventListener('submit', function(e){
    e.preventDefault()
    todos.push({
        text:e.target.elements.todo.value,
        completed: false
    })

    renderTodos(todos,filters)
    e.target.elements.todo.value=''
})

document.querySelector('#cb').addEventListener('change',function(e){
     filters.hidcompleted= e.target.checked
    renderTodos(todos,filters)
})