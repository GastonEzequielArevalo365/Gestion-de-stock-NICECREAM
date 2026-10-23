
const express = require('express');
const path = require('path'); 
const cors = require('cors');
const multer = require('multer');

const { sequelize } = require('./models'); // Ajustá la ruta si tu carpeta models está en otra ubicación (ej: './src/models')

const app = express();
const routes = require('./routes');
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Servir estáticos
app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));
// Montar rutas individualmente 
app.use('/', routes.racksRoute);
app.use('/', routes.callesRoute);
app.use('/', routes.palletsRoute);
app.use('/', routes.maquinasRoute);

sequelize.sync({ force: false }).then(() => {
    console.log("Base de datos reiniciada por completo.");
    
    app.listen(PORT, "0.0.0.0", () => {
        console.log(`Servidor escuchando en el puerto ${PORT}`);
    });
}).catch((error) => {
    console.error("Error al sincronizar la base de datos:", error);
});