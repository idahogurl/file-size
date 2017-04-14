var express = require('express');
var multer  = require('multer');
var storage = multer.memoryStorage();
var upload = multer({ storage: storage, limits: { fileSize: 200000 }});
var path = require("path");
 
var app = express();
 
app.post('/file_size', upload.single('file'), function (req, res, next) {
    res.json({size: req.file.size});
});

app.use("/file_size", express.static(path.join(__dirname)));

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0",
    function () 
    {
        console.log("App listening on port " + PORT);
    }
);