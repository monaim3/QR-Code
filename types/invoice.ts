export type InvoiceStatus = "Paid" | "Failed";

export interface Invoice {
  id: string;
  transactionDate: string;
  plan: string;
  paymentMethod: string;
  amount: string;
  status: InvoiceStatus;
}
