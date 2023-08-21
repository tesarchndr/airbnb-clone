"use client";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LargeCard from "@/components/LargeCard";
import MediumCard from "@/components/MediumCard";
import SmallCard from "@/components/SmallCard";
import axios from "axios";
import React, { useState, useEffect } from "react";

export default function Home(props) {
  const data = [
    {
      img: "https://links.papareact.com/5j2",
      location: "London",
      distance: "45-minute drive",
    },
    {
      img: "https://links.papareact.com/1to",
      location: "Manchester",
      distance: "4.5-hour drive",
    },
    {
      img: "https://links.papareact.com/40m",
      location: "Liverpool",
      distance: "4.5-hour drive",
    },
    {
      img: "https://links.papareact.com/msp",
      location: "York",
      distance: "4-hour drive",
    },
    {
      img: "https://links.papareact.com/2k3",
      location: "Cardiff",
      distance: "45-minute drive",
    },
    {
      img: "https://links.papareact.com/ynx",
      location: "Birkenhead",
      distance: "4.5-hour drive",
    },
    {
      img: "https://links.papareact.com/kji",
      location: "Newquay",
      distance: "6-hour drive",
    },
    {
      img: "https://links.papareact.com/41m",
      location: "Hove",
      distance: "2-hour drive",
    },
  ];
  const cardsData = [
    {
      img: "https://links.papareact.com/2io",
      title: "Outdoor getaways",
    },
    {
      img: "https://links.papareact.com/q7j",
      title: "Unique stays",
    },
    {
      img: "https://links.papareact.com/s03",
      title: "Entire homes",
    },
    {
      img: "https://links.papareact.com/8ix",
      title: "Pet allowed",
    },
  ];
  // useEffect(() => {
  //   // cardsData();
  //   axios.get("https://jsonplaceholder.typicode.com/posts/1")
  //   .then((res) => {
  //     console.log(res, 'asfasfas')
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   })
  // }, []);
  // const cardsData = async () => {
  //   const res = await fetch("https://links.papareact.com/zp1");
  //   const data = await res.json();
  //   console.log(data);
  // };

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
          img='https://links.papareact.com/4cj'
          title='The Greatest Outdoors'
          description='Wishlist curated by Airbnb.'
          buttonText='Get Inspired'
        />
      </main>

      <Footer/>
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
