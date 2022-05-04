import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { FixerService } from "../fixer/fixer.service";

@Injectable()

export class CurrencyDetailsResolver implements Resolve<any> {
    constructor(private fixer: FixerService, private router: Router) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.fixer.currencyDetails.pipe(
            map((details: any) => (!!details) ?  details : false),
            catchError((error) => of(false)),
        );
    }
}

