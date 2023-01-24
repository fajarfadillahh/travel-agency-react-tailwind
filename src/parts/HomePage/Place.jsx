import React from "react";

// import components
import Card from "../../components/Card";

export default function Place() {
  return (
    <section className="place section">
      <div className="place__container container grid gap-8 xs:max-w-sm lg:max-w-3xl xl:max-w-4xl">
        <div className="place__data text-center">
          <h1 className="place__title section-title">Choose Your Place</h1>
        </div>

        <div className="place__group grid grid-cols-2 gap-6 lg:grid-cols-3">
          {data.map((item) => (
            <Card
              key={item.id}
              image={item.image}
              rating={item.rating}
              title={item.title}
              location={item.location}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// dummy api
const data = [
  {
    id: 1,
    image: "/assets/place1.jpg",
    rating: "4.9",
    title: "Bali",
    location: "Indonedia",
    price: "399.99",
  },
  {
    id: 2,
    image: "/assets/place2.jpg",
    rating: "4.8",
    title: "Hawaii",
    location: "USA",
    price: "299.99",
  },
  {
    id: 3,
    image: "/assets/place3.jpg",
    rating: "4.7",
    title: "Bora Bora",
    location: "Plonesia",
    price: "359.99",
  },
  {
    id: 4,
    image: "/assets/place4.jpg",
    rating: "4.7",
    title: "Whitehaven",
    location: "Australlia",
    price: "289.99",
  },
  {
    id: 5,
    image: "/assets/place5.jpg",
    rating: "4.5",
    title: "Hvar",
    location: "Croatia",
    price: "299.99",
  },
  {
    id: 6,
    image: "/assets/place6.jpg",
    rating: "4.8",
    title: "Lombok",
    location: "Indonesia",
    price: "329.99",
  },
];
