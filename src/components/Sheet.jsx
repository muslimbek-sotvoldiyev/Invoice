import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import PaymentTermsSelect from "./PaymentTermsSelect";
import { Trash2 } from "lucide-react";

export const SheetDemo = ({ isOpen, onClose }) => {
  const [items, setItems] = useState([{ name: "", quantity: 1, price: 0 }]);

  const addNewItem = () => {
    setItems([...items, { name: "", quantity: 1, price: 0 }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formValues = Object.fromEntries(formData.entries());
    console.log("Form values:", formValues);
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent
        side="left"
        className="w-full md:ml-24 sm:max-w-[617px] p-0 max-md:pt-24 "
      >
        <form onSubmit={handleSubmit} className="h-full flex flex-col">
          <div className="relative p-4 sm:p-6 text-white">
            <SheetHeader className="text-left">
              <SheetTitle className="text-black0c dark:text-whiteF8 text-xl sm:text-2xl font-bold">
                New Invoice
              </SheetTitle>
            </SheetHeader>
            <Button
              color="gray"
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 items-center"
            >
              ✖
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 sm:space-y-6">
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-xs sm:text-sm font-bold text-purple7c">
                Bill From
              </h3>
              <div className="space-y-2">
                <Label
                  htmlFor="streetFrom"
                  className="text-xs sm:text-sm text-gray7e font-normal dark:text-grayDF"
                >
                  Street Address
                </Label>
                <Input
                  id="streetFrom"
                  name="streetFrom"
                  className="dark:bg-blue25 text-sm"
                  required
                />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="cityFrom"
                    className="text-xs sm:text-sm text-gray7e font-normal dark:text-grayDF"
                  >
                    City
                  </Label>
                  <Input
                    id="cityFrom"
                    name="cityFrom"
                    className="dark:bg-blue25 text-sm"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="postCodeFrom"
                    className="text-xs sm:text-sm text-gray7e font-normal dark:text-grayDF"
                  >
                    Post Code
                  </Label>
                  <Input
                    id="postCodeFrom"
                    name="postCodeFrom"
                    className="dark:bg-blue25 text-sm"
                    required
                  />
                </div>
                <div className="space-y-2 col-span-2 sm:col-span-1">
                  <Label
                    htmlFor="countryFrom"
                    className="text-xs sm:text-sm text-gray7e font-normal dark:text-grayDF"
                  >
                    Country
                  </Label>
                  <Input
                    id="countryFrom"
                    name="countryFrom"
                    className="dark:bg-blue25 text-sm"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-xs sm:text-sm font-bold text-purple7c">
                Bill To
              </h3>
              <div className="space-y-2">
                <Label
                  htmlFor="clientName"
                  className="text-xs sm:text-sm text-gray7e font-normal dark:text-grayDF"
                >
                  Client's Name
                </Label>
                <Input
                  id="clientName"
                  name="clientName"
                  className="dark:bg-blue25 text-sm"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="clientEmail"
                  className="text-xs sm:text-sm text-gray7e font-normal dark:text-grayDF"
                >
                  Client's Email
                </Label>
                <Input
                  id="clientEmail"
                  name="clientEmail"
                  type="email"
                  className="dark:bg-blue25 text-sm"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="streetTo"
                  className="text-xs sm:text-sm text-gray7e font-normal dark:text-grayDF"
                >
                  Street Address
                </Label>
                <Input
                  id="streetTo"
                  name="streetTo"
                  className="dark:bg-blue25 text-sm"
                  required
                />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="cityTo"
                    className="text-xs sm:text-sm text-gray7e font-normal dark:text-grayDF"
                  >
                    City
                  </Label>
                  <Input
                    id="cityTo"
                    name="cityTo"
                    className="dark:bg-blue25 text-sm"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="postCodeTo"
                    className="text-xs sm:text-sm text-gray7e font-normal dark:text-grayDF"
                  >
                    Post Code
                  </Label>
                  <Input
                    id="postCodeTo"
                    name="postCodeTo"
                    className="dark:bg-blue25 text-sm"
                    required
                  />
                </div>
                <div className="space-y-2 col-span-2 sm:col-span-1">
                  <Label
                    htmlFor="countryTo"
                    className="text-xs sm:text-sm text-gray7e font-normal dark:text-grayDF"
                  >
                    Country
                  </Label>
                  <Input
                    id="countryTo"
                    name="countryTo"
                    className="dark:bg-blue25 text-sm"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="invoiceDate"
                    className="text-xs sm:text-sm text-gray7e font-normal dark:text-grayDF"
                  >
                    Invoice Date
                  </Label>
                  <Input
                    id="invoiceDate"
                    name="invoiceDate"
                    type="date"
                    className="dark:bg-blue25 text-sm"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <PaymentTermsSelect />
                </div>
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="projectDescription"
                  className="text-xs sm:text-sm text-gray7e font-normal dark:text-grayDF"
                >
                  Project Description
                </Label>
                <Input
                  id="projectDescription"
                  name="projectDescription"
                  className="dark:bg-blue25 text-sm"
                  required
                />
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-base sm:text-lg font-bold text-[#777F98]">
                Item List
              </h3>
              {items.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-8 sm:grid-cols-12 gap-2 sm:gap-4"
                >
                  <div className="col-span-8 sm:col-span-4 space-y-2">
                    <Label
                      htmlFor={`item-name-${index}`}
                      className="text-xs sm:text-sm text-gray7e font-normal dark:text-grayDF"
                    >
                      Item Name
                    </Label>
                    <Input
                      placeholder="Item Name"
                      name={`item-name-${index}`}
                      className="dark:bg-blue25 text-sm"
                      required
                    />
                  </div>
                  <div className="col-span-2 space-y-2">
                    <Label
                      htmlFor={`item-qty-${index}`}
                      className="text-xs sm:text-sm text-gray7e font-normal dark:text-grayDF"
                    >
                      Qty.
                    </Label>
                    <Input
                      type="number"
                      placeholder="Qty"
                      name={`item-qty-${index}`}
                      className="dark:bg-blue25 text-sm"
                      required
                    />
                  </div>
                  <div className="col-span-3 space-y-2">
                    <Label
                      htmlFor={`item-price-${index}`}
                      className="text-xs sm:text-sm text-gray7e font-normal dark:text-grayDF"
                    >
                      Price
                    </Label>
                    <Input
                      type="number"
                      placeholder="Price"
                      name={`item-price-${index}`}
                      className="dark:bg-blue25 text-sm"
                      required
                    />
                  </div>
                  <div className="col-span-2 space-y-2 hidden sm:block">
                    <Label
                      htmlFor={`item-total-${index}`}
                      className="text-xs sm:text-sm text-gray7e font-normal dark:text-grayDF"
                    >
                      Total
                    </Label>
                    <p className="py-2 text-sm text-gray88 dark:text-grayDF">
                      £{(item.quantity * item.price).toFixed(2)}
                    </p>
                  </div>
                  <div className="col-span-1 flex items-center justify-center mt-8">
                    <Trash2 className="text-[#888EB0] w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                className="w-full rounded-3xl py-3 sm:py-4 text-sm text-gray7e bg-[#F9FAFE] dark:text-grayDF dark:bg-blue25 hover:bg-grayDF hover:text-gray7e dark:hover:bg-blue1e dark:hover:text-grayDF"
                onClick={addNewItem}
              >
                + Add New Item
              </Button>
            </div>
          </div>

          <div className="mt-auto p-4 sm:p-6 flex flex-col sm:flex-row justify-between gap-2 sm:gap-0 bg-white dark:bg-blue14">
            <Button
              type="button"
              onClick={onClose}
              className="bg-[#F9FAFE] hover:bg-gray7e hover:text-white rounded-3xl text-sm text-[#7E88C3] py-3 sm:py-4 px-4 sm:px-6 w-full sm:w-auto"
            >
              Discard
            </Button>
            <div className="flex gap-2 w-full sm:w-auto">
              <Button
                type="button"
                className="flex-1 sm:flex-none bg-[#373B53] hover:bg-blue25 rounded-3xl text-sm text-[#888EB0] dark:text-[#DFE3FA] py-3 sm:py-4 px-4"
              >
                Save as Draft
              </Button>
              <Button
                type="submit"
                className="flex-1 sm:flex-none bg-purple7c hover:bg-purple92 rounded-3xl text-sm text-white py-3 sm:py-4 px-4"
              >
                Save & Send
              </Button>
            </div>
          </div>
        </form>
      </SheetContent>
    </Sheet>
  );
};
