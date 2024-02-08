import React, { useState } from "react";
import { Header } from "./Header";
import { Right } from "./Icons/Right";
import { Lift } from "./Icons/Lift";
import { HouseIcon } from "./Icons/HouseIcon";
import { FoodIcon } from "./Icons/FoodIcon";
import { Plus } from "./Icons/Plus";
import { Eyes } from "./Icons/Eyes";
import { Sum } from "./Icons/Sum";
import { X } from "./Icons/X";
import { Modal } from "./Modal";

export const Records = () => {
  const [showModal, setShowModal] = useState(false);

  const addModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  console.log(showModal, "show");
  return (
    <div className="relative ">
      <Header />
      <div className="w-full px-32 py-4 bg-gray-100 gap-6 flex ">
        {/* -------------------------------------------------------- */}
        <div className="px-6 py-8 bg-white w-1/4 rounded-xl flex flex-col gap-6">
          {/* -------------------------------- */}
          <div className="flex gap-6 flex-col w-full">
            <h1 className=" font-semibold text-3xl">Records</h1>
            <button
              className="btn bg-blue-600 w-full text-white rounded-3xl "
              onClick={addModal}
            >
              <Plus fill="white" />
              Add
            </button>
          </div>
          {/* -------------------------------- */}

          <input
            type="search"
            placeholder="Search"
            className="w-full rounded-xl py-3 px-6 bg-slate-100 border"
          />
          {/* -------------------------------- */}
          <div className="flex flex-col gap-4">
            <h1>Types</h1>
            <div className="flex flex-col gap-4">
              <div className="flex flex-row gap-3">
                <input type="checkbox" className="checkbox" />
                <h1>All</h1>
              </div>
              <div className="flex flex-row gap-3">
                <input type="checkbox" className="checkbox" /> <h1>Income</h1>
              </div>
              <div className="flex flex-row gap-3">
                <input type="checkbox" className="checkbox" /> <h1>Expense</h1>
              </div>
            </div>
          </div>

          {/* --------------------------------------- */}

          <div className="flex flex-col gap-4">
            <div className=" flex w-full place-content-between">
              <h1 className=" font-bold text-2xl">Category</h1>
              <p className=" text-2xl text-gray-400 font-extralight">Clear</p>
            </div>

            {/* CATEGORY */}
            <div className="px-2 flex flex-col gap-4">
              <div className="flex place-content-between items-center">
                <div className="flex gap-2 items-center ">
                  <Eyes />
                  <h1>Food & Drinks</h1>
                </div>
                <Sum />
              </div>
              <div className="flex place-content-between items-center">
                <div className="flex gap-2 items-center ">
                  <Eyes />
                  <h1>Food & Drinks</h1>
                </div>
                <Sum />
              </div>
              <div className="flex place-content-between items-center">
                <div className="flex gap-2 items-center ">
                  <Eyes />
                  <h1>Food & Drinks</h1>
                </div>
                <Sum />
              </div>
              <div className="flex place-content-between items-center">
                <div className="flex gap-2 items-center ">
                  <Eyes />
                  <h1>Food & Drinks</h1>
                </div>
                <Sum />
              </div>
              <div className="flex place-content-between items-center">
                <div className="flex gap-2 items-center ">
                  <Eyes />
                  <h1>Food & Drinks</h1>
                </div>
                <Sum />
              </div>
              <div className="flex place-content-between items-center">
                <div className="flex gap-2 items-center ">
                  <Eyes />
                  <h1>Food & Drinks</h1>
                </div>
                <Sum />
              </div>
              <div className="flex place-content-between items-center">
                <div className="flex gap-2 items-center ">
                  <Eyes />
                  <h1>Food & Drinks</h1>
                </div>
                <Sum />
              </div>

              <div className="flex place-content-between items-center">
                <div className="flex gap-2 items-center ">
                  <Eyes />
                  <h1>Food & Drinks</h1>
                </div>
                <Sum />
              </div>
              <div className="flex place-content-between items-center">
                <div className="flex gap-2 items-center ">
                  <Eyes />
                  <h1>Food & Drinks</h1>
                </div>
                <Sum />
              </div>
              <div className="flex place-content-between items-center">
                <div className="flex gap-2 items-center ">
                  <Eyes />
                  <h1>Food & Drinks</h1>
                </div>
                <Sum />
              </div>

              <div className="flex gap-3 items-center text-black cursor-pointer hover:text-stone-300">
                <Plus fill="blue" />
                <h1 className=" text-xl ">Add Category</h1>
              </div>
            </div>

            <div>
              <h1 className=" font-semibold f">Amount Range</h1>
              <input
                type="range"
                min={0}
                max="100"
                value="40"
                className="range"
              />
              <input
                type="range"
                min={0}
                max={100}
                value={40}
                className="range"
              />
            </div>
          </div>
        </div>

        {/* SIDE BAR ---------------------------------- */}
        <div className=" flex flex-col w-9/12 gap-6">
          <div className=" flex place-content-between ">
            <div className="flex items-center gap-2">
              <div className=" bg-gray-200 w-8 h-8 flex items-center justify-center rounded">
                <Lift />
              </div>
              <h1>Last 30 Days</h1>
              <div className=" bg-gray-200 w-8 h-8 flex items-center justify-center rounded">
                <Right />
              </div>
            </div>

            <select className="select w-full max-w-xs">
              <option disabled selected>
                Newest fisrt
              </option>
            </select>
          </div>
          {/* ------------------------------------------------------------- */}
          <div className="flex flex-col gap-6">
            <div className="bg-white flex place-content-between py-3 px-6 rounded-2xl">
              <div className="flex gap-4">
                <input type="checkbox" className="checkbox" />
                <h1>Select all</h1>
              </div>
              <h1 className=" text-slate-400 ">- 35,500₮</h1>
            </div>

            <div className="flex flex-col gap-3">
              <h1 className=" font-semibold">Today</h1>
              <div className=" flex flex-col gap-3">
                <div className="bg-white flex place-content-between py-3 px-6 rounded-2xl items-center">
                  <div className="flex gap-4 items-center">
                    <input type="checkbox" className="w-6 h-6" />
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center p-2">
                      <HouseIcon />
                    </div>
                    <div>
                      <h1>Lending & Renting</h1>
                      <p>14:00</p>
                    </div>
                  </div>
                  <h1 className=" text-green-500"> - 1000₮</h1>
                </div>

                <div className="bg-white flex place-content-between py-3 px-6 rounded-2xl items-center">
                  <div className="flex gap-4 items-center">
                    <input type="checkbox" className="w-6 h-6" />
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center p-2">
                      <FoodIcon />
                    </div>
                    <div>
                      <h1>Lending & Renting</h1>
                      <p>14:00</p>
                    </div>
                  </div>
                  <h1 className=" text-neon-red"> - 1000₮</h1>
                </div>

                <div className="bg-white flex place-content-between py-3 px-6 rounded-2xl items-center">
                  <div className="flex gap-4 items-center">
                    <input type="checkbox" className="w-6 h-6" />
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center p-2">
                      <FoodIcon />
                    </div>
                    <div>
                      <h1>Lending & Renting</h1>
                      <p>14:00</p>
                    </div>
                  </div>
                  <h1 className=" text-yellow-300"> - 1000₮</h1>
                </div>

                <div className="bg-white flex place-content-between py-3 px-6 rounded-2xl items-center">
                  <div className="flex gap-4 items-center">
                    <input type="checkbox" className="w-6 h-6" />
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center p-2">
                      <FoodIcon />
                    </div>
                    <div>
                      <h1>Lending & Renting</h1>
                      <p>14:00</p>
                    </div>
                  </div>
                  <h1 className=" text-yellow-300"> - 1000₮</h1>
                </div>

                <div className="bg-white flex place-content-between py-3 px-6 rounded-2xl items-center">
                  <div className="flex gap-4 items-center">
                    <input type="checkbox" className="w-6 h-6" />
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center p-2">
                      <FoodIcon />
                    </div>
                    <div>
                      <h1>Lending & Renting</h1>
                      <p>14:00</p>
                    </div>
                  </div>
                  <h1 className=" text-yellow-300"> - 1000₮</h1>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h1 className=" font-semibold">Yesterday</h1>
              <div className=" flex flex-col gap-3">
                <div className="bg-white flex place-content-between py-3 px-6 rounded-2xl items-center">
                  <div className="flex gap-4 items-center">
                    <input type="checkbox" className="w-6 h-6" />
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center p-2">
                      <HouseIcon />
                    </div>
                    <div>
                      <h1>Lending & Renting</h1>
                      <p>14:00</p>
                    </div>
                  </div>
                  <h1 className=" text-green-500"> - 1000₮</h1>
                </div>

                <div className="bg-white flex place-content-between py-3 px-6 rounded-2xl items-center">
                  <div className="flex gap-4 items-center">
                    <input type="checkbox" className="w-6 h-6" />
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center p-2">
                      <FoodIcon />
                    </div>
                    <div>
                      <h1>Lending & Renting</h1>
                      <p>14:00</p>
                    </div>
                  </div>
                  <h1 className=" text-neon-red"> - 1000₮</h1>
                </div>

                <div className="bg-white flex place-content-between py-3 px-6 rounded-2xl items-center">
                  <div className="flex gap-4 items-center">
                    <input type="checkbox" className="w-6 h-6" />
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center p-2">
                      <FoodIcon />
                    </div>
                    <div>
                      <h1>Lending & Renting</h1>
                      <p>14:00</p>
                    </div>
                  </div>
                  <h1 className=" text-yellow-300"> - 1000₮</h1>
                </div>

                <div className="bg-white flex place-content-between py-3 px-6 rounded-2xl items-center">
                  <div className="flex gap-4 items-center">
                    <input type="checkbox" className="w-6 h-6" />
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center p-2">
                      <FoodIcon />
                    </div>
                    <div>
                      <h1>Lending & Renting</h1>
                      <p>14:00</p>
                    </div>
                  </div>
                  <h1 className=" text-yellow-300"> - 1000₮</h1>
                </div>

                <div className="bg-white flex place-content-between py-3 px-6 rounded-2xl items-center">
                  <div className="flex gap-4 items-center">
                    <input type="checkbox" className="w-6 h-6" />
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center p-2">
                      <FoodIcon />
                    </div>
                    <div>
                      <h1>Lending & Renting</h1>
                      <p>14:00</p>
                    </div>
                  </div>
                  <h1 className=" text-yellow-300"> - 1000₮</h1>
                </div>
              </div>
            </div>

            <div></div>
          </div>

          {/* ---------------------------------------------- */}
        </div>
        {showModal && <Modal closeModal={closeModal} />}
      </div>
    </div>
  );
};
