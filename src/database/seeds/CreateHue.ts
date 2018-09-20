import { Connection } from 'typeorm';

import { Platform } from '../../api/models/Platform';
import { Factory, Seed } from '../../lib/seed/types';

export class CreateBruce implements Seed {

    public async seed(factory: Factory, connection: Connection): Promise<Platform> {
        const em = connection.createEntityManager();

        const platform = new Platform();
        platform.id = 'hue';
        platform.brand = 'Phillips';
        platform.name = 'Hue lighting';
        platform.category = 'lighting';
        platform.description = 'Connect to your hue';
        platform.image = '/platforms/philips_hue.png';
        platform.authenticationType = 'oauth';
        platform.authenticationUrl = 'https://smarthome-tst.innogynederland.nl/auth/hue';
        return await em.save(platform);
    }

}
