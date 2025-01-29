const express = require('express');
const app = express();

app.use(express.json());
app.post('/register', (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Name, email, and password are required.' });
    }

    console.log('User Registered:', { name, email });

    return res.status(201).json({ message: 'User registered successfully!' });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
