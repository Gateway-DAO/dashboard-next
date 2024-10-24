'use client';
import React from 'react';

import ExternalLink from '@/components/external-link/external-link';
import { explorerQueries } from '@/constants/queries';
import { mockTransactions, mockMetaData } from '@/services/api/mocks';
import { Transaction } from '@/services/api/models';
import { useQuery } from '@tanstack/react-query';

import { Box, Card, Container, Divider, Stack } from '@mui/material';

import TransactionData from './transaction-data';
import PDA from './types/pda';

type Props = {
  id: string;
};

// this will also refactor in future depending on cases
const DisplayDetails = (data: any) => {
  return <PDA data={data} />;
};

export default function TransactionDetails({ id }: Props) {
  const { data } = useQuery({
    queryKey: [explorerQueries.transaction, id],
    queryFn: async (): Promise<Transaction> => {
      const mockPromise = new Promise<Transaction>((resolve) => {
        const t = mockTransactions.find((t) => t.solanaTransactionId === id);
        resolve({
          createdAt: t!.createdAt,
          fee: t!.fee,
          signature: t!.signature,
          solanaTransactionId: t!.solanaTransactionId,
          source: t!.source,
          transactionId: t!.transactionId,
        });
      });
      return mockPromise;
    },
  });

  const { data: transactionData } = useQuery({
    queryKey: [explorerQueries.transaction_arweave],
    queryFn: async (): Promise<typeof mockMetaData> => {
      const mockPromise = new Promise<typeof mockMetaData>((resolve) => {
        setTimeout(() => {
          resolve(mockMetaData);
        }, 1000);
      });
      return mockPromise;
    },
  });

  return (
    <>
      <Container sx={{ pb: 4 }}>
        <Box sx={{ maxWidth: 777 }}>
          <Stack
            component={Card}
            variant="outlined"
            sx={{
              mb: 3,
              overflow: 'visible',
            }}
            divider={
              <Divider
                sx={{
                  width: '100%',
                }}
              />
            }
          >
            {data && DisplayDetails(data)}
          </Stack>
        </Box>
      </Container>
      {transactionData && (
        <TransactionData data={JSON.stringify(transactionData)} />
      )}
      {data && (
        <ExternalLink
          iconSxProps={{ fontSize: 20, color: 'primary.main' }}
          href={data?.transactionId as string}
          text="View on Solscan"
          textSxProps={{ color: 'primary.main', ml: 7 }}
        />
      )}
    </>
  );
}
