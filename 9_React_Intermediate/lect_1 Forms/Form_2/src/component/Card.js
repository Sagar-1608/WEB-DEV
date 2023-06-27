import React from "react";

export default function Card({ oneCard }) {
  return (
    <div className="flex flex-col gap-1 m-4 p-3 border-[2px] border-[#2f8ec1] 
    w-[310px] h-[310px] rounded-md  font-medium ">
      <div className="">
        Name : {` ${oneCard.first} `} {`${oneCard.last}`}
      </div>
      <div>Email : {oneCard.email}</div>
      <div>
        Address :{oneCard.address},{` ${oneCard.city} ${oneCard.zip}`}
      </div>
      <div>State : {oneCard.state}</div>
      <div>Country : {oneCard.country}</div>

      <div>
        Notified
        <div>Comment : {oneCard.comments ? `Yes` : `No`}</div>
        <div>Applied : {oneCard.candidate ? `Yes` : `No`}</div>
        <div> Offers : {oneCard.offers ? `Yes` : `No`}</div>
      </div>

      <div>Push Notification : {oneCard.notification}</div>
    </div>
  );
}
