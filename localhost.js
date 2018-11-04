const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer');
const port = 8080;

const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));


app.post('/',urlencodedParser,(req,res)=>{
	var emailOutput=`
	<h2>New data from new client</h2>
	<ol>
		<li>Name: ${req.body.Name}</li>
		<li>Email: ${req.body.Email}</li>
		<li>Phone number: ${req.body.Phone}</li>
	</ol>
	<h2>Message:</h2>
	<p>${req.body.Message}</p>
	`;
	console.log(req.body);


	 let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: 'testnodemailermark@gmail.com', 
            pass: 'asdfghjkl_12345' 
        },
        tls:{
        	rejectUnauthorized:false//localhost
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: `"Shity website" <${req.body.Email}`, // sender address
        to: 'testnodemailermark@gmail.com', // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello world?', 
        html: emailOutput 
    };

    //     let mailOptions2 = {
    //     from: '"Best website" <testnodemailermark@gmail.com', // sender address
    //     to: `${req.body.Email}`, // list of receivers
    //     subject: 'Hello ✔', // Subject line
    //     text: 'Hello world?', // plain text body
    //     html: emailOutput // html body
    // };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        res.render('website',{data:'Email has been sent'})
    });
});


app.get('/',(req,res)=>{
	res.sendFile(__dirname +'/public/website.html')
})

app.listen(port,()=>console.log(`listening to ${port}`));

