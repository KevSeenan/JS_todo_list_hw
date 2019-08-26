import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el:"#app",
    data: {
      tasks: [{name: "Wash Car", done: false},
    {name: "Buy Shopping", done: false},
    {name: "Clean bathroom", done: false}],
    newTask: ""
    },
    methods: {
      saveNewTask: function() {
        const taskToAdd = {name: this.newTask, done: false}
        this.tasks.push(taskToAdd);
        this.newTask = "";
      },
      doneTask: function (index) {
        this.tasks[index].done = true;
      }
    }
  });
})
