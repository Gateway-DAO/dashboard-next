import { ReactNode } from 'react';

import GTWTab from '@/components/tabs/gtw-tab';
import GTWTabs from '@/components/tabs/gtw-tabs-links';
import TitleLayout from '@/components/title-layout/title-layout';
import {
  CONTAINER_PX,
  NEGATIVE_CONTAINER_PX,
} from '@/theme/config/style-tokens';

import { Box } from '@mui/material';

type Props = {
  children?: ReactNode;
};

export function DataModelHeader({ children }: Props) {
  return (
    <>
      <TitleLayout
        titleId="data-model-title"
        title={'Data Models'}
        subtitle={
          'These are the data model you have created and all on the network'
        }
      >
        {children && children}
      </TitleLayout>

      <Box
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          mx: NEGATIVE_CONTAINER_PX,
          px: CONTAINER_PX,
        }}
      >
        <GTWTabs>
          <GTWTab label={'Created'} href={'#'} />
          <GTWTab label={'Network'} href={'#'} />
        </GTWTabs>
      </Box>
    </>
  );
}