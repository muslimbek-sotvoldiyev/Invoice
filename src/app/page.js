import Invoices from "@/components/Invoices";
import { Sidebar } from "@/components/sidebar";
import React from "react";

const page = () => {
  return (
    <div className="flex">
      {/* <Sidebar   /> */}
      <Invoices />
    </div>
  );
};

export default page;
