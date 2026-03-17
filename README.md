# Secure Blog Platform

A full-stack blog application built with Node.js and Express, featuring user authentication, profile management, and a secure blogging experience with MongoDB.

## 📋 Features

- **User Authentication**: Secure signup and login with bcrypt password hashing
- **JWT Token Management**: Token-based authentication for API security
- **User Profiles**: Customizable user profiles with profile picture uploads
- **Blog Posts**: Create, read, and manage blog posts
- **Like System**: Like and unlike posts from other users
- **Session Management**: Express session with flash messages for user feedback
- **File Uploads**: Secure image upload functionality with multer
- **Responsive Design**: Built with Tailwind CSS for modern UI
- **EJS Templating**: Dynamic server-side rendering with EJS

## 🚀 Tech Stack

**Backend:**

- Node.js
- Express.js (v5.2.1)
- MongoDB with Mongoose (v9.2.1)
- bcrypt (v6.0.0) - Password hashing
- JWT (jsonwebtoken v9.0.3) - Token authentication

**Frontend:**

- EJS - Templating engine
- Tailwind CSS (v4.2.0) - Styling
- HTML5 & CSS3

**Development Tools:**

- Nodemon - Auto-reload on file changes
- Tailwind CLI - CSS compilation with watch mode
- Concurrently - Run multiple scripts simultaneously

## 📦 Project Structure

```
secure-blog-platform/
├── config/              # Configuration files
│   └── db.js           # MongoDB connection
├── controllers/         # Business logic
│   ├── authController.js   # Authentication logic
│   ├── postController.js   # Post operations
│   └── userController.js   # User operations
├── middlewares/        # Express middleware
│   ├── protect.js      # Authentication middleware
│   ├── uploadMiddleware.js  # File upload configuration
│   └── profileImageHandler.js  # Profile image handling
├── models/            # Database schemas
│   ├── user.js        # User model
│   └── post.js        # Post model
├── routes/            # API routes
│   ├── authRoutes.js  # Auth endpoints
│   ├── postRoutes.js  # Post endpoints
│   └── userRoutes.js  # User endpoints
├── public/            # Static files
│   ├── css/          # Stylesheets
│   ├── js/           # Client-side JavaScript
│   └── images/       # User uploads
├── views/            # EJS templates
│   ├── partials/     # Reusable components
│   └── *.ejs         # Page templates
├── utils/            # Utility functions
│   └── generateToken.js  # JWT token generation
├── app.js            # Express app setup
├── server.js         # Server entry point
├── package.json      # Dependencies and scripts
├── tailwind.config.js # Tailwind configuration
└── .env              # Environment variables
```

## 🛠️ Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB connection string
- npm or yarn

### Setup Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/hafeez-07/secure-blog-platform.git
   cd secure-blog-platform
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**
   Create a `.env` file in the root directory:

   ```env
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   SESSION_SECRET=your_session_secret_key
   JWT_SECRET=your_jwt_secret_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```
   The app will run on `http://localhost:3000`

## 📝 Available Scripts

- `npm run dev` - Start development server with hot reload and Tailwind watch
- `npm run build` - Build and minify Tailwind CSS for production

## 🔐 Security Features

- **Password Hashing**: Bcrypt for secure password storage
- **JWT Authentication**: Token-based API authentication
- **Protected Routes**: Middleware to protect authenticated endpoints
- **Session Management**: Secure session handling with express-session
- **Input Validation**: Express middleware for request validation

## 📱 API Endpoints

### Authentication

- `POST /auth/signup` - Register new user
- `POST /auth/login` - Login user
- `POST /auth/logout` - Logout user

### Users

- `GET /user/:id` - Get user profile
- `PUT /user/:id` - Update user profile
- `POST /user/upload-profile` - Upload profile picture

### Posts

- `GET /` - View all blog posts
- `POST /post` - Create new post
- `GET /post/:id` - View specific post
- `DELETE /post/:id` - Delete post
- `POST /post/:id/like` - Like a post
- `POST /post/:id/unlike` - Unlike a post

## 🗄️ Database Schema

### User Model

```javascript
{
  name: String (required),
  username: String (required, unique),
  email: String (required, unique),
  password: String (required),
  age: Number,
  posts: [ObjectId], // References to Post
  profilePic: String (default: '/images/defaultProfile.webp')
}
```

### Post Model

```javascript
{
  user: ObjectId, // Reference to User
  date: Date (default: current date),
  content: String,
  likes: [ObjectId] // References to Users who liked
}
```

## 🚧 Development

### File Upload Configuration

- Profile images are handled by multer middleware
- Uploaded files are stored in `public/images/uploads/`
- Supported formats: JPEG, PNG, WebP

### Environment Variables Needed

- `PORT` - Server port (default: 3000)
- `MONGODB_URI` - MongoDB connection string
- `SESSION_SECRET` - Secret for session encryption
- `JWT_SECRET` - Secret for JWT token signing

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For more information, visit the [GitHub Repository](https://github.com/hafeez-07/secure-blog-platform)

---

**Happy Blogging! 📝**
