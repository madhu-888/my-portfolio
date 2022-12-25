import { Component } from '@angular/core';


interface myDetails{
  key: string,
  value : string
}

const myDetailsArray: myDetails[]=[
  {
    key: 'Name',
    value: 'P.Madhu Sudhana Rao'
  },
  {
    key: 'Age',
    value: '20 Years'
  },
  {
    key: 'Nationality',
    value: 'Indian'
  },
  {
    key: 'Languages',
    value: 'Telugu, English'
  },
  {
    key: 'Current',
    value: 'Student'
  }
]

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent {

  pageTitle = "About Me"
  aboutMe = "I am extremely proficient in Front-End Development using HTML5, Cascade Style Sheets (CSS3), Bootstrap, Advance JavaScript, Angular & Angular Material and apart from Front-End, I have good knowledge in Back-End using Django & MySQL as well as in designing using Adobe Photoshop Figma, and continuously engage in trying to extend my skills with new technology."
  title = "PERSONAL INFO"


  containsmyDetails = myDetailsArray
}
