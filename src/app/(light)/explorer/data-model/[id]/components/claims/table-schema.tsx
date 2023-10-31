import { ClaimFieldProps } from '@/utils/get-claim-type';

import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';

import Row from './row';

type Props = {
  properties: Record<string, ClaimFieldProps>;
};

export default function TableSchema({ properties }: Props) {
  const hasExamples = Object.keys(properties).some(
    (item) => (properties[item].examples ?? []).length > 0
  );
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
            {hasExamples && <TableCell sx={{ width: 72, p: 0 }} />}
            <TableCell sx={{ color: 'text.secondary' }}>Field</TableCell>
            <TableCell sx={{ color: 'text.secondary' }} align="right">
              Type
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(properties).map((item) => (
            <Row
              key={item}
              property={properties[item]}
              showCollapse={hasExamples}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
