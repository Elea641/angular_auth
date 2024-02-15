import {Observable} from "rxjs";

export interface IAuthenticationService {
  authenticate(username:string, password: string): Observable<boolean>;
}
