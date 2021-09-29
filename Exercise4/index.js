/* TEST CASES
POST http://localhost:4000/products {"isBestSeller": "true","image": "product02.jpg","name": "Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PS4, & Xbox - 1-Year Rescue Service (STGX2000400)","rating": "4.5","voter": "153913","price": "60","price0": "62.99","shipDate": "Wed, Sep 29","shipFee": "33.58","morePricesLowest": "47.94","morePricesCount": "8","manufacturer": "Seagate","category": "Hard Drive","description":"Easily store and access 2TB of content on the go with the Seagate Portable Drive, a great laptop hard drive. Designed to work with Windows or Mac computers, this compact external hard drive makes backup a snap. Just drag and drop To get set up, connect the portable hard drive to a computer for automatic recognition—no software required—and enjoy plug and play simplicity with the included 18 inch USB 3.0 cable."}
GET http://localhost:4000/products
GET http://localhost:4000/products/...
  product id
PUT http://localhost:4000/products/... {"isBestSeller": true,"image": "product02.jpg","name": "modified Name","rating": "4.5","voter": "9999","price": "11.11","price0": "22.22","shipDate": "Wed, Sep 29","shipFee": "","morePricesLowest": "47.94","morePricesCount": "8","manufacturer": "modied manufacturer","category": "modified category"}
  product id
PUT http://localhost:4000/products/33 {"isBestSeller": true,"image": "product02.jpg","name": "modified Name","rating": "4.5","voter": "9999","price": "11.11","price0": "22.22","shipDate": "Wed, Sep 29","shipFee": "","morePricesLowest": "47.94","morePricesCount": "8","manufacturer": "modied manufacturer","category": "modified category"}
GET http://localhost:4000/products/search?name=sea
GET http://localhost:4000/products/search?name=Sea
GET http://localhost:4000/products/search?name=webfw
GET http://localhost:4000/products/search?name=2tb
GET http://localhost:4000/products/search?name=2tb&category=Hard%20drive
GET http://localhost:4000/products/search?name=2tb&category=Hard%20drive&manufacturer=seagate
GET http://localhost:4000/products/search?name=2tb&category=Hard%20drive&manufacturer=seagate222
GET http://localhost:4000/products/search?category=Hard%20drive&manufacturer=seagate
POST http://localhost:4000/users {"name":"Billy","email":"bill@oamk.fi","address":"900 Adam Street, Helsinki, Finland"}
GET http://localhost:4000/users
POST http://localhost:4000/invoices {"userId":...,"boughtProducts":[{"productId":...,"amount":5},{"productId":...,"amount":10}]}
  user id, product id, product id
GET http://localhost:4000/invoices
GET http://localhost:4000/invoices/search?userId=...
GET http://localhost:4000/invoices/...
  invoice id
DELETE http://localhost:4000/invoices/...
  invoice id
*/

const express = require('express');
const app = express();
const port = 4000;
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');

let products = [
  // {
  //   id: uuidv4(),
  //   isBestSeller: false,
  //   image: "product01.jpg",
  //   name: "Roku Express 4K+ 2021 | Streaming Media Player HD/4K/HDR with Smooth Wireless Streaming and Roku Voice Remote with TV Controls, Includes Premium HDMI Cable",
  //   rating: 4.5,
  //   voter: 5894,
  //   price: 2000,
  //   price0: 3999,
  //   shipDate: "Wed, Sep 29",
  //   shipFee: 3370,
  //   cert: "Works with Alexa",
  //   manufacturer: "Roku",
  //   category: "Media Player",
  //   description: "Roku Express 4K+ is the easy way to start streaming in brilliant 4K picture and vivid HDR color. Enjoy a smooth streaming experience with faster wireless performance, even with multiple streaming devices connected to your network. Power up your TV, adjust the volume, and control your streaming with the included Roku Voice Remote. Use your voice to quickly search, turn captions on, and more. Best of all, Roku streaming gives you a massive selection of free and live TV, and a customizable home screen with your favorite channels front and center, like Netflix, HBO Max, YouTube, Disney Plus, and Prime Video. Setup is a cinch with everything you need in the box, including a Premium High Speed HDMI® Cable. Roku Express 4K+ also works with popular voice assistants. Ask Alexa or Hey Google to launch channels, search for entertainment, control your streaming, and more. You can also control your TV using the Apple Home app or Siri on your Apple devices."
  // }
];

let users = [
  // {
  //   id: uuidv4(),
  //   name: 'John',
  //   email: 'john@gmail.com',
  //   address: '123 Eve Street, Oulu, Finland'
  // }
];

let invoices = [
  // {
  //   id: uuidv4(),
  //   userId: 1,
  //   boughtProducts: [{ productId: 1, amount: 10 }],
  //   totalSum: 20000,
  //   date: "2021-09-29T08:56:29.176Z"
  // }
];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// INDEX PAGE
app.get('/', (req, res) => {
  res.send('Hello World!')
});

// PRODUCTS
app.get('/products', (req, res) => {
  res.json(products);
});

