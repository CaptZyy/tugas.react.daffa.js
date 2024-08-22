import express from "express";
import db from "./koneksi.js";

const app = express()

app.get("/", (req, res) => {
    const sql = "SELECT * FROM mahasiswa"
    db.query(sql, (error, result) => {
        res.json(result)
    })
})

app.listen(3000, () => {
    console.log("server berjalan di http://localhost:3000")
})