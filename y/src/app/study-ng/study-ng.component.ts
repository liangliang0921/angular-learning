import { Component, OnInit } from '@angular/core';
import {NzMessageService, NzTreeHigherOrderServiceToken} from 'ng-zorro-antd';

@Component({
  selector: 'app-study-ng',
  templateUrl: './study-ng.component.html',
  styleUrls: ['./study-ng.component.css']
})
export class StudyNGComponent implements OnInit {

  messageString: string;
  dic = {};
  checked = false;
  indeterminate = true;
  tem = ['小张',
        '小李',
        '小花'];

  test1() {
    // let transformString: string = transformString.replace(/[.[*?+^$|()/]|\]|\\/g, '\\$&');

    let article = '蔡徐坤你好||蔡徐坤'; // 文本
    const keyworld = [ // 关键词
      '徐坤',
      '蔡徐坤',
      '徐坤',
      '徐坤你'
    ];

    for (let i = 0; i < keyworld.length; ++i) {
      let frist = '(';
      const tail = ')';
      let newString = '';
      const temString = '(<.*>)?';
      const dataString = keyworld[i];
      // tslint:disable-next-line: no-shadowed-variable
      for (let i = 1; i < dataString.length + 1; ++i) {
        let old = '';
        old = dataString.slice(i - 1, i);
        newString += old;
        if (i < article.length) {
          newString += temString;
        }
      }
      frist = frist + newString + tail;
      keyworld[i] = frist;
      console.log(frist);
    }

    // 字符串处理
    // let x = article.split('');
    // let temString = '(<.*>)?';
    // for (let data of x) {

    // }

    // 字符串首位加（ ）


    for (const data of keyworld) {
      article = article.replace(new RegExp(`(${data})`, 'i'), `<span style="color:red">$1</span>`);
      console.log(article);
    }
  // let hightlightText = (article,oldWorld) => {
  //   for(let key of keyworld) {
  //     let regExp = new RegExp(key, 'g');
  //     article = article.replace(regExp, `<span style="color:red">${key}</span>`)
  //   }
  //   return article;
  // }
  //   console.log(hightlightText(article,keyworld));
  }

  test2(tem: string) {
    this.messageString = tem;
    if (this.messageString === 'message') {
      const type = 'error';
      this.message.create(type, '禁言失败，请重试!' + '<br>' + '错误码:' + 9999
      + '<br>' + '错误详情:' + 'request failed!');
    }
  }

  log() {
    // tslint:disable-next-line: forin
    for (const data in this.dic) {
      this.dic[data] = this.checked;
    }
  }

  constructor(
    private message: NzMessageService,
  ) {}

  ngOnInit() {
    this.test1();
    console.log('我是页面1');
    // this.dic[1231231] = '213123123';
    // this.dic[1222222] = '321313';
    // console.log(this.dic);
    this.dic['123'] = false;
    this.dic['456'] = false;

  }
}
