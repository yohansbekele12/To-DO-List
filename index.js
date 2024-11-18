import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = process.env.PORT;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "permalist",
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

async function getitems() {
  const result = await db.query("SELECT * FROM items");
  const items = [];
  result.rows.forEach((item) => {
    items.push(item);
  });

  return items;
}

app.get("/", async (req, res) => {
  const items = await getitems();
  console.log(items);
  res.render("index.ejs", {
    listTitle: "Today",
    listItems: items,
  });
});

app.post("/add", async (req, res) => {
  const item = req.body.newItem;
  try {
    const result = await db.query("INSERT INTO items (title) VALUES($1)", [
      item,
    ]);

    if (result.rowCount > 0) {
      console.log("Item added successfully");
      res.redirect("/");
    }
  } catch (err) {
    console.log(err);
  }
});

app.post("/edit", async (req, res) => {
  const { updatedItemId, updatedItemTitle } = req.body;

  try {
    const result = await db.query("UPDATE items SET title =$1 where id =$2 ", [
      updatedItemTitle,
      updatedItemId,
    ]);

    if (result.rowsCount > 0) console.log("Item updated successfully");
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
});

app.post("/delete", async (req, res) => {
  const itemId = parseInt(req.body.deleteItemId);

  try {
    const result = db.query("DELETE FROM items WHERE id = $1", [itemId]);

    if (result.rowCount > 0) console.log("Item deleted successfully");
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
