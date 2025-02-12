"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useParams } from "next/navigation";
import { data } from "@/data";
import StatusBadge from "@/components/Status";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function InvoicePage() {
  const params = useParams();
  const invoice = data.find((inv) => inv.id === params.id);

  if (!invoice) return <div>Invoice not found</div>;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(amount);
  };

  const handleDelete = () => {
    // Add your delete logic here
    console.log("Deleting invoice:", invoice.id);
  };

  return (
    <div className="min-h-screen w-full bg-background dark:bg-gray-900">
      <main className="w-full flex flex-col px-4 sm:px-6 lg:px-8 py-6 sm:py-8 max-md:pt-24">
        <div className="mx-auto w-full max-w-[1280px] max-[1497px]:pl-20 max-md:pl-0">
          <Link href="/" className="inline-block">
            <Button
              variant="ghost"
              className="mb-6 sm:mb-8 text-black0c flex items-center dark:text-grayDF text-sm"
            >
              <ChevronLeft className="text-purple7c h-4 w-4" />
              Go back
            </Button>
          </Link>

          <Card className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 bg-white dark:bg-blue1e mb-4 sm:mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-8">
              <div className="flex items-center gap-4">
                <span className="text-gray88 dark:text-grayDF text-sm">
                  Status
                </span>
                <StatusBadge variant={invoice.status} text={invoice.status} />
              </div>
              <div className="fixed sm:relative bottom-0 left-0 right-0 p-4 sm:p-0 bg-white dark:bg-blue1e sm:bg-transparent">
                <div className="flex gap-2 flex-wrap sm:flex-nowrap max-w-[1280px] mx-auto">
                  <Button
                    variant="secondary"
                    className="flex-1 sm:flex-none text-gray88 bg-slate-600 rounded-full hover:bg-white text-xs sm:text-sm"
                  >
                    Edit
                  </Button>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button
                        variant="destructive"
                        className="flex-1 sm:flex-none rounded-full text-xs sm:text-sm hover:bg-[#FF9797]"
                      >
                        Delete
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Confirm Deletion</AlertDialogTitle>
                        <AlertDialogDescription>
                          Are you sure you want to delete invoice #{invoice.id}?
                          This action cannot be undone.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel className="rounded-full">
                          Cancel
                        </AlertDialogCancel>
                        <AlertDialogAction
                          onClick={handleDelete}
                          className="bg-red-500 hover:bg-red-600 rounded-full"
                        >
                          Delete
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>

                  <Button className="flex-1 sm:flex-none bg-purple7c hover:bg-[#9277FF] rounded-full text-xs sm:text-sm">
                    Mark as Paid
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-4 sm:p-6 lg:p-8 bg-white dark:bg-blue1e mb-20 sm:mb-0">
            <div className="flex flex-col sm:flex-row justify-between gap-6 sm:gap-8 mb-6 sm:mb-8">
              <div>
                <h1 className="text-lg sm:text-xl font-bold mb-1">
                  #{invoice.id}
                </h1>
                <p className="text-gray88 dark:text-gray-400 text-sm">
                  {invoice.description}
                </p>
              </div>
              <div className="text-left sm:text-right text-gray88 dark:text-gray-400 text-sm">
                <p>{invoice.senderAddress.street}</p>
                <p>{invoice.senderAddress.city}</p>
                <p>{invoice.senderAddress.postCode}</p>
                <p>{invoice.senderAddress.country}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8">
              <div className="col-span-1">
                <div className="mb-6">
                  <p className="text-gray88 dark:text-gray-400 mb-2 text-sm">
                    Invoice Date
                  </p>
                  <p className="font-bold text-sm sm:text-base">
                    {formatDate(invoice.createdAt)}
                  </p>
                </div>
                <div>
                  <p className="text-gray88 dark:text-gray-400 mb-2 text-sm">
                    Payment Due
                  </p>
                  <p className="font-bold text-sm sm:text-base">
                    {formatDate(invoice.paymentDue)}
                  </p>
                </div>
              </div>

              <div className="col-span-1">
                <p className="text-gray88 dark:text-gray-400 mb-2 text-sm">
                  Bill To
                </p>
                <p className="font-bold mb-2 text-sm sm:text-base">
                  {invoice.clientName}
                </p>
                <div className="text-gray88 dark:text-gray-400 text-sm">
                  <p>{invoice.clientAddress.street}</p>
                  <p>{invoice.clientAddress.city}</p>
                  <p>{invoice.clientAddress.postCode}</p>
                  <p>{invoice.clientAddress.country}</p>
                </div>
              </div>

              <div className="col-span-2 lg:col-span-1">
                <p className="text-gray88 dark:text-gray-400 mb-2 text-sm">
                  Sent to
                </p>
                <p className="font-bold text-sm sm:text-base">
                  {invoice.clientEmail}
                </p>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 sm:p-6">
              <div className="hidden sm:block overflow-x-auto">
                <table className="w-full mb-4 min-w-[500px]">
                  <thead>
                    <tr className="text-gray88 dark:text-gray-400 text-sm">
                      <th className="text-left pb-4">Item Name</th>
                      <th className="text-center pb-4">QTY.</th>
                      <th className="text-right pb-4">Price</th>
                      <th className="text-right pb-4">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoice.items.map((item, index) => (
                      <tr key={index} className="font-bold text-sm">
                        <td className="py-4">{item.name}</td>
                        <td className="text-center">{item.quantity}</td>
                        <td className="text-right">
                          {formatCurrency(item.price)}
                        </td>
                        <td className="text-right">
                          {formatCurrency(item.total)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="sm:hidden space-y-4 mb-4">
                {invoice.items.map((item, index) => (
                  <div key={index} className="flex flex-col">
                    <div className="flex justify-between mb-2">
                      <p className="font-bold text-sm">{item.name}</p>
                      <p className="font-bold text-sm">
                        {formatCurrency(item.total)}
                      </p>
                    </div>
                    <div className="text-gray88 dark:text-gray-400 text-sm">
                      {item.quantity} x {formatCurrency(item.price)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gray-900 text-white p-4 sm:p-6 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Amount Due</span>
                  <span className="text-xl sm:text-2xl font-bold">
                    {formatCurrency(invoice.total)}
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
