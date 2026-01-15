import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { FileRepository } from '~/files/infrastructure/persistence/file.repository'
import { FileEntity } from '~/files/infrastructure/persistence/relational/entities/file.entity'
import { FileRelationalRepository } from '~/files/infrastructure/persistence/relational/repositories/file.repository'

@Module({
    imports: [TypeOrmModule.forFeature([FileEntity])],
    providers: [
        {
            provide: FileRepository,
            useClass: FileRelationalRepository,
        },
    ],
    exports: [FileRepository],
})
export class RelationalFilePersistenceModule {}
