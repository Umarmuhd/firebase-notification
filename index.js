const admin = require("firebase-admin");
const serviceAccount = require("./service-key.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

const registrationToken =
    "Your Device Token Here";

const message = {
    token: registrationToken,
    data: {
        title: "Notification Title",
        body: "Notification Body"
    },
};

admin
    .messaging()
    .send(message)
    .then((response) => console.log(response))
    .catch((error) => console.log(error));


