export interface Item {
  id: number;
  name: string;
  price: number;
  category: number;
  imgUrl: string;
}

export const items = {
  //Produce--------------------
  1: [
    {
      id: 1,
      name: 'Apple',
      price: 0.5,
      imgUrl: '../../assets/img/apples.png',
    },
    {
      id: 2,
      name: 'Bananas',
      price: 1.5,
      imgUrl: '',
    },
    {
      id: 3,
      name: 'Orange',
      price: 0.5,
      imgUrl: '',
    },
    {
      id: 4,
      name: 'Strawberries',
      price: 1,
      imgUrl: '',
    },
    {
      id: 5,
      name: 'Blueberries',
      price: 0.75,
      imgUrl: '',
    },
    {
      id: 6,
      name: 'Tomato',
      price: 0.35,
      imgUrl: '',
    },
    {
      id: 7,
      name: 'Lettuce',
      price: 0.25,
      imgUrl: '',
    },
    {
      id: 8,
      name: 'Carrots',
      price: 0.1,
      imgUrl: '',
    },
    {
      id: 9,
      name: 'Broccoli',
      price: 0.25,
      imgUrl: '',
    },
    {
      id: 10,
      name: 'Potato',
      price: 0.5,
      imgUrl: '',
    },
  ],
  //Meats--------------------

  2: [
    {
      id: 11,
      name: 'Steak',
      price: 5,
      imgUrl: '',
    },
    {
      id: 12,
      name: 'Ground Beef',
      price: 8,
      imgUrl: '',
    },
    {
      id: 13,
      name: 'Pork Tenderloin',
      price: 10,
      imgUrl: '',
    },
    {
      id: 14,
      name: 'Chicken Breast',
      price: 6,
      imgUrl: '',
    },
    {
      id: 15,
      name: 'Salmon',
      price: 6,
      imgUrl: '',
    },
  ],
  //Dairy--------------------

  3: [
    {
      id: 16,
      name: 'Milk',
      price: 1.5,
      imgUrl: '',
    },
    {
      id: 17,
      name: 'Cheese',
      price: 2,
      imgUrl: '',
    },
    {
      id: 18,
      name: 'Yogurt',
      price: 2.5,
      imgUrl: '',
    },
    {
      id: 19,
      name: 'Butter',
      price: 1.5,
      imgUrl: '',
    },
    {
      id: 20,
      name: 'Sour Cream',
      price: 2,
      imgUrl: '',
    },
  ],
  //Grains--------------------

  4: [
    {
      id: 21,
      name: 'Bread',
      price: 2.5,
      imgUrl: '',
    },
    {
      id: 22,
      name: 'Rice',
      price: 1,
      imgUrl: '',
    },
    {
      id: 23,
      name: 'Pasta',
      price: 2,
      imgUrl: '',
    },
    {
      id: 24,
      name: 'Oatmeal',
      price: 1.5,
      imgUrl: '',
    },
    {
      id: 25,
      name: 'Quinoa',
      price: 1.5,
      imgUrl: '',
    },
  ],
  //Miscellaneous--------------------

  5: [
    {
      id: 26,
      name: 'Eggs',
      price: 4,
      imgUrl: '',
    },
    {
      id: 27,
      name: 'Flour',
      price: 2,
      imgUrl: '',
    },
    {
      id: 28,
      name: 'Sugar',
      price: 2.5,
      imgUrl: '',
    },
    {
      id: 29,
      name: 'Coffee',
      price: 3,
      imgUrl: '',
    },
    {
      id: 30,
      name: 'Almonds',
      price: 5,
      imgUrl: '',
    },
  ],
};
