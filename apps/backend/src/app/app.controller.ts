import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import {HealthCheckService, MongooseHealthIndicator} from '@nestjs/terminus';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private health: HealthCheckService, private mongooseHealthIndicator: MongooseHealthIndicator) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Get('health')
  getHealth() {
    return this.health.check([
      () => this.mongooseHealthIndicator.pingCheck('mongo')
    ])
  }
}
