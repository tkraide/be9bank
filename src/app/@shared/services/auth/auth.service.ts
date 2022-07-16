import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IPartner, IUser } from "@app/@shared/model";
import { environment } from "@env/environment";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { DatabaseService } from "../database/database.service";
import { ParnerService } from "../partner/partner.service";

@Injectable({ providedIn: 'root' })
export class AuthService {
    private env = environment;
    constructor(
        private db: DatabaseService,
        private http: HttpClient,
        private parnerService: ParnerService
    ) { }

    /**
     * Auth user using jwt token
     */
    public login(email: string, password: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.http.get(`${this.env.url}auth${this.env.suffix}`).pipe(map((users: IUser[]) => {
                return users.filter((user: IUser) =>
                    (user.email === email && user.password === password)
                )?.shift()
            })).subscribe(
                (user: IUser) => {
                    if (user && user.email) {

                        this.parnerService.partnerList().subscribe((data: any) => {
                            localStorage.setItem('parnerList', JSON.stringify(data));
                        });
                        if (user.nome === "Localiza") {
                            window.localStorage.removeItem('empresaLogada');
                            window.localStorage.setItem('empresaLogada', '1');
                        }

                        if (user.nome === "Decolar") {
                            window.localStorage.removeItem('empresaLogada');
                            window.localStorage.setItem('empresaLogada', '2');
                        }

                        if (user.nome === "Latam") {
                            window.localStorage.removeItem('empresaLogada');
                            window.localStorage.setItem('empresaLogada', '3');
                        }

                        this.db.createUser(user);
                        resolve(true);
                    }
                    if (!user || !user?.email) {
                        reject(false);
                    }
                },
                () => {
                    reject(false);
                }
            )
        });
    }
}