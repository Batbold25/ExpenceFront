import React from "react";
import { Header } from "./Header";
import { MiniLogo } from "./Icons/MiniLogo";
import { ChipIcon } from "./Icons/ChipIcon";
import { Topside } from "./Icons/Topside";
import { DownIcon } from "./Icons/DownIcon";
import { HouseIcon } from "./Icons/HouseIcon";

import { Chart } from "./Chart";

export const Main = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="w-screen ">
      <Header />

      {/* -------------------- CARTS ----------- */}

      <div className="w-full px-32 bg-gray-200 py-7 flex items-center flex-col gap-5">
        <div className=" flex gap-5">
          <div className=" drop-shadow-lg	 w-96 h-56 bg-blue-600 rounded-xl p-9 place-content-between flex flex-col hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150">
            <div className="flex items-center gap-2">
              <MiniLogo width="21" height="21" />{" "}
              <h1 className=" text-white font-bold">Geld</h1>
            </div>

            <div className="place-content-between flex">
              <div>
                <h1 className="opacity-50 text-white">Cash</h1>
                <h2 className="text-white text-2xl">10,000,00</h2>
              </div>
              <ChipIcon />
            </div>
          </div>

          <div className=" drop-shadow-lg	 w-96 h-56 rounded-xl bg-white hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150">
            <div className="px-6 py-4 flex items-center gap-2 border-b-2">
              <div className="w-2 h-2 bg-lime-500 rounded"></div>
              <h1 className=" text-slate-900 text-base font-semibold">
                Your Income
              </h1>
            </div>

            <div className="px-6 py-5 flex flex-col gap-4">
              <div>
                <h1 className="text-black text-4xl font-semibold leading-10">
                  1,200,000 ₮
                </h1>
                <h2 className="text-slate-500 text-lg eading-7">
                  Your Income Amount
                </h2>
              </div>
              <div className="flex gap-2">
                <DownIcon />
                <h1 className="text-black text-lg leading-7">
                  32% from last month
                </h1>
              </div>
            </div>
          </div>

          <div className=" drop-shadow-lg	 w-96 h-56 rounded-xl bg-white hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150">
            <div className="px-6 py-4 flex items-center gap-2 border-b-2">
              <div className="w-2 h-2 bg-blue-600 rounded"></div>
              <h1 className=" text-slate-900 text-base font-semibold">
                Total Expenses
              </h1>
            </div>

            <div className="px-6 py-5 flex flex-col gap-4">
              <div>
                <h1 className="text-black text-4xl font-semibold leading-10">
                  -1,200,000 ₮
                </h1>
                <h2 className="text-slate-500 text-lg eading-7">
                  Your Income Amount
                </h2>
              </div>
              <div className="flex gap-2">
                <Topside />
                <h1 className="text-black text-lg leading-7">
                  32% from last month
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-5  ">
          <div className=" rounded-xl bg-white ">
            <div className="px-6 py-4 flex items-center gap-2 border-b-2">
              <h1 className=" text-slate-900 text-base font-semibold">
                Income - Expense
              </h1>
            </div>

            <div className="px-6 py-8 flex flex-row gap-4 drop-shadow-lg	">
              {/* <div className="flex gap-5 flex-col text-zinc-500 text-sm">
                <h1>3’000’000</h1>
                <h1>2’000’000</h1>
                <h1>1’000’000</h1>
                <h1>0</h1>
              </div> */}
              {/* <Line data={data} /> */}
              <Chart></Chart>
              {/* <div className=" flex gap-10">
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
              </div> */}
            </div>
          </div>
          <div className="drop-shadow-lg	 rounded-xl bg-white ">
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
        </div>
        <div className="w-full flex justify-center">
          <div className="  rounded-xl bg-white w-8/12">
            <div className="px-6 py-4 flex items-center gap-2 border-b-2">
              <h1 className=" text-slate-900 text-base font-semibold">
                Last Records
              </h1>
            </div>

            <div className="px-6 py-8 flex flex-col gap-4 items-center">
              {/* ordes bord */}
              <div className="border-b-2 flex place-content-between w-11/12 py-5">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center p-2">
                    <HouseIcon />
                  </div>
                  <div>
                    <h1 className="text-black text-base">Lending & Renting</h1>
                    <p className="text-gray-500 text-xs font-normal">
                      3 hours ago
                    </p>
                  </div>
                </div>

                <h1 className="text-lime-500">- 1,000₮</h1>
              </div>
              <div className="border-b-2 flex place-content-between w-11/12 py-5">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center p-2">
                    <HouseIcon />
                  </div>
                  <div>
                    <h1 className="text-black text-base">Lending & Renting</h1>
                    <p className="text-gray-500 text-xs font-normal">
                      3 hours ago
                    </p>
                  </div>
                </div>

                <h1 className="text-lime-500">- 1,000₮</h1>
              </div>
              <div className="border-b-2 flex place-content-between w-11/12 py-5">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center p-2">
                    <HouseIcon />
                  </div>
                  <div>
                    <h1 className="text-black text-base">Lending & Renting</h1>
                    <p className="text-gray-500 text-xs font-normal">
                      3 hours ago
                    </p>
                  </div>
                </div>

                <h1 className="text-lime-500">- 1,000₮</h1>
              </div>
              <div className="border-b-2 flex place-content-between w-11/12 py-5">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center p-2">
                    <HouseIcon />
                  </div>
                  <div>
                    <h1 className="text-black text-base">Lending & Renting</h1>
                    <p className="text-gray-500 text-xs font-normal">
                      3 hours ago
                    </p>
                  </div>
                </div>

                <h1 className="text-lime-500">- 1,000₮</h1>
              </div>
              <div className="border-b-2 flex place-content-between w-11/12 py-5">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center p-2">
                    <HouseIcon />
                  </div>
                  <div>
                    <h1 className="text-black text-base">Lending & Renting</h1>
                    <p className="text-gray-500 text-xs font-normal">
                      3 hours ago
                    </p>
                  </div>
                </div>

                <h1 className="text-lime-500">- 1,000₮</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
