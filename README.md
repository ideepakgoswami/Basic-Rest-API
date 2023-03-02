# SIMPLE REST API with CRUD Operations FOR BEGINNERS

This is a RESTful API built using Node.js, Express.js, and Mongoose that performs CRUD operations using HTTP methods GET, POST, PUT, and DELETE.


## Installation

1. Clone the repository:

```
git clone https://github.com/{your-github-username}/basic-rest-api.git
```

2. Navigate to the project directory:

```
cd rest-api
```

3. Install the dependencies:

```
npm install
```

4. Start the server:

```
npm run
```

The server will start running on http://localhost:4500.

## Usage
The API supports the following endpoints:

- **POST `/api/v1/product/new`** Creates a new product.


- **GET `/api/v1/products`** Returns all products.


- **PUT `/api/v1/product/:id`** Updates a product by id.


- **DELETE `/api/v1/product/:id`** Deletes a product by id.

<br>
The API accepts and returns JSON data.

## Configuration
To configure the MongoDB connection, change the mongoose.connect() function's URL to your MongoDB instance's URL.
```
mongoose.connect("mongodb://127.0.0.1:27017/rest_api") //DB NAME:- rest_api(you can use your own)
```


## Contributing
Feel free to contribute to this project. You can:

- Suggest a feature
- Submit a pull request

## POSTMAN-API Testing Images

### Create
![CREATE-POSTMAN](https://user-images.githubusercontent.com/126806249/222531958-2e127480-4e47-4e05-bb26-adcac36dcbf0.png)
<br>
### Read
![READ-POSTMAN](https://user-images.githubusercontent.com/126806249/222531973-0eab0123-2a53-4ea4-ac89-67936f068e55.png)
<br>
### Update
![UPDATE-POSTMAN](https://user-images.githubusercontent.com/126806249/222531979-7173b2ec-83df-4f99-b371-27cb81fd912e.png)
<br>
### Delete
![DELETE-POSTMAN](https://user-images.githubusercontent.com/126806249/222531965-9d73490e-349a-4491-8a66-d1d62329aabe.png)
<br>

# THANK YOU FOR VISITING!
