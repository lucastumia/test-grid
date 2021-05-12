import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DetailGridComponent} from './detail-grid/detail-grid.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {ToolbarComponent} from './toolbar/toolbar.component';

import {JqxTestsComponent} from './jqx-tests/jqx-tests.component';
import {jqxBarGaugeModule} from 'jqwidgets-ng/jqxbargauge';
import {jqxTreeGridModule} from 'jqwidgets-ng/jqxtreegrid';


@NgModule({
  declarations: [
    AppComponent,
    DetailGridComponent,
    ToolbarComponent,
    JqxTestsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    jqxBarGaugeModule,
    jqxTreeGridModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
