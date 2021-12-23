import express from "express";
const app = express();
// Rotas
app.get('api/names', (request, response) => {
    response.send("Está funcionando!");
});
app.get('api/names/:id', (request, response) => {
    const id = request.params.id;
    response.send(`Funcionando para o id ${id}`);
});
const port = process.env.PORT || 3000;
// Rodar o servidor
app.listen(port, () => {
    console.log("Está realmente funcionando!!!");
});
//# sourceMappingURL=app.js.map