
import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
const app = express();

// Définir le moteur de template sur EJS
app.set('view engine', 'ejs');

// Définir le répertoire des vues (facultatif, par défaut c'est 'views')
app.set('views', './views');

// Utiliser body-parser pour parser les requêtes POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

let produits = [
    { libelle: 'Produit 1', price: 10 },
    { libelle: 'Produit 2', price: 20 },
    { libelle: 'Produit 3', price: 30 },
];

// Route pour afficher le formulaire
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: '.' });
});

app.post('/produit', (req, res) => {
    const { libelle, price } = req.body;
    produits.push({ libelle, price });
    res.render('produits', { produits });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
