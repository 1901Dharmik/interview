document.addEventListener('DOMContentLoaded', function() {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    let editMode = false;
    let currentEditId = null;

    // Render todos from localStorage
    renderTodos();

    // Form submission
    todoForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const todoText = todoInput.value.trim();
        if (todoText === '') return;

        if (editMode) {
            // Update existing todo
            updateTodo(currentEditId, todoText);
            editMode = false;
            currentEditId = null;
            todoForm.querySelector('button').textContent = 'Add';
        } else {
            // Add new todo
            addTodo(todoText);
        }

        todoInput.value = '';
    });

    // Event delegation for todo actions
    todoList.addEventListener('click', function(e) {
        const target = e.target;
        const todoItem = target.closest('.todo-item');
        
        if (!todoItem) return;
        
        const todoId = parseInt(todoItem.dataset.id);

        // Toggle complete
        if (target.classList.contains('todo-text')) {
            toggleComplete(todoId);
        }
        // Edit todo
        else if (target.classList.contains('edit-btn')) {
            const todo = todos.find(todo => todo.id === todoId);
            todoInput.value = todo.text;
            todoInput.focus();
            editMode = true;
            currentEditId = todoId;
            todoForm.querySelector('button').textContent = 'Update';
        }
        // Delete todo
        else if (target.classList.contains('delete-btn')) {
            deleteTodo(todoId);
        }
    });

    // Add new todo
    function addTodo(text) {
        const newTodo = {
            id: Date.now(),
            text,
            completed: false
        };
        
        todos.push(newTodo);
        saveTodos();
        renderTodo(newTodo);
    }

    // Update todo
    function updateTodo(id, newText) {
        todos = todos.map(todo => 
            todo.id === id ? { ...todo, text: newText } : todo
        );
        saveTodos();
        renderTodos();
    }

    // Toggle complete status
    function toggleComplete(id) {
        todos = todos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        saveTodos();
        renderTodos();
    }

    // Delete todo
    function deleteTodo(id) {
        todos = todos.filter(todo => todo.id !== id);
        saveTodos();
        renderTodos();
    }

    // Save todos to localStorage
    function saveTodos() {
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    // Render all todos
    function renderTodos() {
        todoList.innerHTML = '';
        todos.forEach(todo => renderTodo(todo));
    }

    // Render single todo
    function renderTodo(todo) {
        const todoEl = document.createElement('li');
        todoEl.className = `todo-item ${todo.completed ? 'completed' : ''}`;
        todoEl.dataset.id = todo.id;
        
        todoEl.innerHTML = `
            <span class="todo-text">${todo.text}</span>
            <div class="todo-actions">
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </div>
        `;
        
        todoList.appendChild(todoEl);
    }
});