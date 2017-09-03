/**
 * 2017/8/24
 * url:http://www.runoob.com/angularjs2/angularjs2-displaying-data.html
 */
// AngularJS2 数据显示
/*  1.1
import { Component } from '@angular/core';
@Componet({
    selector: 'my-app',
    template: `
        <h1>{{ title }}</h1>
        <h2>我喜欢的网站{{ mySite }}/h2>
        `
})
export class AppComponet{
    title = '站点列表';
    mySite = '菜鸟教程';
}
*/

/*  1.2
import { Component } from '@angular/core';
@Componet({
    selector: 'my-app',
    template: `
        <h1>{{ title }}</h1>
        <h2>我喜欢的网站{{ mySite }}/h2>
        <p>网站列表：</p>
        <ul>
            <li *ngFor="let site of sites">
                {{ site }}
            </li>
        </ul>
        `
})
export class AppComponet{
    title = '站点列表';
    sites= ['菜鸟教程', 'Google', 'Taobao', 'Facebook'];
    mySite = this.sites[0];
}
*/

/*  1.3
export class Site {
    constructor (
        public id: number,
        public name: string
    ){ }
}
*/

/*  1.4
import { Component } from '@angular/core';
import { Site } from './site';

@Component({
    selecter: 'myApp',
    template : `
        <h1>{{ title }}</h1>
        <h2>我喜欢的网站{{ mySite }}/h2>
        <p>网站列表：</p>
        <ul>
            <li *ngFor="let site of sites">
                {{ site }}
            </li>
        </ul>
        `
})
export class AppComponet {
    title = '站点列表';
    sites = [
        new Site(1, '菜鸟教程'),
        new Site(2, 'Google'),
        new Site(3, 'Taobao'),
        new Site(4, 'Facebock')
    ];
    mySite = this.sites[0];
}
*/

/*  1.5
import { Component } from '@angular/core';
import { Site } from './site';

@Component({
    selecter: 'myApp',
    template : `
        <h1>{{ title }}</h1>
        <h2>我喜欢的网站{{ mySite }}/h2>
        <p>网站列表：</p>
        <ul>
            <li *ngFor="let site of sites">
                {{ site }}
            </li>
        </ul>
        <p *ngIf="sites.length > 3">你有很多个喜欢的网站</p>
        `
})
export class AppComponet {
    title = '站点列表';
    sites = [
        new Site(1, '菜鸟教程'),
        new Site(2, 'Google'),
        new Site(3, 'Taobao'),
        new Site(4, 'Facebock')
    ];
    mySite = this.sites[0];
}
*/
