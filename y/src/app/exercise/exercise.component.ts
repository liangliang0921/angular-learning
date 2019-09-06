import { Component, OnInit } from '@angular/core';
import { promise } from 'protractor';
import { reject } from 'q';
import {StudyNGComponent} from '../study-ng/study-ng.component';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {

  // html = "<h1>DomSanitizer</h1><script>attackerCode()</script>";

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

  // 先输出11111 然后输出hello world
  // timeout(ms) {
  //   return new Promise((resolve) => {
  //     setTimeout(resolve, ms);
  //     console.log("111111");
  //   });
  // }

  // async asyncPrint(value, ms) {
  //   await this.timeout(ms);
  //   console.log(value);
  // }
  // tslint:disable-next-line: variable-name
  sensitive_info =  '{"错误的": ["亮亮", "梁亮亮", "梁亮"]}';

  arr = JSON.parse(this.sensitive_info);

  arr1 = new Object();
  test1() {

  }

  test2() {
    let begin = 2;
    let end = 0;
    let testString1 = this.sensitive_info;
    let testString2 = this.sensitive_info;
    for (let i = 0; i < testString1.length; ++i) {
      if (this.sensitive_info[i] === ':') {
        end = i;
        break;
      }
    }
    testString1 = testString1.slice(begin, end - 1);
    console.log(testString1);
    console.log(this.sensitive_info);
    for (let i = 0; i < testString2.length; ++i) {
      if (this.sensitive_info[i] === '[') {
        begin = i;
      }
      if (this.sensitive_info[i] === ']') {
        end = i + 1;
        break;
      }
    }
    testString2 = testString2.slice(begin, end);
    console.log(testString2);
    // for(let i = 0; i < testString2.length; ++i) {
    //   console.log(testString2[i]);
    // }
    testString2 = JSON.parse(testString2);
    console.log(testString2);
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < testString2.length; ++i) {
      console.log(testString2[i]);
    }
    // tslint:disable-next-line: no-unused-expression
    testString2.concat;
  }

  // test3() {
  //   for (const x in this.arr) {
  //     console.log(x.length);
  //     console.log(this.arr[x]);
  //     const ts = this.arr[x];
  //     console.log(ts.length);
  //   }
  // }

  test4() {
    // tslint:disable-next-line: only-arrow-functions
    setTimeout(function() {
      window.location.reload();
  }, 2000);
  }

  constructor(
    // studyNGComponent: StudyNGComponent
  ) {
    // this.timeout(100).then((value) => {
    //   console.log(value);
    // });
  }

  ngOnInit() {
    // this.asyncPrint('hello world', 2000);
    // console.log(this.arr);
    // this.test2();
    // this.test3();
    // this.test4();
    console.log('我是页面2');
  }
}
