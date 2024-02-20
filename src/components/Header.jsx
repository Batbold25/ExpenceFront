import React, { useState } from "react";
import { MainLogo } from "./Icons/MainLogo";
import { Plus } from "./Icons/Plus";
import Link from "next/link";
import { Modal } from "./Modal";

export const Header = () => {
  const [showModal, setShowModal] = useState(false);
  console.log("main yoo");

  const addModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="w-full px-32 py-4 flex place-content-between static">
      <div className="flex gap-6 items-center">
        <MainLogo width="28" hieght="27" />
        <Link href={"./main"}>
          <h1 className="text-base font-semibold">Dashboard</h1>
        </Link>
        <Link href={"./record"}>
          <p className="text-slate-900 text-base">Records</p>
        </Link>
      </div>
      <div className="flex gap-6">
        <button className="btn bg-blue-600 text-white" onClick={addModal}>
          <Plus fill="white" />
          Record
        </button>
        <img src="./busgui.png" alt="" />
      </div>
      {showModal && <Modal closeModal={closeModal} />}
    </div>
  );
};

<div className="flex gap-5">
  <div className=" rounded-xl bg-white w-2/4 h-80">
    <div className="px-6 py-4 flex items-center gap-2 border-b-2">
      <h1 className=" text-slate-900 text-base font-semibold">
        Income - Expense
      </h1>
    </div>

    <div className="px-6 py-8 flex flex-row gap-4">
      <div className="flex gap-5 flex-col text-zinc-500 text-sm">
        <h1>3’000’000</h1>
        <h1>2’000’000</h1>
        <h1>1’000’000</h1>
        <h1>0</h1>
      </div>

      <div className=" flex gap-10">
        <div className="flex flex-col items-center">
          <div className="flex items-end">
            <div className="w-4 rounded-tl-[1000px] rounded-tr-[1000px] h-32 bg-lime-500"></div>
            <div className="w-4 h-24 bg-orange-500 rounded-tl-[1000px] rounded-tr-[1000px]"></div>
          </div>
          <h1>Jul</h1>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-end">
            <div className="w-4 rounded-tl-[1000px] rounded-tr-[1000px] h-32 bg-lime-500"></div>
            <div className="w-4 h-24 bg-orange-500 rounded-tl-[1000px] rounded-tr-[1000px]"></div>
          </div>
          <h1>Jul</h1>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-end">
            <div className="w-4 rounded-tl-[1000px] rounded-tr-[1000px] h-32 bg-lime-500"></div>
            <div className="w-4 h-24 bg-orange-500 rounded-tl-[1000px] rounded-tr-[1000px]"></div>
          </div>
          <h1>Jul</h1>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-end">
            <div className="w-4 rounded-tl-[1000px] rounded-tr-[1000px] h-32 bg-lime-500"></div>
            <div className="w-4 h-24 bg-orange-500 rounded-tl-[1000px] rounded-tr-[1000px]"></div>
          </div>
          <h1>Jul</h1>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-end">
            <div className="w-4 rounded-tl-[1000px] rounded-tr-[1000px] h-32 bg-lime-500"></div>
            <div className="w-4 h-24 bg-orange-500 rounded-tl-[1000px] rounded-tr-[1000px]"></div>
          </div>
          <h1>Jul</h1>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-end">
            <div className="w-4 rounded-tl-[1000px] rounded-tr-[1000px] h-32 bg-lime-500"></div>
            <div className="w-4 h-24 bg-orange-500 rounded-tl-[1000px] rounded-tr-[1000px]"></div>
          </div>
          <h1>Jul</h1>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-end">
            <div className="w-4 rounded-tl-[1000px] rounded-tr-[1000px] h-32 bg-lime-500"></div>
            <div className="w-4 h-24 bg-orange-500 rounded-tl-[1000px] rounded-tr-[1000px]"></div>
          </div>
          <h1>Jul</h1>
        </div>
      </div>
    </div>
  </div>
  <div className=" rounded-xl bg-white w-2/4 h-80">
    <div className="px-6 py-4 flex items-center gap-2 border-b-2 place-content-between ">
      <h1 className=" text-slate-900 text-base font-semibold">
        Income - Expense
      </h1>
      <h1 className="text-gray-500 text-base">Jun 1 - Nov 30</h1>
    </div>

    <div className="px-6 py-8 flex flex-row gap-4">
      <div className="flex gap-5 flex-col text-zinc-500 text-sm">
        <h1>3’000’000</h1>
        <h1>2’000’000</h1>
        <h1>1’000’000</h1>
        <h1>0</h1>
      </div>

      <div className=" flex gap-10">
        <div className="flex flex-col items-center">
          <div className="flex items-end">
            <div className="w-4 rounded-tl-[1000px] rounded-tr-[1000px] h-32 bg-lime-500"></div>
            <div className="w-4 h-24 bg-orange-500 rounded-tl-[1000px] rounded-tr-[1000px]"></div>
          </div>
          <h1>Jul</h1>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-end">
            <div className="w-4 rounded-tl-[1000px] rounded-tr-[1000px] h-32 bg-lime-500"></div>
            <div className="w-4 h-24 bg-orange-500 rounded-tl-[1000px] rounded-tr-[1000px]"></div>
          </div>
          <h1>Jul</h1>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-end">
            <div className="w-4 rounded-tl-[1000px] rounded-tr-[1000px] h-32 bg-lime-500"></div>
            <div className="w-4 h-24 bg-orange-500 rounded-tl-[1000px] rounded-tr-[1000px]"></div>
          </div>
          <h1>Jul</h1>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-end">
            <div className="w-4 rounded-tl-[1000px] rounded-tr-[1000px] h-32 bg-lime-500"></div>
            <div className="w-4 h-24 bg-orange-500 rounded-tl-[1000px] rounded-tr-[1000px]"></div>
          </div>
          <h1>Jul</h1>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-end">
            <div className="w-4 rounded-tl-[1000px] rounded-tr-[1000px] h-32 bg-lime-500"></div>
            <div className="w-4 h-24 bg-orange-500 rounded-tl-[1000px] rounded-tr-[1000px]"></div>
          </div>
          <h1>Jul</h1>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-end">
            <div className="w-4 rounded-tl-[1000px] rounded-tr-[1000px] h-32 bg-lime-500"></div>
            <div className="w-4 h-24 bg-orange-500 rounded-tl-[1000px] rounded-tr-[1000px]"></div>
          </div>
          <h1>Jul</h1>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-end">
            <div className="w-4 rounded-tl-[1000px] rounded-tr-[1000px] h-32 bg-lime-500"></div>
            <div className="w-4 h-24 bg-orange-500 rounded-tl-[1000px] rounded-tr-[1000px]"></div>
          </div>
          <h1>Jul</h1>
        </div>
      </div>
    </div>
  </div>
</div>;
