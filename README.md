# News Website Project #


## Overview of The Project
This project is a news website that allows users to view public posts, while admins and moderators have additional permissions to manage content. The website supports authentication and authorization features, ensuring that only authorized users can access certain functionalities based on their roles. Users can view public posts, while admins can manage posts, moderators, and approve posts. Moderators can add or edit posts but cannot modify approved posts. The project uses React for the frontend, Node.js with an ORM for the backend, and supports the database.

## System Requirements
-Node.js: v18.18.0 or higher <br>
-npm: v9.5.0 or higher<br>
-MySQL/PostgreSQL/MongoDB: Latest stable version <br>
-React: v18 or higher <br>
-Swagger: For API documentation <br>


## Features
- Public and protected routes <br>
- User roles: Admin, Moderator, User <br>
- JWT-based authentication <br>
- CRUD operations for posts <br>

## Setup Instructions
1. Clone the repository. <br>
2. Install dependencies: <br>
`npm install` <br>
3. Start the development server: <br> 
`npm start` <br>


## Installation
To set up the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Wathsala-Rajapaksha/news_portaln.git

2. **Navigate to the project Directory**: <br>
**cd news_portaln**

3. **Install backend dependencies:** <br>
**cd backend** <br>
**npm install** <br>

4. **Install frontend dependencies:** <br>
**cd ../frontend** <br>
**npm install** <br>

5. **Set up environment variables:** <br>
DATABASE_URL=your-database-url <br>
JWT_SECRET=your-secret-key <br>

6. **Run the backend server:** <br>
**cd backend** <br>
**npm start** <br>

7. **Run the frontend server:** <br>
**cd ../frontend** <br>
**npm start**

8. **Set up environment variables:** <br>
Create a .env file with the following: <br>
DB_HOST=localhost <br>
DB_USER=root <br>
DB_PASS=password <br>
DB_NAME=news_db <br>
JWT_SECRET=your_secret_key <br>

## Usage ##
**To use the project:** <br>

**Navigate to the homepage:** ___Access the website at http://localhost:5000. <br>
**Sign up or log in:**  ___Create an account or log in with existing credentials.  <br>
**View posts:**  ___As a user, you can view all public posts.  <br>
**Admin and Moderator actions:**  ___Admins can add, edit, delete posts, and manage user roles.
                                 Moderators can add and edit posts, but cannot delete approved posts. <br>


## API Documentation (Swagger) ## 
The API documentation is generated using Swagger. Once the backend server is running, you can access the Swagger UI by navigating to http://localhost:5000/api-docs. <br>

**Endpoints Overview:**<br>
POST /api/auth/register: Register a new user <br>
POST /api/auth/login: User login<br>
GET /api/posts: Get all public posts <br>
POST /api/posts: Create a new post (Admin/Moderator only) <br>
PUT /api/posts/: Update a post (Moderator only before approval) <br>
DELETE /api/posts/: Delete a post (Admin only) <br>
PATCH /api/posts/approve: Approve a post (Admin only)<br>

## Testing ##
Testing is essential for ensuring the application works as expected.<br>

**Unit Testing:** <br>

Jest: For testing React components.<br>
Mocha/Chai: For testing Node.js backend.<br>

**Integration Testing:** <br>
Supertest: For testing API endpoints.<br>
**npm run test** <br>

## Deployment ##
1. **Frontend**<br>

**Build the Project**<br>
**npm run build**<br>

2. **Backend:** <br>
Ensure all environment variables are set in the production environment.<br>

Use a process manager like PM2 to keep the server running:<br>
**pm2 start server.js** <br>

## Database ##
Ensure the database is correctly configured and migrated in the production environment.<br>

## Conclusion ##
This project demonstrates a full-stack application development process with authentication and authorization using React, Node.js, and an ORM with a relational or non-relational database. The use of role-based access control ensures that only authorized users can perform certain actions, maintaining security and integrity. The application is scalable, easily deployable, and well-documented, ensuring ease of use and maintenance.

## References ##
--*React Documentation* <br>
--*Node.js* <br>
--*JWT.io* <br>
--*Swagger Documentation* <br>























