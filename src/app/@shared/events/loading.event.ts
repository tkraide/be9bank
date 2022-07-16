import { Observable, Subject } from "rxjs";

const LoadingSubject = new Subject<boolean>();
export const LoadingEvent = {
    loading(): Observable<boolean> {
        return LoadingSubject.asObservable();
    },
    load(load: boolean) {
        LoadingSubject.next(load);
    }
}