// create custom server

const next = require( 'next' );
const express = require( 'express' );
const wooConfig = require('./wooConfig');

// Woocommerce Api keys
var WooCommerceAPI = require('woocommerce-api');
 
var WooCommerce = new WooCommerceAPI({
  url: wooConfig.siteUrl,
  consumerKey: wooConfig.consumerKey,
  consumerSecret: wooConfig.consumerSecret,
  wpAPI: true,
  version: 'wc/v2'
});

const port = 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

// Route not defined by express should be handled by next js
const handle = app.getRequestHandler()

//Prepare our App
app.prepare().then(() => {
    const server = express();
    // Create Route to display all products
    server.get('/products', (req, response) => {
        WooCommerce.get("products", function(err, data, res ) {
            response.json( JSON.parse(res) );
        });
      
    });


    server.get( '*', (req, res) => {
        return  handle(req, res);
    });

    server.listen(port, (err) => {
    if (err) throw err
    console.log(`Ready on http://localhost:${port}`);
    })   
}).catch(ex => {
    console.error(ex.stack);
    process.exit(1);
});
