const fs = require('fs');

// create
exports.post = (req, res) => {
    const keys = Object.keys(req.body);

    for (key of keys) {
        if (req.body[key] == '') {
            return res.send('Please, fill all fields');
        }
    }

    fs.writeFile("data.json", JSON.stringify(req.body), (err) => {
        if (err) {
            return res.send('Write file error!');
        }
        return res.redirect('/instructors');
    })
    
    // return res.send(req.body);
}

