import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { SessionEntity } from '~/session/infrastructure/persistence/relational/entities/session.entity'
import { SessionRelationalRepository } from '~/session/infrastructure/persistence/relational/repositories/session.repository'
import { SessionRepository } from '~/session/infrastructure/persistence/session.repository'

@Module({
    imports: [TypeOrmModule.forFeature([SessionEntity])],
    providers: [
        {
            provide: SessionRepository,
            useClass: SessionRelationalRepository,
        },
    ],
    exports: [SessionRepository],
})
export class RelationalSessionPersistenceModule {}
