import { EntityRepository, Repository } from 'typeorm';

import { Platform } from '../models/Platform';

@EntityRepository(Platform)
export class PlatformRepository extends Repository<Platform>  {

}
