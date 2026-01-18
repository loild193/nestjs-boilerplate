import { NestFactory } from '@nestjs/core'
import { RoleSeedService } from '~/database/seeds/relational/role/role-seed.service'
import { SeedModule } from '~/database/seeds/relational/seed.module'
import { StatusSeedService } from '~/database/seeds/relational/status/status-seed.service'
import { UserSeedService } from '~/database/seeds/relational/user/user-seed.service'

const runSeed = async () => {
    const app = await NestFactory.create(SeedModule)

    // run
    await app.get(RoleSeedService).run()
    await app.get(StatusSeedService).run()
    await app.get(UserSeedService).run()

    await app.close()
}

void runSeed()
