require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
    body: 'Welcome to the BikeShop! Thank you for reaching out!',
    from: '+16109786144',
    to: '+17863093838'
  })
  .then((message) => console.log(message.sid))
  .catch((err) => console.log(err));
