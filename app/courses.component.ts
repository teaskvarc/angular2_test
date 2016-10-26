import {Component} from 'angular2/core'
import {CourseService} from './course.service'
import {AutoGrowDirective} from './auto-grow.directive'

@Component({
    selector: 'courses', // CSS selector for host HTML element
    template: `
                <div class="container">
                    <h2>Cities to visit</h2>
                    {{ title }}
               
                    <input type="text" autoGrow />
                    <ul>
                        <li *ngFor="#course of courses">
                        {{ course }}
                        </li>
                    </ul>  
                </div>
                
                `,
    providers: [CourseService],
    styles: ['.container{ text-align: center;} ul{list-style: none;} html{background-color: #0000AA;}']
})
export class CoursesComponent{
    title = "Enter a city";
    courses;

    constructor(courseService: CourseService){
        this.courses = courseService.getCourses();
    }
}