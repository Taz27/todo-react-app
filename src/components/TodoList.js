import React from 'react';
import TodoItem from './TodoItem';
import $ from 'jquery';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            isLoading: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    addEListeners() {
        $(".fa-pencil-alt").on("click", function() {
            //display and hide textbox on click
            $("input[type='text'").fadeToggle();
        });
    }

    removeEListeners() {
        //remove previously added event listeners
        $(".fa-pencil-alt").off("click");
    }

    handleKeyPress(event) {
        if (event.which === 13) {
            let todo = event.target.value; 
            //get ids out of todos and increment the max id
            let idArray = this.state.todos.map((item) => item.id);
            let maxId = idArray.length ? Math.max(...idArray) : 0;
            //console.log(idArray, maxId);
            let newTodo = {
                userId: 27,
                id: maxId + 1,
                title: todo,
                completed: false
            };
            this.setState(prevState => {
                return {todos: [...prevState.todos, newTodo]};
            });
            event.target.value = "";
        }
    }

    handleDelete(id, event) {
        //fade out list item then remove from state
        const todosAfterDelete = this.state.todos.filter(item => item.id !== id);
        
        if (event.target.getAttribute("name") === "i") {
            $(event.target).parent().parent().fadeOut(500, () => this.setState({todos: todosAfterDelete}));
        } else {
            $(event.target).parent().fadeOut(500, () => this.setState({todos: todosAfterDelete}));
        }    
        
    }

    handleChange(id, event) {
        // Update state so that the item with the given id flips `completed` from false to true (or vise versa)
        // Remember not to modify prevState directly, but instead to return a new version of state with the change you want included in that update. 
        //(Think how you might use the `.map` method to do this)
        let updatedTodosData = this.state.todos.map(item => {
            if (item.id === id) {
                //item.completed = !item.completed; ---NEVER MODIFY STATE DIRECTLY!
                //console.log(event.target.checked);
    
                return Object.assign({...item}, {completed: !item.completed});
            }
            //console.log(id);
            return item;
        });
        //event.target.classList.toggle("todo-done", event.target.checked);
        //console.log(this.state.todos[0]);
        this.setState({todos: updatedTodosData});
    }
    
    componentDidMount() {
       
        this.setState({isLoading: true});

        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.json())
        .then((data) => {
            //declare new set that will store unique random numbers
            let randNumsSet = new Set();

            //generate 5 unique random numbers and add to set
            while (randNumsSet.size < 5) {
                let randNum = Math.floor(Math.random() * data.length);
                randNumsSet.add(randNum);
            }
            
            //create a new (smaller) array and push 5 random todos (fetched by API) into it 
            let smallTodosArray = [];
            for (let val of randNumsSet) {
                smallTodosArray.push(data[val]);
            }
            //add 5 random totos into the state.
            this.setState({isLoading: false, todos: smallTodosArray});

            this.addEListeners();
        })
    }

    componentWillUnmount() {
        //remove event listeners
        this.removeEListeners();
        console.log("event handlers removed!");
    }

    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} changefunc={this.handleChange} deletefunc={this.handleDelete} />);
        
        const todoElement = <ul>
                                {todoItems}
                            </ul>;
    
        return (
            <div className="todo-list">
                <h1>To-Do List<i className="fas fa-pencil-alt"></i></h1>
                <input type="text" placeholder="Add New Todo" onKeyPress={this.handleKeyPress} />

                {this.state.isLoading ? 
                <img alt ="loading gif" src="https://media.giphy.com/media/y1ZBcOGOOtlpC/giphy.gif" /> : 
                todoElement}
                
            </div>
            );
    
    }    
}


export default TodoList;