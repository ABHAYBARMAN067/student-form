# Student Registration System

A simple web application for student registration built with Node.js, Express, and MongoDB.

## Features

- Student registration form with validation
- Data storage in MongoDB
- Responsive design
- Modern UI with animations
- RESTful API endpoints

## Tech Stack

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express.js
- Database: MongoDB
- Environment Variables: dotenv

## Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account
- Git

## Project Structure

```
student-registration/
├── public/
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── .env
├── db.js
├── index.js
├── model.js
├── package.json
└── README.md
```

## Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd student-registration
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

4. Start the server:
```bash
node index.js
```

5. Open `http://localhost:3000` in your browser

## API Endpoints

### GET /
- Fetches all registered students
- Response: Array of student objects

### POST /
- Registers a new student
- Request Body:
```json
{
    "name": "string",
    "rollnumber": "string",
    "age": "number",
    "gender": "string"
}
```
- Response: Success/Error message

## Environment Variables

- `PORT`: Server port number (default: 3000)
- `MONGO_URI`: MongoDB connection string

## Database Schema

```javascript
{
    name: {
        type: String,
        required: true
    },
    rollnumber: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    }
}
```

## Deployment

1. Create an account on your preferred hosting platform (e.g., Heroku, Render)
2. Configure environment variables on the hosting platform
3. Deploy using Git or platform-specific deployment methods

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License

## Support

For support, email your@email.com or create an issue in the repository.