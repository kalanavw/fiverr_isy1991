import { Component, OnInit } from '@angular/core';
import {AuthService} from '../usuarios/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  constructor(private authService: AuthService) { }

}
