import React from "react";
import "./_.css";
import data from "./menu.json";

export const metadata = {
  title: "Cafe Loaded",
  description:
    "Cafe Loaded serves rich coffee, crispy chicken starters, aromatic teas, thick shakes, creamy ice creams, and fresh bakery delights. The perfect spot to relax and refuel! Bhainsa, Nirmal, Telangana, India.",
  keywords: [
    "Cafe Loaded",
    "coffee",
    "tea",
    "chicken starters",
    "ice cream",
    "shakes",
    "bakery",
    "desserts",
    "cozy café",
    "best café near me",
    "bhainsa",
    "nirmal",
  ],
};

function Header() {
  return (
    <div className="w-full h-[60vh]">
      <div className="absolute h-[60vh] w-[100vw]">
        <img
          src={"/assets/cafe/bg.webp"}
          className="h-full w-full object-cover"
          alt="logo"
        />
        <div className="absolute inset-0 bg-[#615d5d] opacity-70"></div>
      </div>
      <div className="absolute flex w-full items-center justify-center bg-none align-middle h-[60vh]">
        <div className="flex flex-col items-center">
          <img
            src={"/assets/cafe/logo.webp"}
            alt="logo"
            className="h-48 w-48 object-cover shadow-2xl"
          />
          <p className="text-6xl font-bold text-white playfair mt-4 drop-shadow-[0px_4px_39px_#C6A87D]">
            Cafe Loaded
          </p>
          <hr className="border-2 border-[#C6A87D] w-1/2 mt-4" />
          <p className="text-2xl font-bold text-white playfair mt-4 drop-shadow-[0px_4px_39px_#C6A87D]">
            Bhainsa, Nirmal, Telangana, India
          </p>
        </div>
      </div>
    </div>
  );
}

function CategoryAndItems(props: {
  category: string;
  items: { item: string; price: number; available: boolean; image: string }[];
}) {
  const { category, items } = props;
  return (
    <div className="mt-4 mb-4">
      <p className="text-center text-[#C6A87D] text-4xl playfair font-extrabold mt-2 mb-2">
        {category}
      </p>
      <table className="ms-auto me-auto border-separate border-spacing-x-16 border-spacing-y-4">
        <tbody>
          {items.map((item) => {
            return (
              <tr key={item.item}>
                <td className="text-white text-3xl playfair font-bold">
                  {item.item}
                </td>
                <td className="text-white text-3xl playfair font-bold text-right">
                  {item.price}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function Menu() {
  return (
    <div className="flex flex-row flex-wrap col-auto max-w-[100%] ps-2 pe-2 xl:ps-12 xl:pe-12 pt-12 pb-64">
      {data.map((e) => {
        return (
          <CategoryAndItems
            key={e.category}
            category={e.category}
            items={e.items}
          />
        );
      })}
    </div>
  );
}

export default function CafeLoaded() {
  return (
    <div className="w-full h-full bg-[#313030] flex flex-col">
      <Header />
      <Menu />
    </div>
  );
}
