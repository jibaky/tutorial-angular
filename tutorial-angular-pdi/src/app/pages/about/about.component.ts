import { Component, OnInit } from '@angular/core';
import { HappinessService } from 'src/app/services/happyService/happiness.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(public happy: HappinessService) { }

  ngOnInit(): void {
  }

}
