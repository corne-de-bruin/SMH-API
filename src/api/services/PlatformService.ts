import { Service } from 'typedi';
import { OrmRepository } from 'typeorm-typedi-extensions';

import { Logger, LoggerInterface } from '../../decorators/Logger';
import { Platform } from '../models/Platform';
import { PlatformRepository } from '../repositories/PlatformRepository';

@Service()
export class PlatformService {

    constructor(
        @OrmRepository() private platformRepository: PlatformRepository,
        @Logger(__filename) private log: LoggerInterface
    ) { }

    public find(): Promise<Platform[]> {
        this.log.info('Find all platforms');
        return this.platformRepository.find();
    }
}
