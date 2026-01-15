import { NestFactory } from '@nestjs/core'
import { SeedModule } from '~/database/seeds/document/seed.module'
import { UserSeedService } from '~/database/seeds/document/user/user-seed.service'

const runSeed = async () => {
    const app = await NestFactory.create(SeedModule)

    // run
    await app.get(UserSeedService).run()

    await app.close()
}

void runSeed()
