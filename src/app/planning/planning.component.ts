import { AuthService } from '../auth/auth.service';
import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Subscription} from 'rxjs';



@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css']
})
export class PlanningComponent implements OnInit {

  constructor(private _authService: AuthService) { }

  ngOnInit() {
  }

}
