import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { ArrayType } from '@angular/compiler';
import { getTranslationDeclStmts } from '@angular/compiler/src/render3/view/template';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

 countries : any = [];
 country : any = [];
 Confirmed: Number
 Recovered : Number
 Deaths : Number
 Country : any
 Active : Number


  constructor(private http:HttpClient) { }

  getCountries(): Observable<any>{

    const url = "https://api.covid19api.com/countries";
    return this.http.get<any>(url)

  }

  getCoronaRealtimeData(country): Observable<any>{

    const url = "https://api.covid19api.com/total/dayone/country/" + country
return this.http.get<any>(url)

  }


  ngOnInit(): void {

    this.getCountries().subscribe((data)=>{
      console.log(data)
      this.countries=data
      })
  
    }

    getCoronaData(){
      this.getCoronaRealtimeData(this.country).subscribe((data) =>{
      console.log(data)
      var index = data.length - 1 
      this.Confirmed = data[index].Confirmed
      this.Recovered = data[index].Recovered
      this.Deaths = data[index].Deaths
      this.Country = data[index].Country
      this.Active = data[index].Active

      })
    }

    getCountry(country:any){
      this.country= country


    }
  }


  // let targetUrl = "https://covidtracking.com/api/states";
  // this.http.get(targetUrl).subscribe(response => {
  // this.result = response[0]
  // console.log(this.result);

