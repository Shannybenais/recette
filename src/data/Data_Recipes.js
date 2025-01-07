// src/data/Data_Recipes.js

const recipes = [
  {
      title: "Pizza au poulet",
      image: "/img/gallery/img_1.jpg",
      authorImg: "/img/top-chiefs/img_1.jpg",
  },
  {
      title: "Spaghettis aux boulettes de viande",
      image: "/img/gallery/img_4.jpg",
      authorImg: "/img/top-chiefs/img_2.jpg",
  },
  {
      title: "Cheese Burger",
      image: "/img/gallery/img_5.jpg",
      authorImg: "/img/top-chiefs/img_3.jpg",
  },
  {
      title: "Biryani au mouton",
      image: "/img/gallery/img_6.jpg",
      authorImg: "/img/top-chiefs/img_5.jpg",
  },
  {
      title: "Sushi japonais",
      image: "/img/gallery/img_10.jpg",
      authorImg: "/img/top-chiefs/img_6.jpg",
  },
].sort(() => Math.random() - 0.5);

export default recipes;
