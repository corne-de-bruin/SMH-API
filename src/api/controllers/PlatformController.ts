import { Authorized, Get, JsonController } from 'routing-controllers';

import { Platform } from '../models/Platform';
import { PlatformService } from '../services/PlatformService';

@Authorized()
@JsonController('/platforms')
export class PlatformController {

    constructor(
        private platformService: PlatformService
    ) { }

    @Get()
    public find(): Promise<Platform[]> {
        return this.platformService.find();
    }
}
