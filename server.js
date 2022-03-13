const express = require("express");
const app = express();

//Definisanje porta
const port=3000;

app.get("/", (req, res) => {
  res.send('Zdravo svete!')
})

//Pokretanje aplikacije
app.listen(port, () => {
  console.log(`Primer aplikacije koja slusa na portu ${port}`);
});
