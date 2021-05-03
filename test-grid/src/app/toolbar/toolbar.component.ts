import {Component, Input, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {DetailGridComponent} from '../detail-grid/detail-grid.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(public component: DetailGridComponent) {
    component.brol();
  }

  ngOnInit(): void {
  }

}
