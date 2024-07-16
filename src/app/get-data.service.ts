import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class GetDataService {
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  //想辦法把值傳回去
  getData(url: string) {
    let data;
    this.http.get<any[]>(url).subscribe((value) => {
      data = value;
    });
    return data;
  }

  //   putData(url:string,body:any[]){
  // this.http.put<any[]>(url,body).subscribe((value)=>{return value
  // })
  //   }
}
