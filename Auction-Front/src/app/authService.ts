import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {user} from "./user";

@Injectable()
export class AuthService {
  private baseUrl = 'http://localhost:8080/api';
  private user: user | undefined;
  private userSubject = new BehaviorSubject<user | undefined>(undefined);
  userData$ = this.userSubject.asObservable();

  constructor(private http: HttpClient) { }

  register(name: string, password: string): Observable<user> {
    const body = new URLSearchParams();
    body.set('name', name);
    body.set('password', password);
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    return this.http.post<user>(`${this.baseUrl}/register`, body.toString(), { headers });
  }

  login(name: string, password: string): Observable<user> {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('password', password);
    const headers = new HttpHeaders();
    return this.http.post<user>(`${this.baseUrl}/login`, formData);
  }

  setUser(user: user) {
    console.log(user);
    this.userSubject.next(user);
  }

  getUser() {
    console.log(this.user);
    return this.user;
  }
}
