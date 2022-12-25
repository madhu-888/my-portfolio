import { Component } from '@angular/core';




interface socialIconURLS{
  name: string,
  url : string,
  link : string,
}
const socialIconURLSArray: socialIconURLS[]=[
  {
    name: "GitHub",
    url : "../../../assets/images/social-links/github.png",
    link: "https://github.com/madhu-888"
  },
  {
    name: "LinkedIn",
    url : "../../../assets/images/social-links/linkedin.png",
    link: "https://www.linkedin.com/in/madhu-sudhan-rao-pediredla-18588a1a3"
  },
  {
    name: "Instagram",
    url : "../../../assets/images/social-links/instagram1.png",
    link: "https://www.instagram.com/mr._.9.5/"
  },
  {
    name: "Facebook",
    url : "../../../assets/images/social-links/facebook.png",
    link: "https://www.facebook.com/profile.php?id=100014411956772"
  }
]
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  myName = "MADHU SUDHAN"
  skills = "Web Developer, Web Designer"

constructor(){}

  ngOnInit(): void {
    
  }

  containsSLinkUrls = socialIconURLSArray;
}
