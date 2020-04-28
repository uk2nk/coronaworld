import { Component, OnInit,Inject,ElementRef,ChangeDetectorRef,  ViewChild } from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA} from '@angular/material';
import { Country,CountryHistoryResponse } from '../model/entity';
import {CommonService } from '../common.service';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-countrydetailsheet',
  templateUrl: './countrydetailsheet.component.html',
  styleUrls: ['./countrydetailsheet.component.css']
})
export class CountrydetailsheetComponent implements OnInit {
country:Country;
@ViewChild('heading',{static: false}) heading: ElementRef;
countryHistoryList:CountryHistoryResponse[];
  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: any,private commonService: CommonService
  ,private _bottomSheetRef: MatBottomSheetRef<CountrydetailsheetComponent>
  ,private changeDetectorRef: ChangeDetectorRef) { 
    
    this.country= data.country;
  }

  getCountryDetails()
  {
    this.commonService.getCountryHistory(this.country.Slug).subscribe((data:any) => {
      this.countryHistoryList=data;
      this.changeDetectorRef.detectChanges();
    })
  }

  ngOnInit() {
    
  }
  ngAfterViewInit() {
    console.log(this.heading.nativeElement.offsetHeight); 
    console.log(this.heading.nativeElement.offsetWidth);  
    this.getCountryDetails(); 
  }

}
