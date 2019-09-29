import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-community-care',
  templateUrl: './community-care.component.html',
  styleUrls: ['./community-care.component.css']
})
export class CommunityCareComponent implements OnInit {
  div_section : any;
  constructor() { }

  ngOnInit() {
    this.div_section=[
      {'title':'DataFactZ Partners With Wayne State Big Data & Business Analytics Group','content':'In 2015, we began a partnership with the Wayne State University College of Engineering’s Big Data and Business Analytics Group, providing a seed research grant to the organization. The grant will fund a Ph.D. student and support other Wayne State data scientists’ theoretical research.','image':'assets/images/about/img4.png'},
      {'title':'Ennis Center Toy Drive','content':'Each year, we support a number of community organizations that provide vital services such as natural disaster relief, public safety and education each year in an effort to build on our region’s diverse, successful community. During the holiday season, our employees contribute new toys to the Ennis Center for Children, a non-profit organization that works with abused and neglected children throughout Southeast Michigan.','image':'assets/images/about/img5.png'},
      {'title':'DataFactZ And Michigan Spark Users Group','content':'As one of the organizers, we work closely with the Michigan Spark Users Group to bring together individuals interested in the development and use of the Apache Spark platform.','image':'assets/images/about/img6.png'}
    ];
  }

}
