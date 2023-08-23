"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import IndoCard from "@/components/IndoCard";
import MapComponent from "@/components/Map";

const Search = () => {
  const [data, setData] = useState([]);
  const searchparams = useSearchParams();
  const location = searchparams.get("location");
  const startDate = searchparams.get("startDate");
  const endDate = searchparams.get("endDate");
  const noOfGuest = searchparams.get("noOfGuest");

  const formatStartDate = format(new Date(startDate), "dd MMMM yy");
  const formatEndDate = format(new Date(endDate), "dd MMMM yy");
  const rangeText = `${formatStartDate} - ${formatEndDate}`;

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await fetch(
      "https://mocki.io/v1/3cd1c0cb-d302-4462-b06f-6db0c1d49332"
    );
    const data = await res.json();
    setData(data);
  };
  return (
    <div>
      <Header
        placeholder={`${location} | ${rangeText} | ${noOfGuest} guests`}
      />

      <main className="flex">
        <section className="flex-grow px-6 pt-14">
          <p className="text-xs">
            300+ Stays in {rangeText} for {noOfGuest} guests
          </p>
          <p className="text-3xl font-semibold mt-2 mb-6 ">
            Stays in {location}
          </p>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button_hover">Cancelllation Flexibility</p>
            <p className="button_hover">Type of Place</p>
            <p className="button_hover">Price</p>
            <p className="button_hover">Romms and beds</p>
            <p className="button_hover">More Filters</p>
          </div>

          <div className="flex flex-col">
            {data.map((item) => (
              <IndoCard
                key={item.img}
                title={item.title}
                img={item.img}
                location={item.location}
                description={item.description}
                star={item.star}
                price={item.price}
                total={item.total}
              />
            ))}
          </div>
        </section>
        <section className="hidden xl:inline-flex xl:min-w-[600px]">
          <MapComponent data={data} />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Search;
