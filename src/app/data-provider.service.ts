import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class DataProviderService {

   readonly API_URL = 'https://api.spacexdata.com/v2/launches';
    constructor(private httpClient: HttpClient){}

    getAllLaunches(): Observable<any> {
        return this.httpClient.get(this.API_URL);
    }

}
