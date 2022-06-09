import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  /*
  getCount(arr, fruit) {
    var count = 0;

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === fruit) count++;
      else if (Array.isArray(arr[i])) count += this.getCount(arr[i], fruit);
    }

    return count;
  }

  arr = [
    'apple',
    'orange',
    'banana',
    'melon',
    ['apple', 'orange', 'banana', 'mango'],
    ['apple', 'orange', 'pear', 'melon'],
  ];

  initialize() {
    let calcBtn = document.getElementById('b');
    let resetBtn = document.getElementById('b2');
    calcBtn.onclick = this.populate;
    resetBtn.onclick = this.reset;
    this.arr.forEach((element) => {
      console.log(element);
      if (Array.isArray(element)) {
        for (var i = 0; i < element.length; i++) {
          if (document.getElementById(element[i])) {
            document.getElementById(element[i]).innerHTML =
              element[i] +
              ' (' +
              this.getCount(this.arr, element[i]).toString() +
              ')';
          } else {
            document.getElementById('fruits').innerHTML +=
              '<p' +
              ' id="' +
              element[i] +
              '"' +
              '>' +
              element[i] +
              '(1)' +
              '</p>';
          }
        }
      } else
        document.getElementById('fruits').innerHTML +=
          '<p' + ' id="' + element + '"' + '>' + element + '(1)' + '</p>';
    });
  }

  populate() {
    var fruit = document.getElementById('fruit').innerHTML;
    document.getElementById('count').innerHTML = this.getCount(
      this.arr,
      fruit
    ).toString();
  }
  reset() {
    document.getElementById('fruit').innerHTML = '';
    document.getElementById('count').innerHTML = '0';
  }
  */

  ngOnInit() {
    //this.initialize();
  }
}
