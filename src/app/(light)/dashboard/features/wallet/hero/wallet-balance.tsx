import { Visibility } from '@mui/icons-material';
import { Box, IconButton, Stack, Typography } from '@mui/material';

export default function WalletBalance({ value }: { value?: string }) {
  return (
    <Stack data-testid="hero__wallet-balance" mt={5} gap={1}>
      <Box display="flex" gap={1}>
        <Typography variant="subtitle1" color="text.secondary">
          Wallet balance
        </Typography>
        <IconButton size="small">
          <Visibility />
        </IconButton>
      </Box>
      <Typography variant="h4" data-testid="wallet-balance__balance">
        {value ?? '$0'}
      </Typography>
      <Typography variant="caption" color="text.secondary">
        Manage the money you earn and spend on Gateway
      </Typography>
    </Stack>
  );
}
