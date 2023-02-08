// import React, { useState } from 'react'

export type CartType = {
  item: string;
  price: number;
  desc: string;
  image: string;
  quantity: number;
  type: string;
  company: string;
  category: string;
}

export interface CartInfoInterface {
  [x: string]: any;
  title: string;
  menu: CartType[];
}

export const Categories = () => {

  // storing dummy values of food
  const fastfood: CartInfoInterface[] = [
    {
      title: "Bob's Burgers",
      menu: [
        {
          item: "Bacon Burger",
          price: 4.25,
          desc: "Get the money and get it all the time",
          image: "/images/item-images/pexels-horizon-content-3764353.jpg",
          quantity: 1,
          type: "food",
          company: "Bob's Burgers",
          category: "fastfood"
        },
        {
          item: "Chili Cheese Fries",
          price: 2.85,
          desc: "Get the money and get it all the time",
          image: "/images/item-images/Screen Shot 2023-02-06 at 4.51.00 PM.png",
          quantity: 1,
          type: "food",
          company: "Bob's Burgers",
          category: "fastfood"
        },
        {
          item: "Jalepenos",
          price: 3.25,
          desc: "Get the money and get it all the time",
          image: "/images/item-images/pexels-nataliya-vaitkevich-5792430.jpg",
          quantity: 1,
          type: "food",
          company: "Bob's Burgers",
          category: "fastfood"
        },
        {
          item: "Coke",
          price: 5.25,
          desc: "Get the money and get it all the time",
          image: "/images/item-images/pexels-pixabay-50593.jpg",
          quantity: 1,
          type: "drink",
          company: "Bob's Burgers",
          category: "fastfood"
        },
        {
          item: "Sprite",
          price: 1.25,
          desc: "Get the money and get it all the time",
          image: "/images/item-images/Screen Shot 2023-02-06 at 4.56.40 PM.png",
          quantity: 1,
          type: "drink",
          company: "Bob's Burgers",
          category: "fastfood"
        },
        {
          item: "Lemonade",
          price: 1.25,
          desc: "Get the money and get it all the time",
          image: "/images/item-images/pexels-designbyja-2109099.jpg",
          quantity: 1,
          type: "drink",
          company: "Bob's Burgers",
          category: "fastfood"
        },
      ],
    }]

  const snacks: CartInfoInterface[] = [
    {
      title: "8-11",
      menu: [
        {
          item: "Hot Cat",
          price: 9.25,
          desc: "Get the money and get it all the time",
          image: "/images/item-images/pexels-engin-akyurt-2673353.jpg",
          quantity: 1,
          type: "food",
          company: "8-11",
          category: "snacks"
        },
        {
          item: "Wings and Tings",
          price: 7.55,
          desc: "Get the money and get it all the time",
          image: "/images/item-images/pexels-dmitriy-ganin-7538068.jpg",
          quantity: 1,
          type: "food",
          company: "8-11",
          category: "snacks"
        },
        {
          item: "Smetzels",
          price: 2.15,
          desc: "Get the money and get it all the time",
          image: "/images/item-images/pexels-lisa-fotios-1894325.jpg",
          quantity: 1,
          type: "food",
          company: "8-11",
          category: "snacks"
        },
        {
          item: "Water",
          price: 1.25,
          desc: "Get the money and get it all the time",
          image: "/images/item-images/pexels-elle-hughes-2101147.jpg",
          quantity: 1,
          type: "drink",
          company: "8-11",
          category: "snacks"
        },
        {
          item: "Gatorade",
          price: 1.25,
          desc: "Get the money and get it all the time",
          image: "/images/item-images/Screen Shot 2023-02-06 at 10.12.56 PM.png",
          quantity: 1,
          type: "drink",
          company: "8-11",
          category: "snacks"
        },
        {
          item: "Sprite",
          price: 1.25,
          desc: "Get the money and get it all the time",
          image: "/images/item-images/Screen Shot 2023-02-06 at 4.56.40 PM.png",
          quantity: 1,
          type: "drink",
          company: "8-11",
          category: "snacks"
        },
      ],
    }]

  const finedine: CartInfoInterface[] = [
    {
      title: "Puth's Chriss",
      menu: [
        {
          item: "Ramen",
          price: 8.95,
          desc: "Get the money and get it all the time",
          image: "/images/item-images/pexels-jan-n-g-u-y-e-n-🍁-2664216.jpg",
          quantity: 1,
          type: "food",
          company: "Puth's Chriss",
          category: "finedine"
        },
        {
          item: "Wonton Sushi",
          price: 3.75,
          desc: "Get the money and get it all the time",
          image: "/images/item-images/pexels-frans-van-heerden-670705.jpg",
          quantity: 1,
          type: "food",
          company: "Puth's Chriss",
          category: "finedine"
        },
        {
          item: "Steak and Eggs",
          price: 10.45,
          desc: "Get the money and get it all the time",
          image: "/images/item-images/pexels-kasumi-loffler-3535383.jpg",
          quantity: 1,
          type: "food",
          company: "Puth's Chriss",
          category: "finedine"
        },
        {
          item: "Champagne",
          price: 1.25,
          desc: "Get the money and get it all the time",
          image: "/images/item-images/pexels-sabel-blanco-1835743.jpg",
          quantity: 1,
          type: "drink",
          company: "Puth's Chriss",
          category: "finedine"
        },
        {
          item: "Water",
          price: 1.25,
          desc: "Get the money and get it all the time",
          image: "/images/item-images/pexels-pixabay-416528.jpg",
          quantity: 1,
          type: "drink",
          company: "Puth's Chriss",
          category: "finedine"
        },
        {
          item: "Strawberry Lemonade",
          price: 1.25,
          desc: "Get the money and get it all the time",
          image: "/images/item-images/pexels-charlotte-may-5946615.jpg",
          quantity: 1,
          type: "drink",
          company: "Puth's Chriss",
          category: "finedine"
        },
      ],
    }]

  const alcohol: CartInfoInterface[] = [
    {
      title: "Johnny's Liqour",
      menu: [
        {
          item: "Crackers",
          price: 1.15,
          desc: "Get the money and get it all the time",
          image: "money.jpg",
          quantity: 1,
          type: "food",
          company: "Johnny's Liqour",
          category: "alcohol"
        },
        {
          item: "Salami",
          price: 1.05,
          desc: "Get the money and get it all the time",
          image: "money.jpg",
          quantity: 1,
          type: "food",
          company: "Johnny's Liqour",
          category: "alcohol"
        },
        {
          item: "Wine",
          price: 1.25,
          desc: "Get the money and get it all the time",
          image: "money.jpg",
          quantity: 1,
          type: "drink",
          company: "Johnny's Liqour",
          category: "alcohol"
        },
        {
          item: "Titos Vodka",
          price: 1.25,
          desc: "Get the money and get it all the time",
          image: "money.jpg",
          quantity: 1,
          type: "drink",
          company: "Johnny's Liqour",
          category: "alcohol"
        },
        {
          item: "Hennessey",
          price: 1.25,
          desc: "Get the money and get it all the time",
          image: "money.jpg",
          quantity: 1,
          type: "drink",
          company: "Johnny's Liqour",
          category: "alcohol"
        },
      ],
    }]

  return {
    fastfood,
    finedine,
    snacks,
    alcohol
  }
}