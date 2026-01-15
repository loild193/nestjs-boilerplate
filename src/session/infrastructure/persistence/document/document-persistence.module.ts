import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import {
    SessionSchema,
    SessionSchemaClass,
} from '~/session/infrastructure/persistence/document/entities/session.schema'
import { SessionDocumentRepository } from '~/session/infrastructure/persistence/document/repositories/session.repository'
import { SessionRepository } from '~/session/infrastructure/persistence/session.repository'

@Module({
    imports: [MongooseModule.forFeature([{ name: SessionSchemaClass.name, schema: SessionSchema }])],
    providers: [
        {
            provide: SessionRepository,
            useClass: SessionDocumentRepository,
        },
    ],
    exports: [SessionRepository],
})
export class DocumentSessionPersistenceModule {}
