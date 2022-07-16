import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "@env/environment";
import { Observable } from "rxjs";
import { IDash } from "../model";

@Injectable({ providedIn: 'root' })
export class DashboardService {
    private env = environment;
    constructor(private http: HttpClient) { }

    public info(): Observable<IDash> {
        return this.http.get<IDash>(`${this.env.url}dashboard${this.env.suffix}`);
    }
    
}