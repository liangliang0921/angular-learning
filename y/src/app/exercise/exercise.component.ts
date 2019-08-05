import { Component, OnInit } from '@angular/core';
import { promise } from 'protractor';
import { reject } from 'q';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {

  // promise 简单的例子
  // timeout(ms) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(resolve, ms, 'done');
  //   });
  // }
  
  // loadImageAsync(url) {
  //   return new Promise(function(resolve, reject) {
  //     const image = new Image();
  
  //     image.onload = function() {
  //       resolve(image);
  //     };
  
  //     image.onerror = function() {
  //       reject(new Error('Could not load image at ' + url));
  //     };
  
  //     image.src = url;
  //   });
  // }

  timeout(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
      console.log("111111");
    });
  }
  
  async asyncPrint(value, ms) {
    await this.timeout(ms);
    console.log(value);
  }

  constructor() {
    // this.timeout(100).then((value) => {
    //   console.log(value);
    // });
  }

  ngOnInit() {
    this.asyncPrint('hello world', 2000);
  }
}
