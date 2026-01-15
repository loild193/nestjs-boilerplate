import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AuthModule } from '~/auth/auth.module'
import { AuthFacebookController } from '~/auth-facebook/auth-facebook.controller'
import { AuthFacebookService } from '~/auth-facebook/auth-facebook.service'

@Module({
    imports: [ConfigModule, AuthModule],
    providers: [AuthFacebookService],
    exports: [AuthFacebookService],
    controllers: [AuthFacebookController],
})
export class AuthFacebookModule {}
