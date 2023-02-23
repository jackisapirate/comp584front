// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-counter',
//   templateUrl: './counter.component.html',
//   styleUrls: ['./counter.component.css']
// })
// export class CounterComponent {




  
// }

import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public currentCount = 0;

  public incrementCounter() {
    this.currentCount++;
  }
}

