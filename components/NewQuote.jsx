import React, { useState, useEffect } from "react";

export default function NewQuote() {

    const [quote , setQuote] = useState({})

    function fetchQuote() {
        fetch('https://fakestoreapi.com/products/1')
        .then(res=>res.json())
        .then(json=> {
            setQuote(json)
        })
    }
    useEffect(() => {
        fetchQuote()
    },[])

  return (
    <>
      <div className="overflow-x-auto relative" id="content">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Product name
              </th>
              <th scope="col" className="py-3 px-6">
                Color
              </th>
              <th scope="col" className="py-3 px-6">
                Category
              </th>
              <th scope="col" className="py-3 px-6">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {quote ? quote.title : "..."}
              </th>
              <td className="py-4 px-6">{!quote ? "...loading" :  quote.description }</td>
              <td className="py-4 px-6">{!quote ? "..." :  quote.category}</td>
              <td className="py-4 px-6">{!quote ? "..." :  quote.price}</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Microsoft Surface Pro
              </th>
              <td className="py-4 px-6">White</td>
              <td className="py-4 px-6">Laptop PC</td>
              <td className="py-4 px-6">$1999</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
