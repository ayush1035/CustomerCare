import { Injectable } from '@angular/core';
import { ICustomer } from '../ICustomer';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Headers } from '@angular/http';
import 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()

export class HttpService {

    constructor(private http: Http) { }

    getAllData(): Observable<any> {
        return this.http.get('http://localhost:3000/customer')
            .map((response: Response) => <any>response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.log(error);
        return Observable.throw('simple error' || 'Server error');
    }

}