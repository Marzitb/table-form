import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule,ReactiveFormsModule,} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import{MatSelectModule} from '@angular/material/select';
import {Formpage} from './form/form.page';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';
import { HttpClientModule } from '@angular/common/http';
import {FilterPipe } from './pipe/filter.pipe';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatPaginatorModule} from '@angular/material/paginator';


 // -> imported filter pipe

 // -> imported filter pipe


// import { Ng2SearchPipeModule } from 'ng2-search-filter';

// import { FormControl } from '@angular/forms';
// matDatepickerToggle






@NgModule({
  
  declarations: [
    AppComponent,
    Formpage,
    FilterPipe
    
    
  ],
 
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatTableModule,
    MatDialogModule,MatRadioModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatPaginatorModule
    
  ],
 
  providers: [],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
