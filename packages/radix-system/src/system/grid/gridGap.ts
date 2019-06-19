import { system, Config } from '@styled-system/core';
export { GridGapProps } from '@styled-system/core';

export const config: Config = {
  gridGap: {
    property: 'gridGap',
    scale: 'space',
  },
};

export const gridGap = system(config);
