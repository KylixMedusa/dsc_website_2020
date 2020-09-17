import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  scrollHeightPercent:number = 0;

  constructor(
  ) { }

  ngOnInit(): void {
    var node = document.getElementById("router-container");
    this.scrollHeightPercent = (node.scrollTop/(node.scrollHeight - node.clientHeight))*100;
    node.addEventListener('scroll',(e)=>this.checkScroll(e));
  }

  checkScroll(e){
    this.scrollHeightPercent = (e.target.scrollTop/(e.target.scrollHeight - e.target.clientHeight))*100;
  }

}
