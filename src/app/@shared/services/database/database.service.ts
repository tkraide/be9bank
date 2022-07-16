import { Injectable } from "@angular/core";
import { IUser } from "@app/@shared/model";
import Dexie from "dexie";
import { v4 as uuid } from 'uuid'
@Injectable({ providedIn: 'root' })
export class DatabaseService extends Dexie {
    public user: Dexie.Table<IUser, number>;
    public partner: Dexie.Table<IUser, number>;
    constructor() {
        super('docchain');
        this.version(3).stores({
            user: 'id, email, nome, type, url',
            partner: 'id, cnpj, comissao, email, nome, url'
        });
        this.user = this.table('user');
        this.partner = this.table('partner');
    }

    public createUser(user: IUser) {
        return this.transaction('rw', this.user, () => {
            this.user.clear();
            user.id = uuid();
            this.user.add(user);
        });
    }
}