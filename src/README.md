
# User API

This project is a simple API to manage users, allowing you to list, create, update, and delete users. It was developed using Node.js and follows a basic architecture with routes, middlewares, and controllers.

## 🚀 How to Run the Project

### Prerequisites
Make sure you have installed:
- [Node.js](https://nodejs.org/) (v14 or higher)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/ElisaDrumond/user-api.git
   ```
2. Navigate to the project directory:
   ```bash
   cd user-api
   ```
### Running the Server
1. Start the local server:
   ```bash
   node src/index.js
   ```
2. The server will be available at:
   ```
   http://localhost:3000
   ```

---

## 📚 Available Routes

### 1. List all users
**GET** `/users`

- **Query Params**:
  - `order` (optional): Defines the order of users by `id`. Accepted values: `asc` or `desc`.

#### Example:
```bash
GET http://localhost:3000/users?order=asc
```

#### Response:
```json
[
    {
        "id": 1,
        "name": "Elisa"
    },
    {
        "id": 2,
        "name": "Patrick"
    }
]
```

### 2. Get user by ID
**GET** `/users/:id`

#### Example:
```bash
GET http://localhost:3000/users/1
```

#### Response:
```json
{
    "id": 1,
    "name": "Elisa"
}
```

#### If the user does not exist:
```json
{
    "error": "User not found"
}
```

### 3. Create a new user
**POST** `/users`

- **Body**:
  ```json
  {
      "name": "New User"
  }
  ```

#### Example:
```bash
POST http://localhost:3000/users
```

#### Response:
```json
{
    "id": 3,
    "name": "New User"
}
```

#### If the `name` field is missing:
```json
{
    "error": "Name is required"
}
```

### 4. Update a user
**PUT** `/users/:id`

- **Body**:
  ```json
  {
      "name": "Updated Name"
  }
  ```

#### Example:
```bash
PUT http://localhost:3000/users/1
```

#### Response:
```json
{
    "id": 1,
    "name": "Updated Name"
}
```

#### If the user does not exist:
```json
{
    "error": "User not found"
}
```

### 5. Delete a user
**DELETE** `/users/:id`

#### Example:
```bash
DELETE http://localhost:3000/users/1
```

#### Response:
```json
{
    "deleted": true
}
```

#### If the user does not exist:
```json
{
    "error": "User not found"
}
```

---

## 🛠 Project Structure
```plaintext
├── controllers
│   └── UserController.js  # Logic for the endpoints
├── middlewares
│   ├── bodyParser.js      # Middleware to process request body
│   └── handleErrors.js    # Middleware to handle errors
├── mocks
│   └── data
│       └── users.js       # Mocked user data
├── routes
│   └── routes.js          # Route definitions
├── index.js               # Server entry point
```

---

## 🔮 Next Steps
- Add more robust validations using a library like `Joi` or `Yup`.
- Implement automated tests with `Jest`.
- Migrate to a framework like **Express.js** for better middleware and route management.
- Replace mocked users with a real database (e.g., SQLite, PostgreSQL, or MongoDB).

---

## 🤝 Contribution
Contributions are welcome! Feel free to open issues or submit pull requests.

---

## 📄 License
This project is under the MIT license. See the [LICENSE](LICENSE) file for more details.

---

## 💬 Contact
Questions or suggestions? Contact me via email: [contato.elisadrumond@gmail.com](mailto:contato.elisadrumond@gmail.com)
