const express = require("express")
const app = express();
const controllerRoute = require("./routes/main")
require('dotenv').config();


const PORT = process.env.PORT || 3000

app.use(express.json())

app.use('/health', controllerRoute)


app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT} `)
});