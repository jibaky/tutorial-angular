import { Component, OnInit } from '@angular/core';
import { HappinessService } from 'src/app/services/happyService/happiness.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public happy: HappinessService) { }

  ngOnInit(): void {
  }

}
