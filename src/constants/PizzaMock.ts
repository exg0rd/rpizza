import { Product } from "../components/shared/ProductCard";

const PizzaMockData: Product[] = [
  {
    "productId": "P001",
    "imageUrl": "https://media.dodostatic.net/image/r:584x584/11EEF9E43DC39C94AA5765DBF1C97100.avif",
    "name": "Margherita Pizza",
    "price": 9.99,
    "description": "Classic Margherita pizza with tomato sauce, mozzarella cheese, and fresh basil.",
    "type": "Pizza"
  },
  {
    "productId": "P002",
    "imageUrl": "https://media.dodostatic.net/image/r:584x584/11EEF9E43DC39C94AA5765DBF1C97100.avif",
    "name": "Pepperoni Pizza",
    "price": 11.99,
    "description": "Pepperoni pizza topped with spicy pepperoni slices and mozzarella cheese.",
    "type": "Pizza"
  },
  {
    "productId": "P003",
    "imageUrl": "https://media.dodostatic.net/image/r:584x584/11EEF9E43DC39C94AA5765DBF1C97100.avif",
    "name": "BBQ Chicken Pizza",
    "price": 12.99,
    "description": "BBQ chicken pizza with grilled chicken, BBQ sauce, red onions, and mozzarella cheese.",
    "type": "Pizza"
  },
  {
    "productId": "P004",
    "imageUrl": "https://media.dodostatic.net/image/r:584x584/11EEF9E43DC39C94AA5765DBF1C97100.avif",
    "name": "Vegetarian Pizza",
    "price": 10.99,
    "description": "Vegetarian pizza loaded with bell peppers, mushrooms, onions, olives, and mozzarella cheese.",
    "type": "Pizza"
  },
  {
    "productId": "P005",
    "imageUrl": "https://media.dodostatic.net/image/r:584x584/11EEF9E43DC39C94AA5765DBF1C97100.avif",
    "name": "Hawaiian Pizza",
    "price": 11.49,
    "description": "Hawaiian pizza with ham, pineapple, and mozzarella cheese on a tomato sauce base.",
    "type": "Pizza"
  },
  {
    "productId": "S001",
    "imageUrl": "https://media.dodostatic.net/image/r:584x584/11EEF9E43DC39C94AA5765DBF1C97100.avif",
    "name": "Garlic Breadsticks",
    "price": 4.99,
    "description": "Crispy garlic breadsticks served with marinara sauce.",
    "type": "Side"
  },
  {
    "productId": "S002",
    "imageUrl": "https://media.dodostatic.net/image/r:584x584/11EEF9E43DC39C94AA5765DBF1C97100.avif",
    "name": "Cheesy Garlic Bread",
    "price": 5.99,
    "description": "Soft garlic bread topped with melted mozzarella cheese.",
    "type": "Side"
  },
  {
    "productId": "D001",
    "imageUrl": "https://media.dodostatic.net/image/r:584x584/11EEF9E43DC39C94AA5765DBF1C97100.avif",
    "name": "Tiramisu",
    "price": 6.99,
    "description": "Classic Italian dessert made with ladyfingers dipped in coffee, layered with mascarpone cream.",
    "type": "Dessert"
  },
  {
    "productId": "D002",
    "imageUrl": "https://media.dodostatic.net/image/r:584x584/11EEF9E43DC39C94AA5765DBF1C97100.avif",
    "name": "Chocolate Lava Cake",
    "price": 7.99,
    "description": "Warm chocolate cake with a molten chocolate center, served with vanilla ice cream.",
    "type": "Dessert"
  },
  {
    "productId": "B001",
    "imageUrl": "https://media.dodostatic.net/image/r:584x584/11EEF9E43DC39C94AA5765DBF1C97100.avif",
    "name": "Coca-Cola",
    "price": 2.49,
    "description": "Refreshing Coca-Cola soft drink.",
    "type": "Beverage"
  },
  {
    "productId": "B002",
    "imageUrl": "https://media.dodostatic.net/image/r:584x584/11EEF9E43DC39C94AA5765DBF1C97100.avif",
    "name": "Sprite",
    "price": 2.49,
    "description": "Lemon-lime flavored soft drink.",
    "type": "Beverage"
  },
  {
    "productId": "P006",
    "imageUrl": "https://media.dodostatic.net/image/r:584x584/11EEF9E43DC39C94AA5765DBF1C97100.avif",
    "name": "Meat Lover's Pizza",
    "price": 13.99,
    "description": "Pizza topped with pepperoni, ham, sausage, and bacon.",
    "type": "Pizza"
  },
  {
    "productId": "P007",
    "imageUrl": "https://media.dodostatic.net/image/r:584x584/11EEF9E43DC39C94AA5765DBF1C97100.avif",
    "name": "Four Cheese Pizza",
    "price": 11.99,
    "description": "Pizza with mozzarella, cheddar, parmesan, and blue cheese.",
    "type": "Pizza"
  },
  {
    "productId": "S003",
    "imageUrl": "https://media.dodostatic.net/image/r:584x584/11EEF9E43DC39C94AA5765DBF1C97100.avif",
    "name": "Chicken Wings",
    "price": 7.99,
    "description": "Spicy buffalo chicken wings served with ranch dressing.",
    "type": "Side"
  },
  {
    "productId": "D003",
    "imageUrl": "https://media.dodostatic.net/image/r:584x584/11EEF9E43DC39C94AA5765DBF1C97100.avif",
    "name": "New York Cheesecake",
    "price": 8.99,
    "description": "Rich and creamy New York-style cheesecake.",
    "type": "Dessert"
  },
  {
    "productId": "B003",
    "imageUrl": "https://media.dodostatic.net/image/r:584x584/11EEF9E43DC39C94AA5765DBF1C97100.avif",
    "name": "Lemonade",
    "price": 2.49,
    "description": "Freshly squeezed lemonade.",
    "type": "Beverage"
  },
  {
    "productId": "P008",
    "imageUrl": "https://media.dodostatic.net/image/r:584x584/11EEF9E43DC39C94AA5765DBF1C97100.avif",
    "name": "Supreme Pizza",
    "price": 12.49,
    "description": "Pizza loaded with pepperoni, mushrooms, green peppers, onions, sausage, and olives.",
    "type": "Pizza"
  },
  {
    "productId": "P009",
    "imageUrl": "https://media.dodostatic.net/image/r:584x584/11EEF9E43DC39C94AA5765DBF1C97100.avif",
    "name": "White Pizza",
    "price": 11.49,
    "description": "Pizza with ricotta cheese, mozzarella, garlic, and spinach.",
    "type": "Pizza"
  },
  {
    "productId": "S004",
    "imageUrl": "https://media.dodostatic.net/image/r:584x584/11EEF9E43DC39C94AA5765DBF1C97100.avif",
    "name": "Caesar Salad",
    "price": 6.99,
    "description": "Fresh romaine lettuce tossed with Caesar dressing, croutons, and parmesan cheese.",
    "type": "Side"
  }
]

export default PizzaMockData;