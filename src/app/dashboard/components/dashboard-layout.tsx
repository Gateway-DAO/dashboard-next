import { PropsWithChildren, } from 'react';

import { Box } from '@mui/material';
import { Stack } from '@mui/system';

import { MenuItem } from './sidebar/menu';
import Sidebar from './sidebar/sidebar';

type Props = {
  menuItems: Array<MenuItem>;
};

export default function DashboardLayout({
  children,
  menuItems,
}: PropsWithChildren<Props>) {
  return (
    <Stack direction={'row'}>
      <Sidebar menuItems={menuItems} />
      <Box width="100%">
        {children}
      </Box>
    </Stack>
  );
}
