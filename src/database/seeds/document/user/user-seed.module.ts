import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { UserSeedService } from '~/database/seeds/document/user/user-seed.service'
import { UserSchema, UserSchemaClass } from '~/users/infrastructure/persistence/document/entities/user.schema'

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: UserSchemaClass.name,
                schema: UserSchema,
            },
        ]),
    ],
    providers: [UserSeedService],
    exports: [UserSeedService],
})
export class UserSeedModule {}
