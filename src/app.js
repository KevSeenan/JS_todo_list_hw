import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el:"#app",
    data: {
      tasks: [{name: "Wash Car", priority: "Low", done: false},
    {name: "Buy Shopping", priority: "High", done: false},
    {name: "Clean Bathroom", priority: "Low", done: false}],
    newTask: ""
    },
    methods: {
      saveNewTask: function () {
        const taskToAdd = {name: this.newTask, priority: "blah", done: false}
        this.tasks.push(taskToAdd);
        this.newTask = "";
      },
      doneTask: function (index) {
        this.tasks[index].done = true;
      }
    }
  });
})
