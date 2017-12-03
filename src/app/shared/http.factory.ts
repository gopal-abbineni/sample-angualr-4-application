import {XHRBackend, Http, RequestOptions} from "@angular/http";
import {InterceptedHttp} from "./http.interceptor";

import { sharedData } from './app.shareddata';
import { UtilsService } from "./app.utils";


export function httpFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions, _sharedData: sharedData, _utilsService: UtilsService): Http {
    return  new InterceptedHttp(xhrBackend, requestOptions, _sharedData,_utilsService);
}