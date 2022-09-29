import * as functions from "firebase-functions";

const Razorpay = require('razorpay');
var whitelist = [
  'http://localhost',
  'https://nayasa-jewel.web.app/',
  'http://madhavaseva.com/',
  'https://madhavaseva.com/',
];
let request = require('request');

var corsOptions = {
  origin: function (origin: any, callback: any) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};
const cors = require('cors')(corsOptions);
// // ---- Live keys ----
// let key_id = 'rzp_live_LTSMhdtNEzFwX1';

// let key_secret = 'y9I1tL7UXR0IAzY7KCbczPKy';
// --- Dev keys ----
const key_id:string = 'rzp_test_1QmrWfuaKyfY4l';
const key_secret:string = '23r4uJVYkIMPibY9gFaCdS2U';

let instance = new Razorpay({
  key_id: key_id,
  key_secret: key_secret,
});


// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.createOrder = functions.https.onRequest((req: any, res: any) => {
  return cors(req, res, () => {
    let options = {
      amount: req.body.amount,
      currency: 'INR',
      receipt: req.body.receipt,
    };
    instance.orders.create(options, (err: any, order: any) => {
      order ? res.status(200).send(order) : res.status(500).send(err);
    });
  });
});

exports.capturePayments = functions.https.onRequest((req: any, res: any) => {
  return cors(req, res, () => {
    request(
      {
        method: 'POST',
        url: `https://${key_id}:${key_secret}@api.razorpay.com/v1/payments/${req.body.payment_id}/capture`,
        form: {
          amount: req.body.amount,
        },
      },
      (error: any, response: any, body: any) => {
        response
          ? res.status(200).send({
              res: response,
              req: req.body,
              body: body,
            })
          : res.status(500).send(error);
      }
    );
  });
});
