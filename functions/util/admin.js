/* eslint-disable linebreak-style */
const admin = require('firebase-admin');

admin.initializeApp();

const db = admin.firestore();

// eslint-disable-next-line object-curly-spacing
module.exports = { admin, db };
