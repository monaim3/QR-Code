import Circle from "@/components/icons/circle";
import Download from "@/components/icons/download";
import UnfoldMore from "@/components/icons/unfold-more";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { invoices } from "@/lib/data";
import { getStatusStyles } from "@/lib/utils";

export default function TransactionTable() {
  return (
    <div className="rounded-[var(--Corner-Radius-10)] bg-white shadow-[0_1px_8px_0_rgba(63,72,103,0.16)] w-full">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent border-b-[var(--boarder-grey-50)]">
            <TableHead className="p-0">
              <div className="px-6 py-4 flex items-center gap-2 cursor-pointer justify-start">
                <span className="text-[var(--Grey)] text-[14px] leading-[22px]">
                  Invoice #
                </span>
                <UnfoldMore className="text-[var(--Grey)]" />
              </div>
            </TableHead>
            <TableHead className="p-0">
              <div className="px-6 py-4 flex items-center gap-2 cursor-pointer justify-start">
                <span className="text-[var(--Grey)] text-[14px] leading-[22px]">
                  Transaction date
                </span>
                <UnfoldMore className="text-[var(--Grey)]" />
              </div>
            </TableHead>
            <TableHead className="p-0">
              <div className="px-6 py-4 flex items-center gap-2 cursor-pointer">
                <span className="text-[var(--Grey)] text-[14px] leading-[22px] justify-start">
                  Plan
                </span>
                <UnfoldMore className="text-[var(--Grey)]" />
              </div>
            </TableHead>
            <TableHead className="p-0">
              <div className="px-6 py-4 flex items-center gap-2 cursor-pointer justify-start">
                <span className="text-[var(--Grey)] text-[14px] leading-[22px]">
                  Payment method
                </span>
                <UnfoldMore className="text-[var(--Grey)]" />
              </div>
            </TableHead>
            <TableHead className="p-0">
              <div className="px-6 py-4 flex items-center gap-2 cursor-pointer justify-start">
                <span className="text-[var(--Grey)] text-[14px] leading-[22px]">
                  Amount
                </span>
                <UnfoldMore className="text-[var(--Grey)]" />
              </div>
            </TableHead>
            <TableHead className="p-0">
              <div className="px-6 py-4 flex items-center gap-2 cursor-pointer">
                <span className="text-[var(--Grey)] text-[14px] leading-[22px] justify-start">
                  Status
                </span>
                <UnfoldMore className="text-[var(--Grey)]" />
              </div>
            </TableHead>
            <TableHead className="text-right p-0"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice, index) => (
            <TableRow
              key={index}
              className="text-[var(--Black)] border-b-[var(--boarder-grey-50)] text-[14px] leading-[22px]"
            >
              <TableCell className="p-6">{invoice.id}</TableCell>
              <TableCell className="p-6">{invoice.transactionDate}</TableCell>
              <TableCell className="p-6">{invoice.plan}</TableCell>
              <TableCell className="p-6">{invoice.paymentMethod}</TableCell>
              <TableCell className="p-6">{invoice.amount}</TableCell>
              <TableCell className="p-6">
                <div className="flex items-center gap-2">
                  <Circle className={getStatusStyles(invoice.status)} />
                  <span
                    className={`text-[14px] leading-[22px] font-medium ${getStatusStyles(invoice.status)}`}
                  >
                    {invoice.status}
                  </span>
                </div>
              </TableCell>
              <TableCell className="w-[217px] px-6 py-4">
                {invoice.status === "Paid" ? (
                  <button className="flex h-10 px-4 py-2 justify-center items-center gap-2 rounded-[var(--Corner-Radius-10)] bg-white border border-[var(--Boarder-Grey)] shadow-[0_1px_8px_0_rgba(63,72,103,0.16)] text-[var(--Dark-gray)] text-[14px] leading-[22px] ml-auto">
                    <Download className="text-[var(--Dark-gray)]" />
                    Download invoice
                  </button>
                ) : (
                  <p className="text-[var(--Black)] text-[14px] leading-[22px] flex-1 text-center w-full">
                    -
                  </p>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
