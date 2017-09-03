/**
 * 2017/8/25
 * 菜鸟教程：AngularJS2教程 =》AngularJS2 用户输入
 * url:http://www.runoob.com/angularjs2/angularjs2-user-input.html
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }
  /* 1.1 绑定到用户输入事件
  clickMessage = ' ';
  onClickMe() {
    this.clickMessage = "菜鸟教程";
  }
  */
  /*1.1 html
  <ion-buttons>
    <button ion-button (click)="onClickMe()">点我！</button>
    {{ clickMessage }}
  </ion-buttons>
   */

  /*1.2 通过 $event 对象取得用户输入
  values = '';
  onKey(event: any) {
     this.values += (<HTMLInputElement>event.target).value + ' | ';
  }
  */
  /*1.2 html
  <input (keyup)="onKey($event)"/>
  {{ values }}
   */

  /*1.3 从一个模板引用变量中获得用户输入
  values = '';
  onKey(value: string) {
    this.values += value + ' | ';
  }
  */
  /*1.3 html
  <input #box (keyup)="onKey(box.value)" />
  <p>{{ values }}</p>
   */

  /*1.4 按键事件过滤 ( 通过 key.enter)
  values = '';
  */
  /*1.4 html
  <input #box (keyup.enter)="values = box.value" />
  <p>{{ values }}</p>
   */

  /*1.5 blur( 失去焦点 ) 事件
  values = '';
  */
  /*1.5 html
   <input #box (keyup.enter)="values = box.value" (blur)="values = box.value"/>
  <p>{{ values }}</p>
   */

}
