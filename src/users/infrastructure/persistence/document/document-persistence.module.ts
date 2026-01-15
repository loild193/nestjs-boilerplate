import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { UserSchema, UserSchemaClass } from '~/users/infrastructure/persistence/document/entities/user.schema'
import { UsersDocumentRepository } from '~/users/infrastructure/persistence/document/repositories/user.repository'
import { UserRepository } from '~/users/infrastructure/persistence/user.repository'

@Module({
    imports: [MongooseModule.forFeature([{ name: UserSchemaClass.name, schema: UserSchema }])],
    providers: [
        {
            provide: UserRepository,
            useClass: UsersDocumentRepository,
        },
    ],
    exports: [UserRepository],
})
export class DocumentUserPersistenceModule {}
