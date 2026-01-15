import {
    // common
    Module,
} from '@nestjs/common'
import { DatabaseConfig } from '~/database/config/database-config.type'
import databaseConfig from '~/database/config/database.config'
import { FilesModule } from '~/files/files.module'
import { DocumentUserPersistenceModule } from '~/users/infrastructure/persistence/document/document-persistence.module'
import { RelationalUserPersistenceModule } from '~/users/infrastructure/persistence/relational/relational-persistence.module'
import { UsersController } from '~/users/users.controller'
import { UsersService } from '~/users/users.service'

// <database-block>
const infrastructurePersistenceModule = (databaseConfig() as DatabaseConfig).isDocumentDatabase
    ? DocumentUserPersistenceModule
    : RelationalUserPersistenceModule
// </database-block>

@Module({
    imports: [
        // import modules, etc.
        infrastructurePersistenceModule,
        FilesModule,
    ],
    controllers: [UsersController],
    providers: [UsersService],
    exports: [UsersService, infrastructurePersistenceModule],
})
export class UsersModule {}
