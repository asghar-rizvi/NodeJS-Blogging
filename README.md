# 📘 BlogsForAll

A full-stack blog publishing platform where users can register, log in, and post blogs. Built using **Node.js**, **Express.js**, **MongoDB**, **EJS**, and styled with **Bootstrap**. Deployed using **AWS Elastic Beanstalk**.

🔗 **Live App:** [http://blogsforall-env.eba-p8bf2zmh.us-east-1.elasticbeanstalk.com/user/signin](http://blogsforall-env.eba-p8bf2zmh.us-east-1.elasticbeanstalk.com/user/signin)

---

## ✨ Features

### 🔒 Authentication & Authorization
- JWT-based user authentication
- Secure login and signup
- Route protection for authenticated users only

### 🧑‍💻 User Access
- Public users can:
  - View all blogs without login
- Registered users can:
  - Sign up and log in
  - Create new blog posts
  - Comment on any blog
  - Update their profile details

### 🛠️ Backend Architecture
- Cleanly structured into:
  - **Controllers** – Handle logic
  - **Routers** – Define endpoints
  - **Services** – Token logic, database queries
  - **Middleware** – JWT auth, error handling
  - **Views** – EJS templates
  - **Public** – Static files (CSS, JS, Images)

---

## 🗂️ Project Folder Structure
  BlogsForAll/
  ├── app.js # Main entry point
  ├── controllers/ # Logic for handling routes
  ├── routers/ # Route definitions
  ├── services/ # Services like JWT token creation, DB calls
  ├── middleware/ # Authentication, error handlers
  ├── models/ # Mongoose models (User, Blog, Comment)
  ├── views/ # EJS frontend templates
  ├── public/ # Static files (CSS, JS)
  ├── .env # Environment variables (not pushed to GitHub)
  └── README.md # Project documentation



---

## 💡 Technologies Used

| Technology  | Role                        |
|-------------|-----------------------------|
| Node.js     | Backend runtime             |
| Express.js  | Web framework               |
| MongoDB     | NoSQL database              |
| Mongoose    | MongoDB ODM                 |
| EJS         | Templating engine           |
| Bootstrap   | Frontend styling framework  |
| JWT         | User authentication         |
| AWS EB      | App hosting and deployment  |

---

## ⚙️ Deployment (AWS Elastic Beanstalk)

This project is deployed using **AWS Elastic Beanstalk**:

- 📦 **Node.js** environment  
- 💻 **EC2** for server hosting  
- ☁️ **MongoDB Atlas** as cloud database  
- 🔐 Environment variables added through **AWS dashboard**  
- ⚖️ Load balancer and auto-scaling **enabled**

---

## 🔒 Security Highlights

- JWT used for **stateless authentication**
- Passwords are **hashed using bcrypt**
- Protected routes for:
  - Blog creation
  - Commenting
  - Profile updates

---

## 📈 Future Enhancements

- 🖼️ Add **blog image upload** via AWS S3
- ✍️ Integrate **WYSIWYG rich text editor**
- 🏷️ Add **tags & categories** for blogs
- ❤️ Implement **Like/Follow** functionality
- 🛠️ Create **Admin Dashboard** for managing users and blogs

---

