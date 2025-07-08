export async function sendToYousign(contractId: string) {
  // Simule un appel API Yousign
  return {
    signatureUrl: `https://yousign.mock/signature/${contractId}`,
    status: 'mocked',
  };
} 