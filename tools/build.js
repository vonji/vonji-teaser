import run from './run';
import bundle from './bundle';
import clean from './clean';
import fs from 'fs-extra';

const build = async () => {
  await run(clean);
  await run(bundle);
}

export default build;
