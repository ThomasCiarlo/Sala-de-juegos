import { Component, OnInit } from '@angular/core';
import { MyLifeComponent } from '../../myLife/my-life/my-life.component';
import { HomeComponent } from '../../home/home/home.component';
import { Route } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
