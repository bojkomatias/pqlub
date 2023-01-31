"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";

export default function Navbar() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="h-[8vh] w-full fixed left-0 top-0 flex items-center z-20
      "
      >
        <span className="text-2xl font-bold px-24 flex items-center h-full flex-grow">
          PQCLUB
        </span>

        <button type="button" onClick={() => setIsOpen(true)} className="m-12">
          <Bars3Icon className="h-6 w-6 stroke-white" />
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpen(false)}
        >
          <div className="fixed inset-0 overflow-hidden">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="-translate-y-full"
              enterTo="translate-y-0"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full h-screen transform transition-all bg-black z-30">
                <div className="w-full flex items-center overflow-hidden h-1/3">
                  <div className="group whitespace-nowrap text-[10rem] flex items-center h-full line-through hover:animate-slide font-bold tracking-widest hover:bg-white/50">
                    <span className="">HOME</span>
                    <span className="font-serif group-hover:visible invisible text-slate-900">
                      HOME
                    </span>
                    <span className="group-hover:visible invisible">HOME</span>
                    <span className="font-serif group-hover:visible invisible text-slate-900">
                      HOME
                    </span>
                    <span className="group-hover:visible invisible">HOME</span>
                    <span className="font-serif group-hover:visible invisible text-slate-900">
                      HOME
                    </span>
                    <span className="group-hover:visible invisible">HOME</span>
                    <span className="font-serif group-hover:visible invisible text-slate-900">
                      HOME
                    </span>
                    <span className="group-hover:visible invisible">HOME</span>
                    <span className="font-serif group-hover:visible invisible text-slate-900">
                      HOME
                    </span>
                  </div>
                </div>
                <div className="text-8xl h-1/3 flex items-center border-y-2 justify-center font-bold">
                  PORTFOLIO
                </div>
                <div className="text-8xl h-1/3 flex items-center  justify-center font-bold">
                  CONTACT
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
