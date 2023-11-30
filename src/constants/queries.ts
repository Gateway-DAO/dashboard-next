//Mutations and queries

export const queries = {
  proofs_by_pdas_id: 'proofs_by_pdas_id',
  proof: 'proof',
  proofs_received: 'proofs_received',
  proofs_received_by_org: 'proofs_received_by_org',
  proofs_sent: 'proofs_sent',
  usage_limit: 'user_monthly_usage_limits',
  data_request_template: 'data_request_template',
  data_model: 'data_model',
  my_wallet: 'my_wallet',
  my_transactions: 'my_transactions',
  my_transactions_count: 'my_transactions_count',
  featured_data_models: 'featured_data_models',
  user_info: 'user_info',
  pdas: 'pdas',
};

export const mutations = {
  create_proof: 'create_proof',
  change_pda_status: 'change_pda_status',
  create_proof_from_request: 'create_proof_from_request',
  reject_data_request: 'reject_data_request',
  disconnect_email: 'disconnect_email',
  disconnect_wallet: 'disconnect_wallet',
  update_notification_email: 'update_notification_email',
};

export const explorerQueries = {
  transaction: 'transaction',
  transaction_arweave: 'transaction_arweave',
  home_stats: 'home_stats',
  transactions: 'transactions',
  last_transactions: 'last_transactions',
  transactions_stats: 'transactions_stats',
  featured_data_models: 'data-models-featured',
  featured_data_requests_templates: 'request-templates-featured',
  request_templates_metadata: 'request_templates_metadata',
  request_templates: 'request_templates',
};
