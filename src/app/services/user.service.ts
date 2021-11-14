import { HttpClient, HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Login } from "../modal/login.modal";
import { User } from "../modal/user.modal";

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

    createAccount(username: string, password: string, emailAddress: string, displayName: string): Observable<HttpResponse<User>> {
        // return this.auth.createUserWithEmailAndPassword(email,password);
        const user: User = {
            uid: "",
            username: username,
            password: password,
            emailAddress: emailAddress,
            displayName: displayName,
            status: true
        };
        return this.http.post<User>(environment.apiEndpoint.createAccountUrl, user, { observe: 'response' })
            .pipe(retry(1),
                catchError(this.handleError.bind(this)));
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