var express = require('express')
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
 
var app = express()
 
app.post('/profile', upload.single('testFile'), function (req, res, next) {
    res.json({size: req.file.size});
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0",
    function () 
    {
        console.log("App listening on port " + PORT);
    }
);