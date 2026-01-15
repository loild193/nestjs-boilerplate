import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { HomeController } from '~/home/home.controller'
import { HomeService } from '~/home/home.service'

@Module({
    imports: [ConfigModule],
    controllers: [HomeController],
    providers: [HomeService],
})
export class HomeModule {}
