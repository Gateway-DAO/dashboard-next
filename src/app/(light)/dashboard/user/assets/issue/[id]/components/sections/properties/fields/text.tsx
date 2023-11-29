import ErrorMessage from '@/components/form/error-message/error-message';
import { Controller, useFormContext } from 'react-hook-form';

import { TextField } from '@mui/material';

import { PropertyField } from './type';

export default function TextProperty({ id, defaultValue }: PropertyField) {
  const { control } = useFormContext();
  return (
    <Controller
      name={`claim.${id}`}
      control={control}
      render={({ field: { onChange, ...field }, fieldState: { error } }) => (
        <>
          <TextField
            multiline
            maxRows={4}
            fullWidth
            error={!!error}
            onChange={(_e) =>
              onChange(_e.target.value?.length ? _e.target.value : undefined)
            }
            {...field}
          />
          {error && <ErrorMessage>{error.message}</ErrorMessage>}
        </>
      )}
    />
  );
}