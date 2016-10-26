// MAIN COMPONENT THAT TAKES ENTIRE PAGE

import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {MapComponent} from './map.component';

@Component({
    selector: 'my-app',
    template: '<h1>Welcome to Angular2 App</h1><courses></courses><map></map>',
    directives: [CoursesComponent, MapComponent],
    styles: ['h1 { font-family: "Arial"; text-align: center; padding: 20px; }']
})
export class AppComponent { }