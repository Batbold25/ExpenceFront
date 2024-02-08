import React from "react";
import { X } from "./Icons/X";

export const Modal = (props) => {
  return (
    <div className="bg-zinc-950/50  absolute inset-0 w-full h-full flex  justify-center py-60">
      <div className=" w-2/4 ">
        <div className=" bg-white rounded-2xl">
          <div className="border-b-2 py-5 px-6 text-2xl font-semibold flex items-center place-content-between">
            <h1>Add Record</h1>
            <div onClick={props.closeModal} className=" cursor-pointer">
              <X />
            </div>
          </div>
          <div className="flex">
            <div className="py-5 px-6 w-2/4 flex flex-col gap-5">
              <div></div>
              <div className="fle flex-col gap-5">
                <div className=" flex flex-col gap-2 text-xl bg-gray-100 rounded-xl p-4">
                  <h1>Amount</h1>
                  <input
                    type="text"
                    placeholder="₮ 000.00"
                    className=" px-1 bg-gray-100 "
                  />
                </div>
                <div className=" flex flex-col gap-2 text-xl w-full">
                  <h1>Category</h1>
                  <select className="select w-full max-w-xs select-bordered  bg-gray-100">
                    <option disabled selected>
                      Find or choose category
                    </option>
                    <option>Food & Drinks</option>
                    <option>Food & Drinks</option>
                    <option>Food & Drinks</option>
                    <option>Food & Drinks</option>
                    <option>Food & Drinks</option>
                  </select>
                </div>
              </div>
              <button className="btn bg-green-600 w-full text-white">
                Add Record
              </button>
            </div>

            {/* SIDEEEEE   */}
            <div className="py-5 px-6 text-xl w-2/4">
              <div className="flex flex-col gap-2">
                <h1>Payee</h1>
                <select className="select w-full max-w-xs select-bordered  bg-gray-100">
                  <option disabled selected>
                    Write here
                  </option>
                </select>
              </div>
              <div className="flex flex-col gap-2 w-full h-full">
                <h1>Note</h1>
                <input
                  type="text"
                  className=" bg-gray-100 border p-4 w-80"
                  placeholder="Write here"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
