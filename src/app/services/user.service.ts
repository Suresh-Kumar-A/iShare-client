import { HttpClient, HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Login } from "../model/login.modal";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) {
    }

    private handleError(error: HttpErrorResponse) {
        if (error.status === 0) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            console.error(
                `Backend returned code ${error.status}, body was: `, error.error);
        }
        // Return an observable with a user-facing error message.
        return throwError(
            'Something bad happened; please try again later.');
    }

    createAccount(email: string, password: string) {
        // return this.auth.createUserWithEmailAndPassword(email,password);
    }

    login(username: string, password: string): Observable<HttpResponse<Login>> {
        // don't forget {observe: 'response'} otherwise you will only get respose in json not the response data
        return this.http.post<Login>(environment.apiEndpoint.loginUrl, { username: username, password: password }, { observe: 'response' })
            .pipe(retry(1),
                catchError(this.handleError.bind(this)));
    }

    logout() {
        // return this.auth.signOut();
    }
}