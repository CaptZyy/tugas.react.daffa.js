import express from "express";
import db from "./koneksi.js";

const app = express()

// http://localhost:3000/
app.get("/", (req, res) => {
    const sql = "SELECT * FROM mahasiswa"
    db.query(sql, (error, result) => {
        res.json(result)
    })
})

// http://localhost:3000/find?nim=1001
app.get("/find", (req, res) => {
    const nim = req.query.nim;
    const sql = `SELECT * FROM mahasiswa WHERE nim = ${nim}`
    db.query(sql, (error, result) => {
        res.json(result)
    })
})

app.listen(3000, () => {
    console.log("server berjalan di http://localhost:3000")
})