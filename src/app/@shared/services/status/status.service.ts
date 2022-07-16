import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IKeyValue } from "@app/@shared/model";
import { environment } from "@env/environment";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class StatusService {
    private env = environment;
    constructor(private http: HttpClient) { }

    /**
     * Auth user using jwt token
     */
    public list(): Observable<IKeyValue[]> {
        console.log('list status', this.env.url)
        return this.http.get<IKeyValue[]>(`${this.env.url}status${this.env.suffix}`);
    }

    
}