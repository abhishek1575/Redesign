import { sweData } from './swe';
import { supData } from './sup';
import { sysData } from './sys';
import { valData } from './val';
import { manData } from './man';
import { pimData } from './pim';
import { reuData } from './reu';
import { splData } from './spl';
import { acqData } from './acq';
import { mleData } from './mle';
import { hweData } from './hwe';

export const allProcessData = {
  ...sweData,
  ...supData,
  ...sysData,
  ...valData,
  ...manData,
  ...pimData,
  ...reuData,
  ...splData,
  ...acqData,
  ...mleData,
  ...hweData,
};
