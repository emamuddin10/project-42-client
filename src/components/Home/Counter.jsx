import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import React, { useState, useEffect } from "react";

const Counter = () => {
  const axiosSecure = useAxiosPublic();
  const { data } = useQuery({
    queryKey: ["biodata"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/biodata");
      return data;
    },
  });

  const { data: marriages } = useQuery({
    queryKey: ["marriages"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/marriage");
      return data;
    },
  });

  const [totalBiodata, setTotalBiodata] = useState(0);
  const [maleCount, setMaleCount] = useState(0);
  const [femaleCount, setFemaleCount] = useState(0);
  const [totalMarriages, setTotalMarriages] = useState(0);

  useEffect(() => {
    if (data) {
      setTotalBiodata(data.length);
      // setTotalMarriage(marriage.length)
      const males = data.filter((entry) => entry.type === "Male");
      setMaleCount(males.length);
      setFemaleCount(data.length - males.length);
    }
    if (marriages) {
      setTotalMarriages(marriages.length);
    }
  }, [data, marriages]);

  return (
    <div className="px-4 py-10 lg:px-24 bg-white">
      <h2 className="text-4xl font-bold mb-10 text-center text-black font-serif">
        Total Counts
      </h2>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Total Biodatas */}
        <div className="flex flex-col items-center justify-center bg-green-100 border border-green-200 rounded-2xl shadow-md p-6 hover:scale-105 transition-transform duration-300">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Biodata Icon"
            className="w-14 h-14 mb-4"
          />
          <p className="text-4xl font-extrabold text-green-700">
            {totalBiodata}
          </p>
          <p className="text-xl text-gray-700 mt-2 font-medium">
            Total Biodatas
          </p>
        </div>

        {/* Male Biodatas */}
        <div className="flex flex-col items-center justify-center bg-green-100 border border-green-200 rounded-2xl shadow-md p-6 hover:scale-105 transition-transform duration-300">
          <img
            src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
            alt="Male Icon"
            className="w-14 h-14 mb-4"
          />
          <p className="text-4xl font-extrabold text-green-700">{maleCount}</p>
          <p className="text-xl text-gray-700 mt-2 font-medium">
            Male Biodatas
          </p>
        </div>

        {/* Female Biodatas */}
        <div className="flex flex-col items-center justify-center bg-green-100 border border-green-200 rounded-2xl shadow-md p-6 hover:scale-105 transition-transform duration-300">
          <img
            src="https://cdn-icons-png.flaticon.com/512/147/147142.png"
            alt="Female Icon"
            className="w-14 h-14 mb-4"
          />
          <p className="text-4xl font-extrabold text-green-700">
            {femaleCount}
          </p>
          <p className="text-xl text-gray-700 mt-2 font-medium">
            Female Biodatas
          </p>
        </div>

        {/* Total Marriages */}
        <div className="flex flex-col items-center justify-center bg-green-100 border border-green-200 rounded-2xl shadow-md p-6 hover:scale-105 transition-transform duration-300">
          <img
            src="https://cdn-icons-png.flaticon.com/512/833/833472.png"
            alt="Marriage Icon"
            className="w-14 h-14 mb-4"
          />
          <p className="text-4xl font-extrabold text-green-700">
            {totalMarriages}
          </p>
          <p className="text-xl text-gray-700 mt-2 font-medium">
            Total Marriages
          </p>
        </div>
      </section>
    </div>
  );
};

export default Counter;