app.get('/products/search', (req, res) => {
  if (!req.query || Object.keys(req.query).length == 0) {
    res.sendStatus(400);
    return
  };

  let { name, manufacturer, category } = req.query;

  name = name?.toLowerCase() || '';
  manufacturer = manufacturer?.toLowerCase() || '';
  category = category?.toLowerCase() || '';

  res.json(products.filter(product => {
    return product.name.toLowerCase().includes(name)
      && product.manufacturer.toLowerCase().includes(manufacturer)
      && product.category.toLowerCase().includes(category)
  }));
});

app.get('/products/:id', (req, res) => {
  let { id } = req.params;
  const foundProducts = products.find(product => product.id === id);
  if (foundProducts){
    res.json(foundProducts);
  } else {
    res.send('No such product with id ' + id);
  }
  
});

app.post('/products', (req, res) => {
  if (!req.body || Object.keys(req.body).length == 0) {
    res.sendStatus(400);
    return
  };

  detectNumeric(req.body);
  let { isBestSeller, image, name, rating, voter, price, price0, shipDate, shipFee, cert, manufacturer, category, description, morePricesLowest, morePricesCount } = req.body;
  price *= 100;
  price0 *= 100;
  shipFee *= 100;
  morePricesLowest *= 100;

  isBestSeller = isBestSeller ? true : false;

  const id = uuidv4();
  products.push({ id, isBestSeller, image, name, rating, voter, price, price0, shipDate, shipFee, cert, manufacturer, category, description, morePricesLowest, morePricesCount });
  res.send('Product created successfully.');
});

app.put('/products/:id', (req, res) => {
  if (!req.body || Object.keys(req.body).length == 0) {
    res.sendStatus(400);
    return
  };

  detectNumeric(req.body);
  let { id } = req.params;
  let { isBestSeller, image, name, rating, voter, price, price0, shipDate, shipFee, cert, manufacturer, category, description, morePricesLowest, morePricesCount } = req.body;
  price *= 100;
  price0 *= 100;
  shipFee *= 100;
  morePricesLowest *= 100;
  isBestSeller = isBestSeller ? true : false;
  const matchedIndex = products.findIndex(product => product.id === id);
  if (matchedIndex !== -1) {
    products[matchedIndex] = { id, isBestSeller, image, name, rating, voter, price, price0, shipDate, shipFee, cert, manufacturer, category, description, morePricesLowest, morePricesCount };
    res.send('Product modified successfully.');
  } else {
    res.send('No such product!!!');
  }
});

app.delete('/products/:id', (req, res) => {
  let { id } = req.params;
  const matchedIndex = products.findIndex(product => product.id === id);
  if (matchedIndex !== -1) {
    products.splice(matchedIndex, 1);
    res.send('Product deleted successfully.');
  } else {
    res.send('No such product!!!');
  }
});

// USERS
app.get('/users', (req, res) => {
  res.json(users);
});

app.get('/users/:id', (req, res) => {
  let { id } = req.params;
  res.json(users.find(user => user.id === id));
});

app.post('/users', (req, res) => {
  if (!req.body || Object.keys(req.body).length == 0) {
    res.sendStatus(400);
    return
  };
  
  const { name, email, address } = req.body;
  const id = uuidv4();
  users.push({ id, name, email, address });
  res.send('New user created successfully.');
});

// INVOICES
app.get('/invoices', (req, res) => {
  res.json(invoices);
});

app.get('/invoices/search', (req, res) => {
  if (!req.query || Object.keys(req.query).length == 0) {
    res.sendStatus(400);
    return
  };

  let { userId } = req.query;

  res.json(invoices.filter(invoice => {
    return invoice.userId === userId;
  }));
});

app.get('/invoices/:id', (req, res) => {
  let { id } = req.params;
  res.json(invoices.find(invoice => invoice.id === id));
});

app.post('/invoices', (req, res) => {
  if (!req.body || Object.keys(req.body).length == 0) {
    return
  };
  
  const { userId, boughtProducts } = req.body;
  if (!users.find( user => user.id === userId )) {
    res.send('Error! All id(s) must be valid.');
    return
  };
  
  const id = uuidv4();
  let totalSum = 0;
  const date = new Date();

  for (let boughtProduct of boughtProducts) {
    const productId = boughtProduct.productId;
    const amount = boughtProduct.amount;
    const matchedProduct = products.find(product => product.id === productId);

    if (matchedProduct) {
      const price = matchedProduct.price || 0;
      totalSum += price * amount;
    } else {
      res.send('Error! All id(s) must be valid.');
      return
    }
  }

  invoices.push({ id, userId, boughtProducts, totalSum, date });

  res.send('New invoice created successfully.');
});

app.delete('/invoices/:id', (req, res) => {
  let { id } = req.params;
  const matchedIndex = invoices.findIndex(invoice => invoice.id === id);
  if (matchedIndex !== -1) {
    invoices.splice(matchedIndex, 1);
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
  ;

function detectNumeric(obj) {
    for (var key in obj) {
        if (obj[key]==''){
          obj[key] = '';
        } else if (!isNaN(obj[key])) {
            obj[key] = Number(obj[key]);
        } else if (typeof obj === "object") {
            detectNumeric(obj[key]);
        }
    }
}
