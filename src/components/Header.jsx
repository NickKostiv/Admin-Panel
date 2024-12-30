import React from "react";

const Header = ({ toggleSidebar }) => (
  <header className="fixed end-0 start-0 top-0 z-30 flex h-20 flex-none items-center bg-white shadow-sm lg:hidden">
    <div className="container mx-auto flex justify-between px-4 lg:px-8 xl:max-w-7xl">
      <button
        onClick={toggleSidebar}
        className="inline-flex items-center justify-center gap-2 rounded border border-slate-300 bg-white px-2 py-1.5 font-semibold leading-6 text-slate-800 shadow-sm hover:border-slate-300 hover:bg-slate-100 hover:text-slate-800 hover:shadow focus:outline-none focus:ring focus:ring-slate-500/25 active:border-white active:bg-white active:shadow-none">
        <svg
          class="hi-solid hi-menu-alt-1 inline-block h-5 w-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"></path>
        </svg>
      </button>
      <h1 className="text-xl font-bold text-black">
        <a
          href="javascript:void(0)"
          className="inline-flex items-center gap-2 text-lg font-bold tracking-wide text-slate-800 transition hover:opacity-75 active:opacity-100">
          <svg
            className="bi bi-window-sidebar inline-block h-4 w-4 text-blue-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16">
            <path d="M2.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"></path>
            <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v2H1V3a1 1 0 0 1 1-1h12zM1 13V6h4v8H2a1 1 0 0 1-1-1zm5 1V6h9v7a1 1 0 0 1-1 1H6z"></path>
          </svg>
          <span>
            Myo
            <span className="font-normal text-black text-blue-600">
              Companion
            </span>
          </span>
        </a>
      </h1>
      <button className="inline-flex items-center justify-center gap-2 rounded border border-slate-300 bg-white px-2 py-1.5 font-semibold leading-6 text-slate-800 shadow-sm hover:border-slate-300 hover:bg-slate-100 hover:text-slate-800 hover:shadow focus:outline-none focus:ring focus:ring-slate-500/25 active:border-white active:bg-white active:shadow-none">
        <svg
          class="hi-solid hi-user-circle inline-block h-5 w-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
            clip-rule="evenodd"></path>
        </svg>
      </button>
    </div>
  </header>
);

export default Header;
