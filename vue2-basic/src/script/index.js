(() => {
  'use strict'

  // two way data binding (to UI)

  let vm = new Vue({
    el: '#app',
    data: {
      newItem: '',
      todos: [
        'task 1',
        'task 2',
        'task 3',
      ]
    },
    methods: {
      addItem: function () {
        let newTodos = [...this.todos, this.newItem]
        this.newItem = ''
        this.todos = newTodos
      }
    }
  })
})()