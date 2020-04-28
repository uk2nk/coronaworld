import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule  } from '@angular/common/http';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {FormGroup, FormControl, FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatSelectModule,
  MatTooltipModule
} from '@angular/material';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorldcountComponent } from './worldcount/worldcount.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CountrycountComponent } from './countrycount/countrycount.component';
import { CommonPipe,SortByPipe } from './pipes/common.pipe';
import { CountrydetailsheetComponent } from './countrydetailsheet/countrydetailsheet.component';

@NgModule({
  declarations: [
    
    AppComponent,
    WorldcountComponent,
    HomeComponent,
    CountrycountComponent,
    CommonPipe,
    SortByPipe,
    CountrydetailsheetComponent
  ],
  entryComponents: [
    CountrydetailsheetComponent
],
  exports: [ CountrydetailsheetComponent ],
  imports: [
    MatSnackBarModule,
    FormsModule,
    MatTooltipModule,
    MatSelectModule,
    MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatBottomSheetModule,
    HttpClientModule ,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
