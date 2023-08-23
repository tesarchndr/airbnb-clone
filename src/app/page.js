"use client";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LargeCard from "@/components/LargeCard";
import MediumCard from "@/components/MediumCard";
import SmallCard from "@/components/SmallCard";
import axios from "axios";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  const [cardsData, setCardData] = useState([]);

  useEffect(  () => {
     getData()
     getCardsData()
  }, []);
  const getData = async () => {
    const res = await fetch(
      "https://mocki.io/v1/8c3d7b3d-655e-4b83-b26f-8845a7737552"
    )
    const result = await res.json()
    // return res.json();
    setData(result)
  };

  const getCardsData = async () => {
    const res = await fetch(
      "https://mocki.io/v1/2affef1c-cb65-4fcc-9375-fb9f79dbad9a"
    );
    setCardData(await res.json())
  };
  // const data = await getData();
  // const cardsData = await getCardsData();

  return (
    <div className="bg-white">
      {/* Header */}
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <p className="font-semibold text-4xl">Explore Nearby</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data?.map((el) => (
              <SmallCard
                key={el.img}
                img={el.img}
                distance={el.distance}
                location={el.location}
              />
            ))}
          </div>
        </section>
        <section>
          <p className="font-semibold text-4xl py-8">Live Anywhere</p>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData.map((item) => (
              <MediumCard key={item.img} img={item.img} title={item.title} />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlist curated by Airbnb."
          buttonText="Get Inspired"
        />
      </main>

      <Footer />
    </div>
  );
}

// export async function getStaticProps() {
//   // Fetch data from external API
//   console.log('dsiadni');
//   const res = await fetch(`https://www.jsonkeeper.com/b/4G1G`);
//   const data = await res.json();

//   // Pass data to the page via props
//   return { props: { data } };
// }
