import{Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpResponse} from '@angular/common/http';
import { map } from "rxjs/operators";
import{Observable} from 'rxjs';
@Injectable()
export class CategoryService{
    url="http://121.241.54.185:80/retailrestfulservices/product.svc/GetCatSubcatList"
    constructor(private http: HttpClient) { }
 getCategories():any{
  
        let headers = new HttpHeaders({
          'Content-Type': 'application/json',
          });
        
      let options = { headers: headers };
         let object={"comp_code":"55","main_code":"55"};
         let body:any=JSON.stringify(object);
        // this.http.post(this.url,body,options).subscribe((data:any)=>{
        //     debugger;
        //     return data.GetCatSubcatListResult.mains;
        //  }, 
        //  error => {
        //     console.error("error is");
        //      console.error(error);
        //  });
 return this.http.post(this.url,body,options).pipe(
 map((res: Response) =>  { 
 console.log(res);
 return res|| { };
 }
 )
 
 );
     
        }
}
