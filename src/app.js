import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el:"#app",
    data: {
      items: [{name: "Wash Car", done: false},
    {name: "Buy Shopping", done: false},
    {name: "Clean bathroom", done: false}]
    newItem: ""
    },
    methods: {
      saveNewItem: function() {
        const itemToAdd = {name: this.newItem, done: false}
        this.items.push(itemToAdd);
        this.newItem = "";
      },
      doneItem: function (index) {
        this.items[index].done = true;
      }
    }
  });
})
