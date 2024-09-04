'use client';
import { useSession } from 'next-auth/react';
import { useCallback } from 'react';

import { LoadingButton } from '@/components/buttons/loading-button';
import { api, getAuthHeader } from '@/services/api/api';
import {
  PublicDataAsset,
  PublicDataAssetTypeEnum,
} from '@/services/api/models';
import { useMutation } from '@tanstack/react-query';
import { useSnackbar } from 'notistack';

const downloadTxt = (data: any, filename: string) => {
  const element = document.createElement('a');
  const file = new Blob([data], { type: 'text/plain' });
  element.href = URL.createObjectURL(file);
  element.download = filename;
  document.body.appendChild(element); // Required for this to work in FireFox
  element.click();
};

export default function DownloadPDA({
  id,
  type,
  name,
}: Required<Pick<PublicDataAsset, 'id' | 'type' | 'name'>>) {
  const session = useSession();
  const { enqueueSnackbar } = useSnackbar();

  // this code will change once will have api
  const { mutateAsync, isPending } = useMutation({
    mutationKey: ['download', id],
    mutationFn: async () => {
      if (!session) throw new Error('Session not found');
      const { data, error } = await api.GET('/data-assets/{id}/download', {
        headers: getAuthHeader(session.data?.token),
        params: {
          path: {
            id,
          },
        },
      });

      if (error) {
        throw new Error(error);
      }

      return data;
    },
    onError: () => {
      enqueueSnackbar('Something went wrong!');
    },
  });

  const onDownload = useCallback(async () => {
    const res = await mutateAsync();
    if (type === PublicDataAssetTypeEnum.StructuredData) {
      downloadTxt(JSON.stringify(res), `${name}.txt`);
    }
    console.log(res);
  }, [mutateAsync, type, name]);

  return (
    <LoadingButton
      variant="contained"
      onClick={onDownload}
      isLoading={isPending}
    >
      Open data asset
    </LoadingButton>
  );
}
