📚 Khan Academy Clone
A Khan Academy-inspired full-stack education platform built using the MERN Stack (MongoDB, Express.js, React, Node.js). The platform is designed to provide educational content access with seamless user experience and role-based content filtering for learners, teachers, and parents.

Live Demo: https://khan-academy-lbs6.vercel.app/

🖼️ ![Screenshot (827)](https://github.com/user-attachments/assets/5ee1a539-c6c4-46d9-a86e-3b977b37c01a)
![Screenshot (828)](https://github.com/user-attachments/assets/a31e1d52-96e0-4a1f-8df8-16afd87e04fd)
![Screenshot (829)](https://github.com/user-attachments/assets/1b4d634e-4198-43b3-b0c8-8748904d9339)

🚀 Features
👩‍🎓 Role-based navigation for Learners, Teachers, and Parents

🔐 Authentication system (Login/Signup)

🧑‍🏫 Teachers can create and manage educational content

📚 Learners can explore courses by subject or class

👨‍👩‍👧 Parents can track learning progress

📱 Fully responsive and mobile-friendly UI

🌐 Deployed frontend on Vercel

🧰 Tech Stack

Frontend	Backend	Database
React	Node.js	MongoDB
Tailwind CSS	Express.js	
React Router	JWT Auth	
📁 Project Structure
bash
Copy
Edit
/client
  └── src
      ├── components/
      ├── pages/
      └── App.jsx

/server
  ├── controllers/
  ├── routes/
  ├── models/
  └── server.js
🛠️ Getting Started
Clone the repository
bash
Copy
Edit
git clone https://github.com/khushboo8252/Khan-Academy-.git
cd khan-academy-clone
Setup Backend
bash
Copy
Edit
cd server
npm install
Create a .env file:

ini
Copy
Edit
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_jwt_secret
PORT=5000
Start the backend:

bash
Copy
Edit
npm start
Setup Frontend
bash
Copy
Edit
cd ../client
npm install
npm run dev
🌐 Deployment
Frontend: Vercel/Netlify

Backend: Render 

🧑‍💻 Author
Khushboo Kumari

Built with 💙 to inspire education accessibility

📍 LinkedIn :(https://www.linkedin.com/in/khushboo-kumari-23814225b/)
📧 [khushbooranjan8252@gmail.com]
