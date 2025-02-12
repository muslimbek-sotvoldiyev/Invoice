"use client";
import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, ChevronRight, Plus, Check } from "lucide-react";
import { data } from "@/data";
import StatusBadge from "./Status";
import { SheetDemo } from "./Sheet";
import Link from "next/link";

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

const InvoiceCard = ({ invoice }) => {
  const MobileView = () => (
    <div className="block sm:hidden">
      <div className="flex justify-between items-start mb-4">
        <span className="text-gray7e font-bold text-xs">
          #<span className="text-black0c dark:text-whiteF8">{invoice.id}</span>
        </span>
        <span className="text-[#858BB2] dark:text-whiteF8 text-xs">
          {invoice.clientName}
        </span>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <span className="text-gray88 dark:text-grayDF text-xs">
            Due {formatDate(invoice.paymentDue)}
          </span>
          <span className="text-base font-bold dark:text-whiteF8 text-black0c">
            {formatCurrency(invoice.total)}
          </span>
        </div>
        <StatusBadge
          variant={invoice.status}
          text={invoice.status}
          className="min-w-[90px] text-center text-xs"
        />
      </div>
    </div>
  );

  const DesktopView = () => (
    <div className="hidden sm:grid sm:grid-cols-5 sm:items-center sm:gap-4">
      <span className="text-gray7e font-bold text-sm lg:text-base">
        #<span className="text-black0c dark:text-whiteF8">{invoice.id}</span>
      </span>
      <span className="text-gray88 dark:text-grayDF text-sm lg:text-base">
        Due {formatDate(invoice.paymentDue)}
      </span>
      <span className="text-[#858BB2] dark:text-whiteF8 text-sm lg:text-base">
        {invoice.clientName}
      </span>
      <span className="text-lg lg:text-xl font-bold dark:text-whiteF8 text-black0c">
        {formatCurrency(invoice.total)}
      </span>
      <div className="flex items-center justify-end gap-4">
        <StatusBadge
          variant={invoice.status}
          text={invoice.status}
          className="w-20 lg:w-24 text-center text-sm"
        />
        <ChevronRight className="text-purple7c h-4 w-4 lg:h-5 lg:w-5" />
      </div>
    </div>
  );

  return (
    <Card className="p-3 sm:p-4 lg:p-6 bg-white dark:bg-blue1e hover:border-gray7e cursor-pointer transition-all">
      <Link href={`/invoice/${invoice.id}`}>
        <MobileView />
        <DesktopView />
      </Link>
    </Card>
  );
};

// Main Component
export default function Invoices() {
  const [isNewInvoiceOpen, setIsNewInvoiceOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedStatuses, setSelectedStatuses] = useState([]);

  const statuses = [
    { value: "paid", label: "Paid" },
    { value: "pending", label: "Pending" },
    { value: "draft", label: "Draft" },
  ];

  const filteredInvoices = useMemo(() => {
    if (selectedStatuses.length === 0) return data;
    return data.filter((invoice) => selectedStatuses.includes(invoice.status));
  }, [selectedStatuses]);

  const handleStatusClick = (status) => {
    setSelectedStatuses((prev) =>
      prev.includes(status.value)
        ? prev.filter((s) => s !== status.value)
        : [...prev, status.value]
    );
  };

  return (
    <div className="min-h-screen w-full bg-background flex">
      <SheetDemo
        isOpen={isNewInvoiceOpen}
        onClose={() => setIsNewInvoiceOpen(false)}
      />
      <main className="w-full lg:pl-20 max-lg:pl-20 max-md:pl-0 pl-4 flex flex-col max-h-screen max-md:pt-24">
        <div className="p-3 md:p-6 lg:p-8 flex-1 flex flex-col max-h-screen">
          <div className="w-full max-w-[1280px] mx-auto flex-1 flex flex-col overflow-hidden">

            <div className="flex items-center lg:gap-72 justify-between mb-4 sticky top-0 bg-background z-10 p-4">
              <div>
                <h1 className="text-4xl font-bold mb-2 text-black0c dark:text-white">
                  Invoices
                </h1>
                <p className="text-gray88 dark:text-grayDF">
                  {filteredInvoices.length
                    ? `There are ${filteredInvoices.length} total invoices`
                    : "No invoices"}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <DropdownMenu
                  open={isFilterOpen}
                  onOpenChange={setIsFilterOpen}
                >
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="flex items-center space-x-2 text-gray-800 hover:bg-grayDF dark:hover:bg-blue25"
                    >
                      <span className="dark:text-whiteF8 text-sm font-bold">
                        Filter by status
                      </span>
                      <ChevronDown className="ml-2 h-4 w-4 text-purple7c" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    className="min-w-[150px] bg-whiteF8 dark:bg-blue25 rounded-md shadow-lg"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {statuses.map((status) => (
                      <DropdownMenuItem
                        key={status.value}
                        onSelect={(e) => {
                          e.preventDefault();
                          handleStatusClick(status);
                        }}
                        className="flex items-center space-x-3 px-4 py-2 text-sm hover:bg-grayDF dark:hover:bg-blue25 cursor-pointer"
                      >
                        <div className="flex items-center justify-center w-4 h-4 hover:border rounded-[3px] bg-grayDF dark:bg-blue1e hover:border-purple7c">
                          {selectedStatuses.includes(status.value) && (
                            <Check className="bg-purple7c w-full rounded-[2px] h-full text-whiteF8" />
                          )}
                        </div>
                        <span>{status.label}</span>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>

                <Button
                  onClick={() => setIsNewInvoiceOpen(true)}
                  className="bg-purple7c hover:bg-purple92 font-bold text-white rounded-[24px] h-12 px-2 flex items-center justify-between"
                >
                  <div className="w-8 h-8 rounded-full bg-white text-purple7c flex items-center justify-center">
                    <Plus />
                  </div>
                  <span className="me-2">New Invoice</span>
                </Button>
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4 overflow-y-auto flex-1">
              {filteredInvoices.map((invoice) => (
                <InvoiceCard key={invoice.id} invoice={invoice} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
