import { ReactNode } from 'react';

import { Box, Stack } from '@mui/material';

import EducationalTooltip from './educational-tooltip';

type Props = {
  children: ReactNode;
  title: string;
  description: string;
  textBtn: string;
  open: boolean;
  onClose: () => void;
  onClickCard?: () => void;
};

export default function Educational({
  children,
  title,
  description,
  textBtn,
  open,
  onClose,
  onClickCard,
}: Props) {
  return (
    <Stack>
      <Stack sx={{ position: 'relative', zIndex: open ? 2 : 0 }}>
        {children}
        {open && (
          <EducationalTooltip
            title={title}
            description={description}
            textBtn={textBtn}
            onClickCard={onClickCard}
            onClose={onClose}
          />
        )}
      </Stack>
      {open && (
        <Box
          sx={{
            position: 'fixed',
            width: '100%',
            height: '100%',
            backgroundColor: '#1b1b1b9e',
            left: 0,
            top: 0,
            zIndex: 1,
          }}
        />
      )}
    </Stack>
  );
}
