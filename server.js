// Ucitavanje HTTP modula
const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

// Kreiranje HTTP servera
const server = http.createServer(function(req, res) {

   // Postavljanje odgovora HTTP zaglavlja da sadrzi HTTP status i tip sadrzaja 
   res.writeHead(200, {'Content-Type': 'text/plain'});

   // Slanje odgovora u body sekciji
   res.send('Zdravo svete!\n');
});

// Ispisivanje loga u momentu pokretanja servera
server.listen(port, hostname, function() {
   console.log(`Server pokrenut na http://${hostname}:${port}/`);
})