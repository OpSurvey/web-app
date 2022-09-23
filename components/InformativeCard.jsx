import React from "react";

export default function StatusCard(props) {
  return (
    <>
      <div className="relative md:flex md:flex-col md:w-80 break-words bg-white rounded border-2 border-lime-400 xl:mb-0 shadow-lg">
        <div className="flex-auto p-4">
          <div className="flex flex-wrap">
            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
              <h5 className="text-blueGray-400 uppercase font-bold text-xs">
              {props.statusTitle} 
              </h5>
              <span className="font-semibold text-xl text-blueGray-700">
                {props.statusValue}
              </span>
            </div>
            <div className="relative w-auto pl-4 flex-initial">
              <div
                className=
                  "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500 " 
              >{/*  entra por props  el color del bg */}
                <i className="far fa-chart-bar"></i>
              </div>
            </div>
          </div>
          <p className="text-sm text-blueGray-400 mt-4">
            <span className= "text-lime-400 mr-2">
              <i
                className="fas fa-arrow-up"
              ></i>
              {props.statusPercent}
            </span>
            <span className="whitespace-nowrap">Desde el mes pasado</span>{/* Entra por props*/ }
          </p>
        </div>
      </div>
    </>
  );
}

// CardStats.defaultProps = {
//   statSubtitle: "Traffic",
//   statTitle: "350,897",
//   statArrow: "up",
//   statPercent: "3.48",
//   statPercentColor: "text-emerald-500",
//   statDescripiron: "Since last month",
//   statIconName: "far fa-chart-bar",
//   statIconColor: "bg-red-500",
// }