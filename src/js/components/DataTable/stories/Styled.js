import React from 'react';

import { Grommet, Box, DataTable } from 'grommet';
import { grommet } from 'grommet/themes';

// Source code for the data can be found here
// https://github.com/grommet/grommet/blob/master/src/js/components/DataTable/stories/data.js
import { columns, DATA } from './data';

export const StyledDataTable = () => (
  <Grommet theme={grommet}>
    <Box align="center" pad="large">
      <DataTable
        columns={columns}
        data={DATA}
        step={10}
        pad={{ horizontal: 'large', vertical: 'medium' }}
        background={{
          header: 'dark-3',
          body: ['light-1', 'light-3'],
          footer: 'dark-3',
        }}
        border={{ body: 'bottom' }}
        rowProps={{ Eric: { background: 'accent-2', pad: 'large' } }}
      />
    </Box>
  </Grommet>
);

StyledDataTable.storyName = 'Styled';

export default {
  title: 'Visualizations/DataTable/Styled',
};
