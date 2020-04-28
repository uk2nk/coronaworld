import { Component, OnInit } from '@angular/core';
import {CommonService } from '../common.service';
import { CoronaSummary,country,Country } from '../model/entity';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { CountrydetailsheetComponent } from '../countrydetailsheet/countrydetailsheet.component';
@Component({
  selector: 'app-worldcount',
  templateUrl: './worldcount.component.html',
  styleUrls: ['./worldcount.component.css']
})
export class WorldcountComponent implements OnInit {
  coronaSummary :CoronaSummary;
  countrySummaryLst:Country[];
  myControl = new FormControl();
  selectedCountry:any;
  filteredOptions: Observable<country[]>;  
  countryList:country[]=[];
  sortingOptions:any=[
    { key:"",value:"--Select--"}
   ,{ key:"TotalConfirmed",value:"TotalConfirmed"}
   ,{ key:"TotalRecovered",value:"TotalRecovered"}
   ,{ key:"TotalDeaths",value:"TotalDeaths"}
   ,{ key:"NewConfirmed",value:"NewConfirmed"}
   ,{ key:"NewRecoved",value:"NewRecoved"}
   ,{ key:"NewDeaths",value:"NewDeaths"}
  ];
  sortBy:any=[
    { key:"",value:"--Select--"}
   ,{ key:"desc",value:"Desc"}
   ,{ key:"asc",value:"Asc"}
  ];
  sortByValue:string='desc';
  sortOptionValue:string='TotalConfirmed';
  constructor(private commonService: CommonService,private _countrySheet: MatBottomSheet) { }

  getSummaryDetails()
  {
    this.commonService.getSummary().subscribe((data:any) => {
      this.coronaSummary=data;
     // this.countrySummaryLst=this.coronaSummary.Countries;
     this.countrySummaryLst = this.coronaSummary.Countries;
    })
  }
  getCountryDetails()
  {
    this.commonService.getCountry().subscribe((data:any) => {
      this.countryList=data;
      
    })
  }
  onSortTypeSelected(event:any)
  {   
    //if(event)
    //this.countrySummaryLst = this._filterCountrySummary(event)
  }
  onSortOptionSelected(event:any)
  {    
    // if(event)
    // this.countrySummaryLst = this._filterCountrySummary(event)
  }

  onCountrySelected(event:any)
  {    
    if(event)
    this.countrySummaryLst = this._filterCountrySummary(event)
  }

  ngOnInit() {
    this.getSummaryDetails();
    this.getCountryDetails();
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterCountry(value))
      );
      
  }


  openCountryDetailsSheet(country:any)
  {
    this._countrySheet.open(CountrydetailsheetComponent,{panelClass:'bottomsheet-customwidth',data:{country:country}});
  }

  private _filterCountry(value: string): country[] {
    
    const filterValue = value.toLowerCase();

    return this.countryList.filter(option => option.Country.toLowerCase().includes(filterValue));
  }

  private _filterCountrySummary(value: string): Country[] {
    
    const filterValue = value.toLowerCase();

    return this.coronaSummary.Countries.filter(option => option.Country.toLowerCase().includes(filterValue));
  }


}
