import {
    // common
    Module,
} from '@nestjs/common'
import { DatabaseConfig } from '~/database/config/database-config.type'
import databaseConfig from '~/database/config/database.config'
import { DocumentSessionPersistenceModule } from '~/session/infrastructure/persistence/document/document-persistence.module'
import { RelationalSessionPersistenceModule } from '~/session/infrastructure/persistence/relational/relational-persistence.module'
import { SessionService } from '~/session/session.service'

// <database-block>
const infrastructurePersistenceModule = (databaseConfig() as DatabaseConfig).isDocumentDatabase
    ? DocumentSessionPersistenceModule
    : RelationalSessionPersistenceModule
// </database-block>

@Module({
    imports: [infrastructurePersistenceModule],
    providers: [SessionService],
    exports: [SessionService, infrastructurePersistenceModule],
})
export class SessionModule {}
