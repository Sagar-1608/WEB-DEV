import React from "react";
import Card from "./Card";

export default function Information({ Data }) {
  const noData = Data.length;

  console.log(Data.length);
  return (
    <div className="flex flex-row items-center justify-center ">
      {!noData ? (
        <div className=" font-bold text-lg  bg-[#1c408e] text-white p-2 rounded-md m-10">
          No Data Available
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <div>
            <h2 className=" font-bold text-lg  bg-[#1c408e] text-white p-2 rounded-md mt-3">
              All User Information
            </h2>
          </div>

          <div className="flex flex-row items-center justify-center flex-wrap ">
            {Data.map((oneCard) => {
              return <Card oneCard={oneCard}></Card>;
            })}
          </div>
        </div>
      )}
    </div>
  );
}
