import { Component, NgModule } from '@angular/core';
import { NgCircleProgressModule } from 'ng-circle-progress';



    NgCircleProgressModule.forRoot({
      "radius": 60,
      "space": -10,
      "outerStrokeGradient": true,
      "outerStrokeWidth": 10,
      "outerStrokeColor": "#4882c2",
      "outerStrokeGradientStopColor": "#53a9ff",
      "innerStrokeColor": "#e7e8ea",
      "innerStrokeWidth": 10,
      "title": "UI",
      "animateTitle": false,
      "animationDuration": 1000,
      "showUnits": false,
      "showBackground": false,
      "clockwise": false,
      "startFromZero": false,
      "lazy": true})
  

let mySkillsArray: any[]=[
  {
    skillName : 'Web Development',
    skillImage : "../../../assets/images/skills/source-code.png",
    progLangs : [
      {
        langName: "HTML",
        percent: 75,
        title:"75%"
      },
      {
        langName: "CSS",
        percent: 60,
        title:"60%"
      },
      {
        langName: "JAVASCRIPT",
        percent: 45,
        title: "45%"
      },
      {
        langName: "ANGULAR",
        percent: 45,
        title: "45%"
      },
      {
        langName: "PYTHON",
        percent: 65,
        title: "65%"
      },
      {
        langName: "MYSQL",
        percent: 40,
        title: "60%"
      }
    ]
  
  },
  {
    skillName : 'Web Designing',
    skillImage : "../../../assets/images/skills/web-design.png",
    progLangs : [
        {
          langName : "FIGMA",
          percent: 50,
          title: "50%"
        },
        {
          langName : "PHOTOSHOP",
          percent: 40,
          title: "40%"
        }
    ]
  }
]




@Component({
  selector: 'app-skills-page',
  templateUrl: './skills-page.component.html',
  styleUrls: ['./skills-page.component.css']
})
export class SkillsPageComponent {

  percentage= 25
  pageTitle = "My Skills"
  containsMySkills = mySkillsArray
}
