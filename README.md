# To-DO-List

To Do List SSR nodejs ,postgress, EJS
Here is a sample `README.md` file for your project:

---

# Permalist Application

Permalist is a simple to-do list web application built with **Node.js**, **Express**, **PostgreSQL**, and **EJS** for server-side rendering. Users can add, update, and delete items from their to-do list.

---

## Features

- Add items to a to-do list.
- Edit existing items on the list.
- Delete items from the list.
- Data is persisted using a PostgreSQL database.

---

## Installation

### Prerequisites

- **Node.js** (v16 or higher)
- **PostgreSQL** database
- **npm** (Node Package Manager)

### Steps

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd permalist
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up the database:

   - Create a PostgreSQL database named `permalist`.
   - Run the following SQL commands to set up the table:
     ```sql
     CREATE TABLE items (
       id SERIAL PRIMARY KEY,
       title VARCHAR(255) NOT NULL
     );
     ```

4. Configure environment variables:

   - Create a `.env` file in the root of the project:
     ```plaintext
     PORT=3000
     DB_PASSWORD=<your_postgres_password>
     DB_PORT=5432
     ```

5. Start the server:

   ```bash
   npm start
   ```

6. Open your browser and go to `http://localhost:3000`.

---

## Usage

1. **Add Items**: Enter a new item in the input box and click the `+` button.
2. **Edit Items**:
   - Click the pencil icon next to an item to make it editable.
   - Edit the text and click the check icon to save changes.
3. **Delete Items**: Click the checkbox next to an item to delete it.

---

## Project Structure

```
.
├── public
│   ├── assets
│   │   └── icons
├── views
│   ├── index.ejs
│   ├── partials
│   │   ├── header.ejs
│   │   └── footer.ejs
├── .env
├── app.js
├── package.json
├── README.md
```

---

## Dependencies

- **express**: Web framework for Node.js
- **body-parser**: Middleware to parse request bodies
- **pg**: PostgreSQL client for Node.js
- **dotenv**: Load environment variables from `.env` file
- **ejs**: Embedded JavaScript templates for rendering pages

---

## Contributing

If you'd like to contribute, feel free to fork the repository and submit a pull request.

---

## License

This project is licensed under the MIT License.

---
