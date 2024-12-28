import React from "react";

const MainContent = () => (
  <main className="flex max-w-full flex-auto flex-col pt-20 lg:pt-0">
    <div className="flex-1  px-4 py-8  lg:px-8 lg:py-12 xl:max-w-7xl">
      <h1 className="text-[30px] font-bold mb-2">Clients</h1>
      <p className="text-[#64748B] font-medium text-[14px]">
        Welcome Kayla, everything looks great!
      </p>
    </div>
    <footer className="container mx-auto flex flex-col gap-2 px-4 py-6 text-center text-sm font-medium text-slate-600 md:flex-row md:justify-between md:gap-0 md:text-start lg:px-8 xl:max-w-7xl border-t">
      <p className="text-[#475569] font-semibold">© MyoCompanion</p>
    </footer>
  </main>
);

export default MainContent;
