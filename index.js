const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 8000;


app.use(bodyParser.json());


app.post('/bfhl', (req, res) => {
    try {
        const data = req.body;

     
        const response = {
            is_success: true,
            user_id: "satwik_kanhere_07112003",
            email: "satwik1287.be21@chitkara.edu.in", 
            roll_number: "2110991287",
            even_numbers: data.filter(num => num % 2 === 0),
            odd_numbers: data.filter(num => num % 2 !== 0),
            alphabets: data.filter(val => typeof val === 'string').map(val => val.toUpperCase())
        };

        
        res.json(response);
      console.log(response)
    } catch (error) {
        
        console.error(error);
        res.status(500).json({ is_success: false, error: "Internal server error" });
    }
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});