export const protocol = {
  pda: {
    authenticated_by: 'Authenticated by',
    issuance_date: 'Issuance date',
    expiration_date: 'Expiration date',
    indeterminate: 'Indeterminate',
    status: 'Status',
    up_to_date: 'Up-to-date',
    valid: 'Valid',
    expired: 'Expired',
    suspended: 'Suspended',
    revoked: 'Revoked',
    invalid: 'Invalid',
    issuer_id: 'Issuer ID',
    recipient_id: 'Recipient ID',
    pda_id: 'PDA ID',
    copy_id: 'PDA ID copied to clipboard',
    copy_link: 'Link copied to clipboard',
    qrcode: 'QR Code',
    claim: 'Claim',
    evidence: 'Evidence',
    download_qrcode: 'Download QRCode',
    hide_activity: 'Hide Activity',
    show_activity: 'See Activity',
    data_model_id: 'Data model ID',
    storage_id: 'Storage ID',
    alert_title: 'This PDA is not valid',
    alert_description:
      'The contents of this PDA were not created by the issuer',
    unfilled: 'Unfilled',
    revoke_dialog_title: 'Are you sure to revoke this PDA?',
    revoke_dialog_text:
      'If you revoke this PDA, it will not be possible to undo this action.',
    revoke_error_message:
      'There was a problem performing the revoke. Try again later.',
    revoke_access: 'Revoke access',
    image: 'Image',
    qr_code: 'QR Code',
    share_dialog_title: 'Share PDA',
    actions: {
      revoke: 'Revoke',
      cancel: 'Cancel',
    },
    share_a_copy: 'Share a copy',
    mint_card: {
      title: 'Minted on',
      chain_column: 'Chain',
      transaction_column: 'Transaction hash',
      token_column: 'Token ID',
      chain_action: 'Mint as NFT',
      chain_action_coming: 'Coming soon',
      chain_coming_message: 'Multi_chain wallets is coming soon',
      feedback_minting: 'Minting PDA',
      feedback_share: 'Share your PDA now!',
      feedback_successful: 'PDA successfully minted as NFT',
      feedback_failed: 'Something went wrong on minting',
    },
    triggers: {
      title: 'Triggers',
      update_if: 'Update if',
      revoke_if: 'Revoke if',
      suspend_if: 'Suspend if',
    },
    data_shared_with: 'Data shared with',
    share_date: 'Share date',
    data_proof_id: 'Data Proof ID',
    data_asset_shared: 'Data asset shared',
  },
  data_model: {
    data_model_id: 'Data model ID',
    copy_id: 'Data model ID copied to clipboard',
    verified_description: 'This data model is verified by Gateway',
    issue_pda_button: 'Issue PDA',
    created_by: 'Created by',
    creation_date: 'Creation date',
    last_update: 'Last update',
    arweave_hash: 'Arweave Hash',
    issuers: 'Issuers',
    pdas: 'PDAs',
    issued_pdas: 'Issued PDAs',
    price_for_consumption: 'Price for consumption',
    recipients: 'Recipients',
    issue_pda_title: 'Issue PDA',
    successfully_title: 'PDA issued successfully',
    error_on_create_pda: "An error occured, couldn't create the PDA.",
    error_on_upload: 'There was an error loading images.',
    actions: {
      issue_pda: 'Issue PDA',
      check_pda: 'Check PDA',
      restricted: 'Restricted',
    },
    issue_pda: {
      group_recipient_title: 'Send to',
      group_recipient_description: 'Send this PDA directly to someone',
      recipient_label: 'Gateway ID or wallet address',
      group_general_title: 'Add details',
      group_general_description: 'Add the details of the PDA',
      title_label: 'Title',
      description_label: 'Description',
      categories_label: 'Categories',
      expire_date_title: 'Expire date',
      expire_date_description: 'Set a expiration date to claim the PDA',
      expire_date_label: 'Add expire date',
      group_claim_title: 'Add details',
      group_claim_description: 'Add the details of the PDA',
      group_issue_by_title: 'Set the issuer',
      group_issue_by_description: 'The issuer will be issued by',
      issue_by: 'Issue by',
      add_field: 'Add field',
      optional: 'Optional',
      dialog_title: 'Confirmation',
      dialog_text: 'Are you sure you want to exit?',
      dialog_positive: 'Confirm',
      dialog_negative: 'Cancel',
    },
    pdas_table: {
      pda_id: 'PDA ID',
      category: 'Category',
      issuer_id: 'Issuer ID',
      recipient_id: 'Recipient ID',
      issuance_date: 'Issuance date',
      status: 'Status',
      minted: 'Minted',
    },
    issuers_table: {
      issuer_id: 'Issuer ID',
      started: 'Started using',
      issued: 'Issued',
      unique_recipients: 'Unique recipients',
    },
    recipients_table: {
      recipient_id: 'Recipient ID',
      received_pdas: 'Received PDAs',
      minted: 'Minted',
    },
  },
};
