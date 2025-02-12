import { ChevronRight } from "lucide-react";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";

export default function MyButton({ text, variant }) {
  let finalResult = {};
  switch (variant) {
    case "edit":
      finalResult = {
        className: "!bg-orange !text-white !hover:bg-light-orange !border-none",
      };
      break;
    case "delete":
      finalResult = {
        className:
          "!bg-transparent !text-black !hover:bg-black !hover:text-white !border !border-black",
      };
      break;
    case "paid":
      finalResult = {
        className:
          "!bg-transparent !text-black-50 !hover:text-orange !hover:bg-transparent !border-none",
      };
      break;
  }

  return (
    <>
      {as === "button" ? (
        <Button
          className={`rounded-none shadow-none min-w-40 uppercase ${finalResult.className}`}
        >
          {text} {finalResult.icon}
        </Button>
      ) : (
        <Link
          href={href}
          className={`${buttonVariants({
            variant: "default",
          })} rounded-none shadow-none min-w-40 uppercase ${
            finalResult.className
          }`}
        >
          {text} {finalResult.icon}
        </Link>
      )}
    </>
  );
}
