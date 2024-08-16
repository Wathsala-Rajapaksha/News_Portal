# News Website Project

## Overview
This project is a news website that allows users to view public posts, while admins and moderators have additional permissions to manage content. The website supports authentication and authorization features, ensuring that only authorized users can access certain functionalities based on their roles. Users can view public posts, while admins can manage posts, moderators, and approve posts. Moderators can add or edit posts but cannot modify approved posts. The project uses React for the frontend, Node.js with an ORM for the backend, and supports the database.

## System Requirements
-Node.js: v18.18.0 or higher <br>
-npm: v9.5.0 or higher<br>
-MySQL/PostgreSQL/MongoDB: Latest stable version <br>
-React: v18 or higher <br>
-Swagger: For API documentation <br>

## Installation
To set up the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-user/news_portaln.git

2. **Navigate to the project Directory**: <br>
cd news_portaln

3. **Install backend dependencies:** <br>
cd backend <br>
npm install <br>

4. **Install frontend dependencies:** <br>
cd ../frontend <br>
npm install <br>

5. **Set up environment variables:** <br>
DATABASE_URL=your-database-url <br>
JWT_SECRET=your-secret-key <br>

6. **Run the backend server:** <br>
cd backend <br>
npm start <br>

7. **Run the frontend server:** <br>
cd ../frontend <br>
npm start 








