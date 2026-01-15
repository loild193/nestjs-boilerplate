import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { AuthController } from '~/auth/auth.controller'
import { AuthService } from '~/auth/auth.service'
import { AnonymousStrategy } from '~/auth/strategies/anonymous.strategy'
import { JwtRefreshStrategy } from '~/auth/strategies/jwt-refresh.strategy'
import { JwtStrategy } from '~/auth/strategies/jwt.strategy'
import { MailModule } from '~/mail/mail.module'
import { SessionModule } from '~/session/session.module'
import { UsersModule } from '~/users/users.module'

@Module({
    imports: [UsersModule, SessionModule, PassportModule, MailModule, JwtModule.register({})],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy, JwtRefreshStrategy, AnonymousStrategy],
    exports: [AuthService],
})
export class AuthModule {}
