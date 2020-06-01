// ======================
// PUERTO
//=======================


process.env.PORT = process.env.PORT || 3000;

// ======================
// ENTORNOS
//=======================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ======================
// BASE DE DATOS
//=======================

let urlDB;

// if ( process.env.NODE_ENV === 'dev') {
//     urlDB = 'mongodb://localhost:27017/cloudapi';
// } else {
    urlDB = 'mongodb+srv://pipe473:GfdRF5drx9mdmuE1@cluster0-rnpty.mongodb.net/Cloudappi';
// }
process.env.URLDB = urlDB;
 
// GfdRF5drx9mdmuE1