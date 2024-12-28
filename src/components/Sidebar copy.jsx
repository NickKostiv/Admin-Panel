import React, { useState } from "react";

const Sidebar = ({ isOpen, toggleSidebar }) => (
  <div
    className={`fixed top-0 left-0 h-full bg-slate-100 shadow-md transform transition-transform duration-500 ease-out${
      isOpen ? "translate-x-0" : "-translate-x-full"
    } shadow-md lg:relative lg:translate-x-0 lg:w-64 w-[85%] sm:w-[70%] md:w-[35%]`}>
    <div className="flex flex-col h-full">
      {/* Sidebar Header */}
      <div className="flex h-20 w-full items-center justify-between px-8">
        {/* Brand */}
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
        {/* Close Sidebar Button */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center text-slate-400 hover:text-slate-600 active:text-slate-400 lg:hidden"
          onClick={toggleSidebar}>
          <svg
            className="hi-solid hi-x -mx-1 inline-block h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"></path>
          </svg>
        </button>
      </div>
      {/* Main Navigation */}
      <div className="w-full grow space-y-3 p-4">
        <a
          href="javascript:void(0)"
          className="flex items-center gap-3 rounded-lg bg-white px-4 py-2.5 font-semibold text-slate-600 shadow-sm shadow-slate-300/50">
          <svg
            className="bi bi-people-fill inline-block h-4 w-4 text-slate-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16">
            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
            <path
              fillRule="evenodd"
              d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"></path>
            <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"></path>
          </svg>
          <span>Clients</span>
        </a>
        <a
          href="javascript:void(0)"
          className="flex items-center gap-3 rounded-lg px-4 py-2.5 font-semibold text-slate-600 hover:bg-white hover:shadow-sm hover:shadow-slate-300/50 active:bg-white/75 active:text-slate-800 active:shadow-slate-300/10">
          <svg
            className="bi bi-briefcase-fill inline-block h-4 w-4 text-slate-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16">
            <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z"></path>
            <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z"></path>
          </svg>
          <span>Videos</span>
        </a>
      </div>
      {/* Sub Navigation */}
      <div className="w-full flex-none space-y-3 p-4">
        <a
          href="javascript:void(0)"
          className="flex items-center gap-3 rounded-lg px-4 py-2.5 font-semibold text-slate-600 hover:bg-white hover:shadow-sm hover:shadow-slate-300/50 active:bg-white/75 active:text-slate-800 active:shadow-slate-300/10">
          <svg
            className="bi bi-gear-fill inline-block h-4 w-4 text-slate-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16">
            <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"></path>
          </svg>
          <span>Settings</span>
        </a>
        <a
          href="javascript:void(0)"
          className="flex items-center gap-3 rounded-lg px-4 py-2.5 font-semibold text-slate-600 hover:bg-white hover:shadow-sm hover:shadow-slate-300/50 active:bg-white/75 active:text-slate-800 active:shadow-slate-300/10">
          <svg
            className="bi bi-lock-fill inline-block h-4 w-4 text-slate-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16">
            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
          </svg>
          <span>Logout</span>
        </a>
      </div>
    </div>
  </div>
);

export default Sidebar;
