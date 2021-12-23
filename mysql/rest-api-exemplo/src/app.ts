import express, { Request, Response } from "express";
import mysql from 'mysql';
const app = express();

const connectionString = process.env.DATABASE_URL || '';
const connection = mysql.createConnection(connectionString);
connection.connect();

app.get('/names', (request: Request, response: Response) => {
    const query = 'SELECT * FROM Names'
    connection.query(query, (error, rows) => {
        if(error) throw error;
        const returnValue = {
            data: rows,
            message: rows.length === 0 ? "No Record Found" : null
        }
        return response.send(returnValue)
    })
})

app.get('/names/:id', (request: Request, response: Response) => {
    const id = request.params.id
    const query = `SELECT * FROM Names WHERE ID = ${id} LIMIT 1`
    connection.query(query, (error, rows) => {
        if(error) throw error;
        const returnValue = {
            data: rows.length > 0 ? rows[0] : null,
            message: rows.length === 0 ? "No Record Found" : null
        }
        return response.send(returnValue)
    })
})

const port = process.env.PORT || 3000;

// Rodar o servidor
app.listen(port, () => {
    console.log("Está realmente funcionando!!!")
})