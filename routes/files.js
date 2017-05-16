var express = require("express");
var router = express.Router();
var fs = require("fs");
var multer = require("multer");
//var Q = require("q");
var formidable = require('formidable');

router.get("/", function(req, res){
  res.render("file");
});

router.get("/0", function(req, res){
  res.render('show_file1');
});

router.get('/audios', function(req, res){
  fs.readFile('public/images/play.mp3', function(err, data){
    res.writeHead(200, { 'Content-Type' : 'text/html'});
    res.end(data);
  })
})
/*
router.post('/upload', function(req, res){
  var form = new formidable.IncomingForm();
  form.uploadDir = __dirname + '/';
  form.keepExtensions = true;

  form
      .on('error', function(err){
        console.log('err');
        throw err;
      })

      .on('field', function(field, value){
        console.log(field,value);
      })

      .on('fileBegin', function(name, file){
        file.path = form.uploadDir + "/" + file.name;
      })

      .on('file', function(field, file){

      })

      .on('progress', function(bytesReceived, bytesExpected){
        console.log('progress');
        var percent = (bytesReceived / bytesExpected * 100) | 0;
        process.stdout.write('Uploading: %' + percent + '\r');
      })

      .on('end', function(req, res){
        console.log('form end:\n\n');
      })

    form.parse(req, function(err){
      res.redirect('/files');

    });
});
*/
/*
router.post("/upload", function(req, res){
    fs.readFile(req.files.uploadFile.path,function(error,data){
        var destination = __dirname + '\\..\\uploaded\\'+ req.files.uploadFile.name;
        fs.writeFile(destination,data,function(error){
            if(error){
                console.log(error);
                throw error;
            }else{
                res.redirect('/files');
            }
        });
    });

});
*/
/*
router.post("/upload", multer({ dest: './'}).single('uploadFile'), function(req, res){
  fs.rename(req.file.filename,'image.jpg');
  res.redirect("/files");
})
*/
/*
router.post("/upload", function(req, res){
  fs.readFile(req.files.uploadFile.path, function(err, data){
    var filePath = './' + req.files.uploadFile.name;
    fs.writeFile(filePath, data, function(err){
      if(err)
        throw err;
      else
        res.redirect("/files");
    });
  });
});*/

module.exports = router;
