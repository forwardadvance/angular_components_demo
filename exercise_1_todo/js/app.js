// Start point for the Flickr Directive exercise
// http://www.forwardadvance.com/angular/directives

angular.module('app', [])
  .component('app', {
    template: `
      <h1>TODO</h1>
      <todo-list todos="todos"></todo-list>
    `,
    controller: function() {
      this.todos = ['get bacon', 'eat', 'feed cat']
    }
  })
  .component('todoList', {
    template: 'todos go here'
  })