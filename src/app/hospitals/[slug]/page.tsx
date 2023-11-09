"use client";
import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
interface HospitalsPageProps {
  params: {
    slug: string;
  };
}
const HospitalsPage: React.FC<HospitalsPageProps> = ({ params }) => {
  const { slug } = params;
  const { data, isLoading } = useQuery(["hospital", slug], async () => {
    return await axios.get(
      `https://script.google.com/macros/s/AKfycbxstUNUC8v5pHkrFQxLbSw8WtKNF6W7Y6QzbXizC06xnEgIk62fkk-HvWomBvcXur77/exec?endpoint=hospital&filter=${
        slug || ""
      }`
    );
  });
  return (
    <div className="min-h-screen bg-green-100/30 p-8">
      <div>
        {isLoading && <span>Loading....</span>}
        {data?.data.length > 0 &&
          data?.data.map((item: Array<string>, index: number) => {
            return (
              <div
                key={index}
                className="flex flex-wrap gap-2 shadow-md rounded-md p-2"
              >
                <p className="bg-green-800 rounded-full text-white p-2">
                  {item[3]}
                </p>
                <p className="bg-green-800 rounded-full text-white p-2">
                  {item[4]}
                </p>
                <p className="bg-green-800 rounded-full text-white p-2">
                  {item[6]}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default HospitalsPage;
{
  /* <p
className="bg-green-800 rounded-full text-white p-2"
key={index}
> */
}
