import { explorer_home } from '@/locale/en/explorer-home';

import DataModelsExplorerFeatured from './components/featured-data-models-row/featured';
import Header from './home-components/header';
import LastTransactionsSection from './home-components/last-transactions-section';

export default function ExplorerHome() {
  return (
    <>
      <Header />
      <LastTransactionsSection />
      <DataModelsExplorerFeatured title={explorer_home.data_models} viewMore />
    </>
  );
}
