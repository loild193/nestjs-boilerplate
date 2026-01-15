import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import appConfig from '~/config/app.config'
import databaseConfig from '~/database/config/database.config'
import { MongooseConfigService } from '~/database/mongoose-config.service'
import { UserSeedModule } from '~/database/seeds/document/user/user-seed.module'

@Module({
    imports: [
        UserSeedModule,
        ConfigModule.forRoot({
            isGlobal: true,
            load: [databaseConfig, appConfig],
            envFilePath: ['.env'],
        }),
        MongooseModule.forRootAsync({
            useClass: MongooseConfigService,
        }),
    ],
})
export class SeedModule {}
