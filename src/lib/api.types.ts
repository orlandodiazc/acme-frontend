// Generated using typescript-generator version 3.2.1263 on 2024-02-05 19:14:13.

export interface CustomerFiltered {
  name: string;
  id: string;
  imageUrl: string;
  invoicesCount: number;
  paidInvoicesTotal: number;
  pendingInvoicesTotal: number;
  email: string;
}

export interface CustomerSummary {
  name: string;
  id: string;
}

export interface InvoiceDetails {
  name: string;
  id: string;
  amount: number;
  imageUrl: string;
  email: string;
}

export interface InvoiceFiltered {
  name: string;
  id: string;
  amount: number;
  processingDate: Date;
  imageUrl: string;
  status: Status;
  email: string;
}

export interface InvoiceFilteredPageable {
  invoices: InvoiceFiltered[];
  totalPages: number;
}

export interface InvoiceTotalByStatus {
  paidInvoicesTotal: number;
  pendingInvoicesTotal: number;
}

export interface Overview {
  invoiceCount: number;
  customerCount: number;
  totalPaidInvoices: number;
  totalPendingInvoices: number;
  revenues: Revenue[];
  latestInvoices: InvoiceDetails[];
}

export interface RequestInvoice {
  customerId: string;
  amount: number;
  status: Status;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  imageUrl: string;
  invoices: Invoice[];
}

export interface Invoice {
  id: string;
  customerId: string;
  amount: number;
  status: Status;
  processingDate: Date;
}

export interface Revenue {
  monthName: string;
  revenue: number;
}

export type Status = "pending" | "paid";
