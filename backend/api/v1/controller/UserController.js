require('dotenv').config()
let mailSender = require('../helper/MailSender')
const mailgun = require('mailgun-js')
let sendMail = async (req,res) =>{
    let { email } = req.body
    let mailData = {
        'to':email,
        'from':'yahiyamansuri14@gmail.com',
        'subject':'test',
        'text':process.env.text
    }
    mailSender.mailSender(mailData)
    res.send({status:"OK",message:"Mail Send Success"})
}

module.exports = { sendMail}