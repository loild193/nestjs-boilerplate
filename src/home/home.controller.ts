import { Controller, Get } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { HomeService } from '~/home/home.service'

@ApiTags('Home')
@Controller()
export class HomeController {
    constructor(private service: HomeService) {}

    @Get()
    appInfo() {
        return this.service.appInfo()
    }

    @Get('/healthz')
    healthCheck() {
        return this.service.healthCheck()
    }
}
