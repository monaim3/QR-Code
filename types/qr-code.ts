type QRStatus =
  | "Active"
  | "Paused"
  | "Paid"
  | "Failed"
  | "Cancelled"
  | "Expired";

export interface QRCodeItem {
  id: string;
  title: string;
  thumbnail: string;
  shortUrl: string;
  type: string;
  destinationUrl?: string;
  scans: number;
  createdAt: string;
  lastModified?: string;
  status: QRStatus;
}
