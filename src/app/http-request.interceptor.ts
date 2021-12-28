import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoaderService } from './loader.service';
import { finalize } from 'rxjs/operators';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

  constructor(private loaderService: LoaderService) { }
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.loaderService.setIsLoading(true);
    const UpdatedRequest = request.clone();
    
    return (
      next
        .handle(UpdatedRequest)
 
        .pipe(finalize(() => this.loaderService.setIsLoading(false)))
    );
  }
}
