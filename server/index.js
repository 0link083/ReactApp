const { Client } = require("pg");
const express = require("express");
const path = require("path");

const PORT = 8080;
const app = express();
const client = new Client(
    {
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD
    }
);

app.use(express.static(path.resolve(__dirname, "../client/build")));
app.use(express.json())

app.post("/delete", async (req, res) => {
    const id = req.body.id;

    try {
        await client.query(`DELETE FROM employees WHERE id = ${id}`);

        res.status(200).send(`${id} delete success`);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Gets the string from the Client's Navigation Bar 
// and sets it to the document Global Search Term.
// which is used to filter employees
// app.post("/searchTerm", async (req, res) => {
//     const searchTerm = req.body.searchTerm;

//     app.get("/employees", {
//         params: {
//             searchTerm: searchTerm
//         }
//     });

//     res.status(200).send("Search updated successfully!");
// });

app.get("/employees", async (req, res) => {
    try {
        // const results = await client.query(`SELECT * FROM employees WHERE name LIKE '${searchTerm}%'`)
        const results = await client.query(`SELECT * FROM employees`)
            .then((payload) => {
                return payload.rows;
            })
            .catch(() => {
                throw new Error("Query failed");
            });

        res.setHeader("Content-Type", "application/json");
        res.status(200);
        res.send(JSON.stringify(results));
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

(async () => {
    await client.connect();
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    });
})();