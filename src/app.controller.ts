import { Controller, Get } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';

@Controller()
@ApiUseTags('默认')
export class AppController {

  @Get()
  index() {
    return 'index'
  }
}
