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
          desc: "Delicious and savory sandwich made with a juicy beef patty, crispy bacon strips, and a variety of toppings such as lettuce, tomato, cheese, and condiments all nestled between two buns.",
          image: "/images/item-images/pexels-horizon-content-3764353.jpg",
          quantity: 1,
          type: "food",
          company: "Bob's Burgers",
          category: "fastfood"
        },
        {
          item: "Chili Cheese Fries",
          price: 2.85,
          desc: "Our delicious Chili Cheese Fries are the perfect addition to any meal. Made with crispy, golden-fried potatoes, topped with rich and savory chili, and melted to perfection with gooey cheese.",
          image: "/images/item-images/Screen Shot 2023-02-06 at 4.51.00 PM.png",
          quantity: 1,
          type: "food",
          company: "Bob's Burgers",
          category: "fastfood"
        },
        {
          item: "Jalepenos",
          price: 3.25,
          desc: "Add a touch of heat to your meal with our juicy and spicy Jalapeños! These tender and flavorful peppers are sliced and grilled to perfection, delivering a bold and zesty flavor in every bite.",
          image: "/images/item-images/pexels-nataliya-vaitkevich-5792430.jpg",
          quantity: 1,
          type: "food",
          company: "Bob's Burgers",
          category: "fastfood"
        },
        {
          item: "Coke",
          price: 5.25,
          desc: "Refresh and invigorate with a classic, ice-cold Coke!",
          image: "/images/item-images/pexels-pixabay-50593.jpg",
          quantity: 1,
          type: "drink",
          company: "Bob's Burgers",
          category: "fastfood"
        },
        {
          item: "Sprite",
          price: 1.25,
          desc: "Experience a burst of crisp and refreshing flavor with every sip of Sprite.",
          image: "/images/item-images/Screen Shot 2023-02-06 at 4.56.40 PM.png",
          quantity: 1,
          type: "drink",
          company: "Bob's Burgers",
          category: "fastfood"
        },
        {
          item: "Lemonade",
          price: 1.25,
          desc: "Treat yourself to the sweet and tangy taste of our freshly-made Lemonade. Made with real lemons, our lemonade is the perfect balance of sweet and sour, with a crisp and refreshing flavor that will tantalize your taste buds.",
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
          desc: "Bring the heat to your taste buds with our spicy and savory Hot Chicken. Marinated in a blend of spices and seasonings, our juicy and tender chicken is crispy-fried to perfection and drenched in a fiery hot sauce that will leave your mouth tingling with pleasure.",
          image: "/images/item-images/pexels-engin-akyurt-2673353.jpg",
          quantity: 1,
          type: "food",
          company: "8-11",
          category: "snacks"
        },
        {
          item: "Wings and Tings",
          price: 7.55,
          desc: "Satisfy your cravings for something savory and satisfying with our juicy and flavorful Chicken Wings. Marinated to perfection and cooked until crispy and golden, our wings are served with your choice of sauce and a side of blue cheese or ranch dressing.",
          image: "/images/item-images/pexels-dmitriy-ganin-7538068.jpg",
          quantity: 1,
          type: "food",
          company: "8-11",
          category: "snacks"
        },
        {
          item: "Smetzels",
          price: 2.15,
          desc: "Satisfy your cravings for something salty and savory with our soft and chewy Pretzels. Baked to perfection, our pretzels are lightly salted and served warm with a side of creamy mustard dipping sauce.",
          image: "/images/item-images/pexels-lisa-fotios-1894325.jpg",
          quantity: 1,
          type: "food",
          company: "8-11",
          category: "snacks"
        },
        {
          item: "Water",
          price: 1.25,
          desc: "Stay hydrated and refreshed with a crisp and refreshing glass of Water. Our water is sourced from pure and natural springs and is served chilled, providing a clean and pure taste that is perfect for any occasion.",
          image: "/images/item-images/pexels-elle-hughes-2101147.jpg",
          quantity: 1,
          type: "drink",
          company: "8-11",
          category: "snacks"
        },
        {
          item: "Gatorade",
          price: 1.25,
          desc: "Recharge and refuel with a thirst-quenching glass of Gatorade.",
          image: "/images/item-images/Screen Shot 2023-02-06 at 10.12.56 PM.png",
          quantity: 1,
          type: "drink",
          company: "8-11",
          category: "snacks"
        },
        {
          item: "Sprite",
          price: 1.25,
          desc: "Experience a burst of crisp and refreshing flavor with every sip of Sprite.",
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
          desc: "Savor the rich and savory flavors of our traditional Ramen. Our hearty soup features tender noodles and a flavorful broth, made with a blend of spices and ingredients that create a complex and satisfying taste.",
          image: "/images/item-images/pexels-jan-n-g-u-y-e-n-🍁-2664216.jpg",
          quantity: 1,
          type: "food",
          company: "Puth's Chriss",
          category: "finedine"
        },
        {
          item: "Wonton Sushi",
          price: 3.75,
          desc: "Indulge in the art of traditional Japanese cuisine with our fresh and flavorful Sushi. Each bite-sized piece is made with the finest ingredients, including tender cuts of fish, crisp vegetables, and sticky rice, all expertly rolled and arranged for maximum flavor and visual appeal.",
          image: "/images/item-images/pexels-frans-van-heerden-670705.jpg",
          quantity: 1,
          type: "food",
          company: "Puth's Chriss",
          category: "finedine"
        },
        {
          item: "Steak and Eggs",
          price: 10.45,
          desc: "Start your day off right with our classic Steak and Eggs. Our juicy and tender steak is cooked to your desired temperature and served alongside a fluffy and perfectly-cooked pair of eggs.",
          image: "/images/item-images/pexels-kasumi-loffler-3535383.jpg",
          quantity: 1,
          type: "food",
          company: "Puth's Chriss",
          category: "finedine"
        },
        {
          item: "Champagne",
          price: 1.25,
          desc: "Celebrate life's special moments with a glass of our sparkling Champagne. Made from the finest grapes and carefully crafted to create its signature effervescence, Champagne is the perfect choice for toasting to love, friendship, and all of life's other special occasions.",
          image: "/images/item-images/pexels-sabel-blanco-1835743.jpg",
          quantity: 1,
          type: "drink",
          company: "Puth's Chriss",
          category: "finedine"
        },
        {
          item: "Water",
          price: 1.25,
          desc: "Whether you're looking to quench your thirst or accompany your meal, our Water is the ideal choice. Indulge in this essential and timeless beverage, available now on the menu.",
          image: "/images/item-images/pexels-pixabay-416528.jpg",
          quantity: 1,
          type: "drink",
          company: "Puth's Chriss",
          category: "finedine"
        },
        {
          item: "Strawberry Lemonade",
          price: 1.25,
          desc: "Satisfy your sweet tooth and quench your thirst with our tangy and delicious Strawberry Lemonade. Made with fresh strawberries and tangy lemon juice, our lemonade is the perfect blend of sweet and tart flavors.",
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
          desc: "Satisfy your craving for something crunchy and salty with our crispy and buttery Crackers. Perfect for snacking on their own or paired with your favorite spread, our crackers are made with only the finest ingredients for a satisfying and delicious taste.",
          image: "/images/item-images/pexels-eva-bronzini-5965052.jpg",
          quantity: 1,
          type: "food",
          company: "Johnny's Liqour",
          category: "alcohol"
        },
        {
          item: "Salami",
          price: 1.05,
          desc: "Savor the rich and savory flavors of our premium Salami. Made with the finest cuts of pork and an expert blend of spices and herbs, our salami offers a bold and delicious taste that is perfect for snacking or adding to your favorite sandwich or charcuterie board.",
          image: "/images/item-images/pexels-mali-maeder-457444.jpg",
          quantity: 1,
          type: "food",
          company: "Johnny's Liqour",
          category: "alcohol"
        },
        {
          item: "Wine",
          price: 1.25,
          desc: "Indulge in the timeless sophistication of our carefully curated Wine selection. Featuring a range of varietals from the world's most renowned wine-producing regions, our wine list has something for every taste.",
          image: "/images/item-images/pexels-valeria-boltneva-1123260.jpg",
          quantity: 1,
          type: "drink",
          company: "Johnny's Liqour",
          category: "alcohol"
        },
        {
          item: "Titos Vodka",
          price: 1.25,
          desc: "Raise a glass and make a toast with our premium Tito's Vodka. Made from 100% corn and crafted in small batches, Tito's offers a smooth and clean taste that is perfect for sipping on its own or mixing into your favorite cocktail.",
          image: "/images/item-images/Screen Shot 2023-02-07 at 7.37.05 PM.png",
          quantity: 1,
          type: "drink",
          company: "Johnny's Liqour",
          category: "alcohol"
        },
        {
          item: "Hennessy",
          price: 1.25,
          desc: "Savor the rich and bold flavor of our premium Hennessy Cognac. Distilled and aged to perfection, Hennessy offers a complex and smooth taste that is perfect for sipping after a meal or mixing into your favorite cocktail.",
          image: "/images/item-images/pexels-funmiphotography-6895239.jpg",
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