import {
  CallHandler,
  ExecutionContext,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const logging = (response) => {
      //   if (process.env.LOGGING_HTTP == 'true') {
      const request = context.switchToHttp().getRequest<Request>();
      // if (process.env.NODE_ENV !== 'dev' || !process.env.NODE_ENV) {
      // Logger.log(
      //   JSON.stringify({
      //     request: {
      //       path: request.path,
      //       params: request.params,
      //       body: request.body,
      //       query: request.query,
      //       method: request.method,
      //     },
      //     response: response,
      //   }),
      // );
      // } else {
      Logger.log(
        JSON.stringify(
          {
            request: {
              path: request.path,
              params: request.params,
              body: request.body,
              query: request.query,
              method: request.method,
            },
            response: response,
          },
          null,
          2,
        ),
      );
      // }
      //   }
    };
    return next.handle().pipe(tap((data) => logging(data)));
  }
}
