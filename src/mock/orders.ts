export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const month = "12";

// The product data is taken from Free online REST API fakestoreapi.com

const mockSales = [
  {
    id: 1,
    productId: 101,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    category: "men's clothing",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    unitSold: getRandomInt(10, 100),
    date: `01-${month}-2023`,
  },
  {
    id: 2,
    productId: 102,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    category: "men's clothing",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    unitSold: getRandomInt(10, 100),
    date: `02-${month}-2023`,
  },
  {
    id: 3,
    productId: 103,
    title: "Mens Cotton Jacket",
    category: "men's clothing",
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    unitSold: getRandomInt(10, 100),
    date: `02-${month}-2023`,
  },
  {
    id: 4,
    productId: 104,
    title: "Mens Casual Slim Fit",
    category: "men's clothing",
    price: 15.99,
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    unitSold: getRandomInt(10, 100),
    date: `04-${month}-2023`,
  },
  {
    id: 5,
    productId: 105,
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    category: "jewelry",
    price: 695,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    unitSold: getRandomInt(10, 100),
    date: `05-${month}-2023`,
  },
  {
    id: 6,
    productId: 106,
    title: "Solid Gold Petite Micropave ",
    category: "jewelry",
    price: 168,
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    unitSold: getRandomInt(10, 100),
    date: `06-${month}-2023`,
  },
  {
    id: 7,
    productId: 107,
    title: "White Gold Plated Princess",
    category: "jewelry",
    price: 9.99,
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    unitSold: getRandomInt(10, 100),
    date: `07-${month}-2023`,
  },
  {
    id: 8,
    productId: 108,
    title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    category: "jewelry",
    price: 10.99,
    description:
      "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    unitSold: getRandomInt(10, 100),
    date: `08-${month}-2023`,
  },
  {
    id: 9,
    productId: 109,
    title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    category: "electronics",
    price: 64,
    description:
      "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    unitSold: getRandomInt(10, 100),
    date: `09-${month}-2023`,
  },
  {
    id: 10,
    productId: 110,
    title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    category: "electronics",
    price: 109,
    description:
      "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    unitSold: getRandomInt(10, 100),
    date: `10-${month}-2023`,
  },
];

export default mockSales;
