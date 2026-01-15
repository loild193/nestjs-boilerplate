import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserEntity } from '~/users/infrastructure/persistence/relational/entities/user.entity'
import { UsersRelationalRepository } from '~/users/infrastructure/persistence/relational/repositories/user.repository'
import { UserRepository } from '~/users/infrastructure/persistence/user.repository'

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity])],
    providers: [
        {
            provide: UserRepository,
            useClass: UsersRelationalRepository,
        },
    ],
    exports: [UserRepository],
})
export class RelationalUserPersistenceModule {}
