import cake from "../images/cakes/cake.jpg";
import cakeTwo from "../images/cakes/cakeTwo.jpg";
import cakeThree from "../images/cakes/cakeThree.jpg";
import cookie from "../images/cookies/cookie.jpg";
import cookieTwo from "../images/cookies/cookieTwo.jpg";
import cookieThree from "../images/cookies/cookieThree.jpg";
import muffin from "../images/muffins/muffin.jpg";
import muffinTwo from "../images/muffins/muffinTwo.jpg";
import muffinThree from "../images/muffins/muffinThree.jpg";

const cakeImagePaths = [cake, cakeTwo, cakeThree];
const cookieImagePaths = [cookie, cookieTwo, cookieThree];
const muffinImagePaths = [muffin, muffinThree, muffinTwo];

const items = [
  {
    id: 1001,
    itemName: "Cake",
    itemPrice: 500,
    displayName: "Indulgent Chocolate Fudge Cake",
    description:
      "Experience pure bliss with our indulgent Chocolate Fudge Cake, a heavenly treat that will satisfy your sweet cravings and delight your taste buds.",
    image: cakeImagePaths[2],
  },
  {
    id: 1002,
    itemName: "Cake",
    itemPrice: 500,
    displayName: "Black Forest Cake",
    description:
      "Experience pure bliss with our indulgent Chocolate Fudge Cake, a heavenly treat that will satisfy your sweet cravings and delight your taste buds.",
    image: cakeImagePaths[1],
  },
  {
    id: 1003,
    itemName: "Cake",
    itemPrice: 500,
    displayName: "Choco Truffle Cake",
    description:
      "A decadent and exotic combination of melted chocolate and truffles augmented with a streak of white chocolate to top it off.",
    image: cakeImagePaths[2],
  },
  {
    id: 2001,
    itemName: "Cookie",
    itemPrice: 50,
    displayName: "Soft Centered Caramel Salt Cookie",
    description:
      "Egg based chocolate cookie with salted caramel centre.Size - 130 gms & 556 Kcal respectively. Allergen contains - wheat - Milk - eggs.",
    image: cookieImagePaths[0],
  },
  {
    id: 2002,
    itemName: "Cookie",
    itemPrice: 50,
    displayName: "Butter Almond Cookies",
    description:
      "The Crunch Of The Almond And The Warmth Of The Butter Will Have You Reaching For The Pack After Every Bite",
    image: cookieImagePaths[2],
  },
  {
    id: 2003,
    itemName: "Cookie",
    itemPrice: 50,
    displayName: "Oatmeal & Cranberry Cookies",
    description:
      "A soft and chewy oatmeal cookie with dried cranberries on the inside.",
    image: cookieImagePaths[1],
  },
  {
    id: 3001,
    itemName: "Muffin",
    itemPrice: 100,
    displayName: "Chocolate Muffin",
    description:
      "This Delicious Chocolate Muffin Made With Chocolate Chips And Rich Ganache Filling Is What Chocolatey Dreams Are Made Of.",
    image: muffinImagePaths[2],
  },
  {
    id: 3002,
    itemName: "Muffin",
    itemPrice: 100,
    displayName: "Moist Chocolate Muffins",
    description:
      "The muffins are incredibly rich, mega chocolate-y, and loaded with chocolate couverture in every single bite.",
    image: muffinImagePaths[0],
  },
  {
    id: 3003,
    itemName: "Muffin",
    itemPrice: 100,
    displayName: "Chocochips Muffin",
    description:
      "These Chocochips Chip Muffins Are Moist, Tender, And Deliciously Chocolaty.",
    image: muffinImagePaths[1],
  },
  {
    id: 1004,
    itemName: "Cake",
    itemPrice: 500,
    displayName: "Choco Truffle Cake",
    description:
      "A decadent and exotic combination of melted chocolate and truffles augmented with a streak of white chocolate to top it off.",
    image: cakeImagePaths[2],
  },
  {
    id: 1005,
    itemName: "Cake",
    itemPrice: 500,
    displayName: "Black Forest Cake",
    description:
      "Experience pure bliss with our indulgent Chocolate Fudge Cake, a heavenly treat that will satisfy your sweet cravings and delight your taste buds.",
    image: cakeImagePaths[1],
  },
  {
    id: 2004,
    itemName: "Cookie",
    itemPrice: 50,
    displayName: "Oatmeal & Cranberry Cookies",
    description:
      "A soft and chewy oatmeal cookie with dried cranberries on the inside.",
    image: cookieImagePaths[2],
  },
  {
    id: 2005,
    itemName: "Cookie",
    itemPrice: 50,
    displayName: "Butter Almond Cookies",
    description:
      "The Crunch Of The Almond And The Warmth Of The Butter Will Have You Reaching For The Pack After Every Bite",
    image: cookieImagePaths[0],
  },
  {
    id: 3004,
    itemName: "Muffin",
    itemPrice: 100,
    displayName: "Chocochips Muffin",
    description:
      "These Chocochips Chip Muffins Are Moist, Tender, And Deliciously Chocolaty.",
    image: muffinImagePaths[2],
  },
  {
    id: 3005,
    itemName: "Muffin",
    itemPrice: 100,
    displayName: "Chocochips Muffin",
    description:
      "These Chocochips Chip Muffins Are Moist, Tender, And Deliciously Chocolaty.",
    image: muffinImagePaths[1],
  },
];

export default items;
