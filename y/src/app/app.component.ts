import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exercise';
  isCollapsed = false;
  openBolt: string;

  // openConfilter(): void {
  //   this.openBolt = 'confilter';
  // }

  // openConfilterSearch(): void {
  //   this.openBolt = 'confilterSearch';
  // }

  // openPage(p: string): void {
  //   this.openBolt = p;
  // }

  // tslint:disable-next-line: use-lifecycle-interface
  // ngOnInit() {
  //   console.log('hahahahah');
  // }

}
