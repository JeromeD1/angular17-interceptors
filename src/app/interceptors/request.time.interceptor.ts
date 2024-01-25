import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Observable, tap } from "rxjs";

import { RequestTimeService } from "../services/request-time.service";

@Injectable()
export class RequestTimeInterceptor implements HttpInterceptor {

    constructor(private requestTimeService: RequestTimeService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const requestStart: number = new Date().getTime();
        //la methode getTime() de la class Date donne une valeur en milliseconds (donc une valeur de type number)

        console.log(req.urlWithParams);
        console.log(req.url);
        
        
        console.log("requestStart : ", requestStart);
        

        return next.handle(req).pipe(
            tap((response) => {
                if(response instanceof HttpResponse) {
                    const requestEnd: number = new Date().getTime();
                    console.log("requestEnd : ", requestEnd);

                    const requestTime: number = requestEnd - requestStart;
                    console.log("requestTime : ", requestTime);

                    //je récupère requestTime dans mon service pour récupérer ce temps dans mon app.component
                    this.requestTimeService.setRequestTime(requestTime);
                    //et avec la méthode utilisant mon BehaviourSubject :
                    this.requestTimeService.setRequestTimeSource(requestTime);

                }
            })
        )
    }

}