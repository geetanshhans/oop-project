const SHOP_DATA = {
    fruits : {
      id: 1,
      title: "Fruits",
      routeName: "fruits",
      items: [
        {
          id: 1,
          name: "Pineapple",
          imageUrl: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
          price: 100,
        },
        {
          id: 2,
          name: "Apples",
          imageUrl: "https://images.unsplash.com/photo-1600423115367-87ea7661688f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
          price: 200,
        },
        {
          id: 3,
          name: "Avocado",
          imageUrl: "https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
          price: 35,
        },
        {
          id: 4,
          name: "Strawberry",
          imageUrl: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
          price: 25,
        },
        {
          id: 5,
          name: "Papaya",
          imageUrl: "https://images.unsplash.com/photo-1517282009859-f000ec3b26fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
          price: 18,
        },
        {
          id: 6,
          name: "Banana",
          imageUrl: "https://images.unsplash.com/photo-1579523360587-1e2613000ee3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
          price: 14,
        },
        {
          id: 7,
          name: "Orange",
          imageUrl: "https://images.unsplash.com/photo-1552089123-2d26226fc2b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
          price: 18,
        }
      ],
    },
    vegetables: {
      id: 2,
      title: "Vegetables",
      routeName: "vegetables",
      items: [
        {
          id: 10,
          name: "Tomatoes",
          imageUrl: "https://images.unsplash.com/photo-1558818498-28c1e002b655?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHZlZ2V0YWJsZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
          price: 22,
        },
        {
          id: 11,
          name: "Potatoes",
          imageUrl: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHZlZ2V0YWJsZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
          price: 28,
        },
        {
          id: 12,
          name: "Carrots",
          imageUrl: "https://images.unsplash.com/photo-1572527129705-a6c197003d61?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHZlZ2V0YWJsZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
          price: 30,
        },
        {
          id: 13,
          name: "Cucumber",
          imageUrl: "https://images.unsplash.com/photo-1611048661702-7b55eed346b4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fHZlZ2V0YWJsZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
          price: 16,
        },
        {
          id: 14,
          name: "Onions",
          imageUrl: "https://images.unsplash.com/photo-1508747703725-719777637510?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fHZlZ2V0YWJsZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
          price: 30,
        },
        {
          id: 15,
          name: "Bell Pepper",
          imageUrl: "https://images.unsplash.com/photo-1506365069540-904bcc762636?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE3fHx2ZWdldGFibGVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
          price: 160,
        },
        {
          id: 16,
          name: "Cauliflower",
          imageUrl: "https://images.unsplash.com/photo-1510627498534-cf7e9002facc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHZlZ2V0YWJsZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
          price: 190,
        },
        {
          id: 17,
          name: "Lady Finger",
          imageUrl: "https://images.unsplash.com/photo-1425543103986-22abb7d7e8d2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fHZlZ2V0YWJsZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
          price: 200,
        },
      ],
    },
    dairy: {
      id: 3,
      title: "Dairy Products",
      routeName: "dairy",
      items: [
        {
          id: 18,
          name: "Black Jean Shearling",
          imageUrl: "https://i.ibb.co/XzcwL5s/black-shearling.png",
          price: 125,
        },
        {
          id: 19,
          name: "Blue Jean Jacket",
          imageUrl: "https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",
          price: 90,
        },
        {
          id: 20,
          name: "Grey Jean Jacket",
          imageUrl: "https://i.ibb.co/N71k1ML/grey-jean-jacket.png",
          price: 90,
        },
        {
          id: 21,
          name: "Brown Shearling",
          imageUrl: "https://i.ibb.co/s96FpdP/brown-shearling.png",
          price: 165,
        },
        {
          id: 22,
          name: "Tan Trench",
          imageUrl: "https://i.ibb.co/M6hHc3F/brown-trench.png",
          price: 185,
        },
      ],
    },
    beverages: {
      id: 4,
      title: "Beverages",
      routeName: "beverages",
      items: [
        {
          id: 23,
          name: "Blue Tanktop",
          imageUrl: "https://i.ibb.co/7CQVJNm/blue-tank.png",
          price: 25,
        },
        {
          id: 24,
          name: "Floral Blouse",
          imageUrl: "https://i.ibb.co/4W2DGKm/floral-blouse.png",
          price: 20,
        },
        {
          id: 25,
          name: "Floral Dress",
          imageUrl: "https://i.ibb.co/KV18Ysr/floral-skirt.png",
          price: 80,
        },
        {
          id: 26,
          name: "Red Dots Dress",
          imageUrl: "https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",
          price: 80,
        },
        {
          id: 27,
          name: "Striped Sweater",
          imageUrl: "https://i.ibb.co/KmSkMbH/striped-sweater.png",
          price: 45,
        },
        {
          id: 28,
          name: "Yellow Track Suit",
          imageUrl: "https://i.ibb.co/v1cvwNf/yellow-track-suit.png",
          price: 135,
        },
        {
          id: 29,
          name: "White Blouse",
          imageUrl: "https://i.ibb.co/qBcrsJg/white-vest.png",
          price: 20,
        },
      ],
    },
    snacks: {
      id: 5,
      title: "Snacks",
      routeName: "snacks",
      items: [
        {
          id: 30,
          name: "Camo Down Vest",
          imageUrl: "https://i.ibb.co/xJS0T3Y/camo-vest.png",
          price: 325,
        },
        {
          id: 31,
          name: "Floral T-shirt",
          imageUrl: "https://i.ibb.co/qMQ75QZ/floral-shirt.png",
          price: 20,
        },
        {
          id: 32,
          name: "Black & White Longsleeve",
          imageUrl: "https://i.ibb.co/55z32tw/long-sleeve.png",
          price: 25,
        },
        {
          id: 33,
          name: "Pink T-shirt",
          imageUrl: "https://i.ibb.co/RvwnBL8/pink-shirt.png",
          price: 25,
        },
        {
          id: 34,
          name: "Jean Long Sleeve",
          imageUrl: "https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",
          price: 40,
        },
        {
          id: 35,
          name: "Burgundy T-shirt",
          imageUrl: "https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",
          price: 25,
        },
      ],
    },
  };
  
  export default SHOP_DATA;
  