'use client';

import { common } from '@/locale/en/common';
import { wallet } from '@/locale/en/wallet';
import { My_BalanceQuery } from '@/services/protocol/types';
import { numberToMoneyString } from '@/utils/money';
import { useToggle } from '@react-hookz/web';

import {
  ArrowDropDown,
  ArrowDropUp,
  MoreHorizOutlined,
} from '@mui/icons-material';
import {
  Box,
  Button,
  Collapse,
  Divider,
  Skeleton,
  Stack,
  Typography,
} from '@mui/material';

type listItem = {
  name: string;
  value: string;
};

type PropsStatementList = {
  title: string;
  value: number;
  showValues: boolean;
  showDetails: boolean;
  list?: listItem[];
  isLoading?: boolean;
};

const WalletStatementList = ({
  title,
  value,
  showValues,
  showDetails,
  list,
  isLoading,
}: PropsStatementList) => {
  return (
    <Stack
      data-testid="wallet-statement__list"
      bgcolor="common.white"
      borderRadius="16px"
      flex={1}
      px={2}
      pt={2}
    >
      <Box gap={1} pb={2}>
        <Typography variant="caption" color="text.secondary">
          {title}
        </Typography>
        <Typography variant="h5" data-testid="list__total-value">
          {isLoading ? (
            <Skeleton width={100} />
          ) : (
            <>
              {showValues ? (
                <>{numberToMoneyString(value)}</>
              ) : (
                <MoreHorizOutlined sx={{ fontSize: 'inherit' }} />
              )}
            </>
          )}
        </Typography>
      </Box>
      <Collapse in={showDetails && !!list?.length}>
        <Stack data-testid="list__details-items" divider={<Divider />} mx={-2}>
          {list?.map(({ name, value }) => (
            <Box key={name} display="flex" justifyContent="space-between" p={2}>
              <Typography variant="body2">{name}</Typography>
              <Typography
                variant="subtitle2"
                data-testid="list__register-value"
              >
                {showValues ? (
                  <>{value}</>
                ) : (
                  <MoreHorizOutlined sx={{ fontSize: 'inherit' }} />
                )}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

type Props = {
  showValues: boolean;
  isLoading?: boolean;
  myWallet?: My_BalanceQuery['myWallet'];
};

const mockMoneyIn = [
  { name: 'Deposits', value: '$150.00' },
  { name: 'PDA consumption revenue', value: '$84.54' },
];

export default function WalletStatement({
  showValues,
  myWallet,
  isLoading,
}: Props) {
  const [showDetails, toggleDetails] = useToggle(false);

  return (
    <Box data-testid="hero__wallet-statement">
      <Box
        mt={5}
        display="flex"
        flexDirection={{
          xs: 'column',
          lg: 'row',
        }}
        gap={2}
      >
        <WalletStatementList
          showDetails={showDetails}
          showValues={showValues}
          isLoading={isLoading}
          value={myWallet?.moneyIn as number}
          title={wallet.page.money_in}
          list={mockMoneyIn}
        />
        <WalletStatementList
          showDetails={showDetails}
          isLoading={isLoading}
          showValues={showValues}
          value={myWallet?.moneyOut as number}
          title={wallet.page.money_out}
        />
      </Box>
      <Stack mt={2} gap={2}>
        <Button
          variant="text"
          onClick={toggleDetails}
          sx={{ alignSelf: 'flex-start' }}
          endIcon={!showDetails ? <ArrowDropDown /> : <ArrowDropUp />}
        >
          {!showDetails ? common.actions.more_info : common.actions.less_info}
        </Button>
      </Stack>
    </Box>
  );
}
