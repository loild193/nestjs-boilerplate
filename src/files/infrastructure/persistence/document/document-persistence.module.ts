import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { FileSchema, FileSchemaClass } from '~/files/infrastructure/persistence/document/entities/file.schema'
import { FileDocumentRepository } from '~/files/infrastructure/persistence/document/repositories/file.repository'
import { FileRepository } from '~/files/infrastructure/persistence/file.repository'

@Module({
    imports: [MongooseModule.forFeature([{ name: FileSchemaClass.name, schema: FileSchema }])],
    providers: [
        {
            provide: FileRepository,
            useClass: FileDocumentRepository,
        },
    ],
    exports: [FileRepository],
})
export class DocumentFilePersistenceModule {}
