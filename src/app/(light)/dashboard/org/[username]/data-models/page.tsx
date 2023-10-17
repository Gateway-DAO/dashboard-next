import { getPrivateApi } from '@/services/protocol/api';
import { getCurrentOrg } from '@/utils/currentOrg';

import DataModelsTable from './components/data-models-table';

export default async function DashboardOrgDataModelsPage(props: any) {
  const privateApi = await getPrivateApi();
  const pathnameOrg = props.params?.username;

  const organization = await getCurrentOrg(pathnameOrg);
  const requestsData =
    (
      await privateApi.dataModelsByOrg({
        organizationId: organization!.id,
        skip: 0,
        take: 5,
      })
    )?.dataModels ?? [];

  const count = (
    await privateApi.myDataModelsCountOrg({
      orgGatewayId: pathnameOrg,
    })
  ).myDataModelsCount;

  return <DataModelsTable data={requestsData} totalCount={count} />;
}
