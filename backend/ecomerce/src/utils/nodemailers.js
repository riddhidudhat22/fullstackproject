const nodemailer = require("nodemailer");
const sendmailer = () => {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ridhdhidudhat2003@gmail.com',
      pass: 'bgzsadulfgqdreth'
    }
  });
  const mailOption = {
    from: 'ridhdhidudhat2003@gmail.com',
    to: 'riddhidudhat223@gmail.com',// list of receivers
    subject: "send email using nodemailer and gmail ✔", // Subject line
    text: "Hello world?", // plain text body 
    attachments: [
      {   // file on disk as an attachment   
        filename: 'Document',
        path: 'E:/sql_student_bitkhanan.docx'
      },
      {   // file on disk as an attachment   
        filename: 'image',
        path: 'E:/riddhi/0db7b2ff-46c0-46f3-b022-eb74559e7ac8.jpg'
      },

      {   // file on disk as an attachment   
        filename: 'PDF',
        path: 'E:/social media.pdf'
      },
    ]
  }


  transporter.sendMail(mailOption, function (error, info) {
    if (error) {
      return console.log(error);

    } else {
      console.log('Email sent: ' + info.response);
    }
  })
}
module.exports = sendmailer
