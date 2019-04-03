import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private router: Router){}

  title = 'routingExperiment';

  ngOnInit() {
    this.router.events.subscribe((e)=>{
      console.log(e);
    })
  }
}
