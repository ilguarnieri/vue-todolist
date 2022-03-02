const app = new Vue({
    el:'#app',
    data: {
        newTodo: '',
        todoList: [
            {
                text: 'Fare la spesa',
                done: false,
            },
            {
                text: 'Sistemare la cameretta',
                done: true,
            },
            {
                text: 'Fare i compiti',
                done: false,
            }
        ]
    },
    methods: {
        addTodo: function(){
            if(this.newTodo.trim().length){
                this.todoList.push({
                    text: this.newTodo,
                    done: false,
                });
            }
            this.newTodo = '';
        },
        deleteTodo: function(i){
            this.todoList.splice(i,1);
        },
        changeDone: function(i){
            this.todoList[i].done = !this.todoList[i].done;
        }
    }
})