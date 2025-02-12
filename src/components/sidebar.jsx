import { ModeToggle } from "./dark-mode";

export function Sidebar() {
  return (
    <div className="fixed z-[999] md:left-0 md:top-0 md:h-screen md:w-24 w-full h-20 bg-[#373B53] dark:bg-blue1e flex md:flex-col items-center justify-between md:rounded-tr-[20px] md:rounded-br-[20px]">
      <div className="md:w-full md:rounded-tr-[20px] md:rounded-br-[20px] h-20 w-20 bg-purple7c flex items-center justify-center relative overflow-hidden">
        <img src="./logo.png" alt="logo" className="absolute z-10" />
        <div className="absolute bottom-0 w-full h-10 bg-purple92 rounded-tl-3xl"></div>
      </div>

      <div className="h-full md:h-auto md:w-full md:pt-6 flex md:flex-col gap-6 items-center justify-center">
        <ModeToggle />
        <div className="border-l md:border-l-0 md:border-t-[1px] border-[#494E6E] h-full md:h-auto md:w-full flex items-center justify-center">
          <div className="w-10 h-10 md:my-6 mx-6 md:mx-0 rounded-full overflow-hidden">
            <img
              src="./oval.svg"
              alt="User"
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
