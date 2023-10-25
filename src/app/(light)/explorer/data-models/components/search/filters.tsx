'use client';

import useBreakpoints from '@/hooks/use-breakpoints';
import { useToggle } from '@react-hookz/web';

import { FilterListOutlined, Search } from '@mui/icons-material';
import {
  Box,
  Button,
  Collapse,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from '@mui/material';
import { explorerDataModels } from '@/locale/en/datamodel';

export default function DataModelsExplorerSearchFilters() {
  const [isVisible, toggleVisible] = useToggle(false);

  const { isDesktop } = useBreakpoints();

  return (
    <Stack mb={2} direction="column" gap={2} justifyContent="stretch">
      <Stack flexDirection="row" gap={1}>
        <TextField
          label="Search"
          sx={{ flex: 1 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
        <IconButton
          type="button"
          onClick={toggleVisible}
          sx={{
            display: {
              xs: 'block',
              lg: 'none',
            },
            border: 1,
            px: 2,
            borderRadius: 1,
          }}
        >
          <FilterListOutlined />
        </IconButton>
      </Stack>
      <Collapse in={isDesktop || isVisible}>
        <Stack
          flexDirection={{
            xs: 'column',
            lg: 'row',
          }}
          alignItems={{
            xs: 'stretch',
            lg: 'flex-start',
          }}
          gap={1}
        >
          <FormControl
            fullWidth
            sx={{
              maxWidth: {
                xs: 'unset',
                lg: 200,
              },
            }}
          >
            <InputLabel id="tags-label">
              {explorerDataModels.filters.tags}
            </InputLabel>
            <Select labelId="tags-label" id="tags" label="Tags">
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            fullWidth
            sx={{
              maxWidth: {
                xs: 'unset',
                lg: 200,
              },
            }}
          >
            <InputLabel id="comsumption-price-label">
              {explorerDataModels.filters.comsumption_price}
            </InputLabel>
            <Select
              labelId="comsumption-price-label"
              id="comsumption-price"
              label="Tags"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            fullWidth
            sx={{
              maxWidth: {
                xs: 'unset',
                lg: 200,
              },
            }}
          >
            <InputLabel id="amount-of-issuances-label">
              {explorerDataModels.filters.amount_of_issuances}
            </InputLabel>
            <Select
              labelId="amount-of-issuances-label"
              id="amount-of-issuances"
              label="Tags"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            fullWidth
            sx={{
              maxWidth: {
                xs: 'unset',
                lg: 200,
              },
              marginLeft: {
                xs: 'unset',
                lg: 'auto',
              },
            }}
          >
            <InputLabel id="sorting-label">
              {explorerDataModels.filters.sort_by}
            </InputLabel>
            <Select labelId="sorting-label" id="sorting" label="Tags">
              <MenuItem value={10}>Newest</MenuItem>
              <MenuItem value={20}>Oldest</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </Collapse>
    </Stack>
  );
}
