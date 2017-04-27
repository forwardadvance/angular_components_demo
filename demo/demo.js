// template
// bindings
// controllerAs

angular.module('app', [])
  // .directive('app', function() {
  //   return {
  //     scope: {},
  //     controller: function() {},
  //     controllerAs: '$ctrl',
  //     template:''
  //   }
  // })
  .component('app', {
    template: `
      <tt-header title="$ctrl.appTitle"></tt-header>
      <cat-list 
        cats="$ctrl.cats" 
        on-cat-select="$ctrl.selectedCat = cat"></cat-list>
      <selected-cat cat="$ctrl.selectedCat"></selected-cat>
      <tt-footer></tt-footer>
    `,
    controller: function(catService) {
      this.appTitle = "Talk Talk App";
      this.cats = catService.cats
    }
  })
  .service('catService', function() {
    this.cats = ['floppy', 'Puneet', 'Maher', "Tiddles"]
  })
  .component('catList', {
    bindings: {
      cats: '<',
      onCatSelect: '&'
    },
    template: `
      <ul>
        <li ng-repeat="cat in $ctrl.cats">
          <button ng-click="$ctrl.handleClick(cat)">{{cat}} </button>
        </li>
      </ul>
    `,
    controller: function() {
      this.handleClick = (cat) => {
        console.log(cat);
        if (this.onCatSelect) {
          this.onCatSelect({cat: cat})
        }
      }
    }
  })

  .component('selectedCat', {
    bindings: {cat: '<'},
    template: `
      <p>Selected cat: {{$ctrl.cat}}</p>
    `
  })
  .component('ttHeader', {
    bindings: {
      title: '<'
    },
    template: `
      <header>
        <h1>{{$ctrl.title}}</h1>
      </header>
    `
  })
  .component('ttFooter', {
    template: `
      <footer>Hello from the footer!</footer>
    `
  });






// Initial state
// angular.module('app', [])
//   .component('faFooter', {
//       template: `
//         <footer>Hello!</footer>
//       `
//     });
