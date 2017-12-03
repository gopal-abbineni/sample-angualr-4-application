import {Injectable} from "@angular/core";
import { ConnectionBackend, RequestOptions, Request, RequestOptionsArgs, Response, Http, Headers} from "@angular/http";
import {Observable} from "rxjs/Rx";

import { sharedData } from './app.shareddata';
import { UtilsService } from "./app.utils";
//console.log(sharedData.getV()); 


@Injectable()
export class InterceptedHttp extends Http {


    constructor(backend: ConnectionBackend, defaultOptions: RequestOptions, private  _sharedData: sharedData, private  _utilsService: UtilsService) {
        super(backend, defaultOptions);
    }

    request(url: string|Request, options?: RequestOptionsArgs): Observable<Response> {
        return super.request(url, this.getRequestOptionArgs(options));
    }



    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        //url = this.updateUrl(url);
        this._utilsService.showloader();
        this._sharedData.sethttpPengindRequest(this._sharedData.gethttpPengindRequest()+ 1);
        console.log("pending no of requests",this._sharedData.gethttpPengindRequest())
        return super.get(url, this.getRequestOptionArgs(options)).finally(()=>{
            console.log("stop service")
            this._sharedData.sethttpPengindRequest(this._sharedData.gethttpPengindRequest() - 1);
            if (this._sharedData.gethttpPengindRequest() === 0 && this._sharedData.isNavigationEnded) {
                this._utilsService.hideloader()
                console.log("pending no of requests", this._sharedData.gethttpPengindRequest())
            }
        });
    }

    post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        this._utilsService.showloader();

        this._sharedData.sethttpPengindRequest(this._sharedData.gethttpPengindRequest()+ 1);
        console.log("pending no of requests",this._sharedData.gethttpPengindRequest())
        return super.post(url, body, this.getRequestOptionArgs(options)).finally(()=>{
            console.log("stop service")
            this._sharedData.sethttpPengindRequest(this._sharedData.gethttpPengindRequest() - 1);
            if (this._sharedData.gethttpPengindRequest() === 0 && this._sharedData.isNavigationEnded) {
                this._utilsService.hideloader()
                console.log("pending no of requests", this._sharedData.gethttpPengindRequest())
            }
        });
    }

    // put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    //     url = this.updateUrl(url);
    //     return super.put(url, body, this.getRequestOptionArgs(options));
    // }

    // delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    //     url = this.updateUrl(url);
    //     return super.delete(url, this.getRequestOptionArgs(options));
    // }
    
    // private updateUrl(req: string) {
    //     //return  environment.origin + req;
    //     return req;
    // }

    private getRequestOptionArgs(options?: RequestOptionsArgs) : RequestOptionsArgs {
        if (options == null) {
            options = new RequestOptions();
        }
        if (options.headers == null) {
            options.headers = new Headers();
        }
        options.headers.append('Content-Type', 'application/json');

        return options;
    }
}