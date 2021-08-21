import { Controller, Post, Req, UseInterceptors } from '@nestjs/common';
import { LoggingInterceptor } from './app.interceptor';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('skill')
  getStart(@Req() req) {
    if (req.body.action.params.skillRouteUrl == 'start') {
      return this.appService.getStart();
    } else if (req.body.action.params.skillRouteUrl == 'products') {
      return this.appService.getProduct(req.body.action.clientExtra);
    } else if (req.body.action.params.skillRouteUrl == 'test') {
      return this.appService.getTest();
    } else if (req.body.action.params.skillRouteUrl == 'end') {
      return this.appService.getEnd();
    }
  }
}
