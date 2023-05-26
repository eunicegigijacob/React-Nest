/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/health')
  greeting() {
    return 'Server Up!';
  }
}
