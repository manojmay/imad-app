var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var Articles = {
    
    Articleone :{
    title:"Article-one",
    heading:"Article-one",
    content:          ` <p>
                        Oh to see without the eyes the first time you have kissed me .
                        Boundelss by the time I cried ,I built your arms around me .
                        Oh woah woe Its me 
                        <i>Mystery of love</i>
                        </p>
                    
                    
                         <p2>
                        
                        
                        The first time that you touched me
                         Oh, will wonders ever cease?
                         Blessed be the mystery of love 
                         
                         
                         </p2>`
    
    
},

    Articletwo :{
        
           title:"Article-two",
          heading:"Article-two",
          content:   `        <p>
                        I, I wish you could swim
                        Like the dolphins
                        Like dolphins can swim
                        Though nothing, nothing will keep us together
                        We can beat them, forever and ever
                        Oh, we can be heroes just for one day 
                        <i>Heros</i>
                    </p>
                    
                    
                    <p2>
                        I, I will be King
                        And you, you will be Queen
                        Though nothing will drive them away
                        We can be heroes just for one day
                        We can be us just for one day
                     
                         
                         
                    </p2>
    ` 
    }
};
function createTemplate(data)
{
 var title = data.title;
 var heading = data.heading;
 var content = data.content;
 
                var htmltemplate = `
                <html>
                <head>
                    <title> ${title} </title>
                    
                    <meta name  = "viewport" content="width=device-width, initial-scale=1" />
                <link href="/ui/style.css" rel="stylesheet" />
                </head>    
                    <body>
                        <div class="some">
                            <div>
                            <a href="/">home</a>
                        </div>
                        <hr/>
                        <h5>${heading}</h5>
                        
                        <div>
                            date 
                        </div>
                        <div>
                           ${content}
                        
                        </div>
                        </div>
                        </body>
                        
                        </html>
                `;
                return htmltemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


app.get(':/article_Name', function(req, res){
    //article_Nmae == Article-one
    //article_Name == {} content object for article one
     var article_Name = req.params.article_Name;
     res.send(createTemplate(Articles[article_Name]));
     
});
   


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
