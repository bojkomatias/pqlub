"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Navbar({
  dictionary,
}: {
  dictionary: {
    got:string;
  };
}) {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="px-4 md:px-12 xl:px-24 h-20 w-full fixed inset-0 flex items-center z-20 
      "
      >
        <h1 className="mt-8 ml-6 md:ml-0 flex items-center h-full drop-shadow">
          p<span className="text-3xl mt-12 -mx-3 text-green">{"->"}</span>
          qlub
        </h1>
        <span className="flex-grow" />
        <a href="#cta" className="hidden md:block">
          <h2 className="hover:bg-orange border-black text-black py-2 uppercase border-2 transition-bg duration-500 ease-in-out transform hover:text-white hover:border-black hover:lowercase  hover:font-serif bg-green hover:tracking-wider hover:text-2xl transition text-xl cursor-pointer px-4 mr-6 ">
            {dictionary.got}
          </h2>
        </a>
        {/* {isOpen ? (
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="outline-0 group uppercase flex text-white items-center gap-2 text-xl font-light hover:text-orange"
          >
            <span className="hidden md:block">close</span>
            <XMarkIcon className="h-8 w-8 stroke-green group-hover:stroke-orange" />
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="outline-0 group uppercase flex text-white items-center gap-2 text-xl font-light hover:text-orange"
          >
            <span className="hidden md:block">menu</span>
            <Bars3Icon className="h-8 w-8 stroke-green group-hover:stroke-orange" />
          </button>
        )} */}
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
              <Dialog.Panel className="w-full h-full transform transition-all pt-16 bg-black z-30">
                <div className="group w-full flex items-center overflow-hidden h-1/3">
                  <Link
                    href={"/"}
                    onClick={() => setIsOpen(false)}
                    className="whitespace-nowrap text-[10rem] h-full hover:animate-slide tracking-widest flex w-full items-center justify-center"
                  >
                    <span className="bg-white text-navy group-hover:block hidden line-through decoration-4 decoration-orange">
                      HOME
                    </span>
                    <span className="bg-black text-green group-hover:block hidden line-through decoration-4 decoration-orange">
                      HOME
                    </span>
                    <span className="bg-white text-navy group-hover:block hidden line-through decoration-4 decoration-orange ">
                      HOME
                    </span>
                    <span className=" group-hover:text-green group-hover:line-through group-hover:decoration-4 group-hover:decoration-orange text-white">
                      HOME
                    </span>
                    <span className="bg-white text-navy group-hover:block hidden line-through decoration-4 decoration-orange">
                      HOME
                    </span>
                    <span className="bg-black text-green group-hover:block hidden line-through decoration-4 decoration-orange">
                      HOME
                    </span>
                    <span className="bg-white text-navy group-hover:block hidden line-through decoration-4 decoration-orange ">
                      HOME
                    </span>
                  </Link>
                </div>
                <div className="group w-full flex items-center overflow-hidden h-1/3 border-y">
                  <Link
                    href={"/"}
                    onClick={() => setIsOpen(false)}
                    className="whitespace-nowrap text-[10rem] h-full hover:animate-slide tracking-widest flex w-full items-center justify-center"
                  >
                    <span className="bg-white text-navy group-hover:block hidden line-through decoration-4 decoration-orange">
                      PORTFOLIO
                    </span>
                    <span className="bg-black text-green group-hover:block hidden line-through decoration-4 decoration-orange">
                      PORTFOLIO
                    </span>
                    <span className="bg-white text-navy group-hover:block hidden line-through decoration-4 decoration-orange ">
                      PORTFOLIO
                    </span>
                    <span className=" group-hover:text-green group-hover:line-through group-hover:decoration-4 group-hover:decoration-orange text-white">
                      PORTFOLIO
                    </span>
                    <span className="bg-white text-navy group-hover:block hidden line-through decoration-4 decoration-orange">
                      PORTFOLIO
                    </span>
                    <span className="bg-black text-green group-hover:block hidden line-through decoration-4 decoration-orange">
                      PORTFOLIO
                    </span>
                    <span className="bg-white text-navy group-hover:block hidden line-through decoration-4 decoration-orange ">
                      PORTFOLIO
                    </span>
                  </Link>
                </div>
                <div className="group w-full flex items-center overflow-hidden h-1/3">
                  <Link
                    href={"/"}
                    onClick={() => setIsOpen(false)}
                    className="whitespace-nowrap text-[10rem] h-full hover:animate-slide tracking-widest flex w-full items-center justify-center"
                  >
                    <span className="bg-white text-navy group-hover:block hidden line-through decoration-4 decoration-orange">
                      CONTACT
                    </span>
                    <span className="bg-black text-green group-hover:block hidden line-through decoration-4 decoration-orange">
                      CONTACT
                    </span>
                    <span className="bg-white text-navy group-hover:block hidden line-through decoration-4 decoration-orange ">
                      CONTACT
                    </span>
                    <span className=" group-hover:text-green group-hover:line-through group-hover:decoration-4 group-hover:decoration-orange text-white">
                      CONTACT
                    </span>
                    <span className="bg-white text-navy group-hover:block hidden line-through decoration-4 decoration-orange">
                      CONTACT
                    </span>
                    <span className="bg-black text-green group-hover:block hidden line-through decoration-4 decoration-orange">
                      CONTACT
                    </span>
                    <span className="bg-white text-navy group-hover:block hidden line-through decoration-4 decoration-orange ">
                      CONTACT
                    </span>
                  </Link>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
