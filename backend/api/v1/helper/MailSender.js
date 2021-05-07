var DOMAIN = < YOUR DOMAIN >
var API_KEY = < YOUR API KEY >
const mailgun = require('mailgun-js')({apiKey:API_KEY, domain:DOMAIN})

let mailSender = ( mailData ) =>{
    var isSent = true
    const data = {
        "from":mailData.from,
        "to":mailData.to,
        "subject":mailData.subject,
        "text":mailData.text
    }
    
    mailgun.messages().send(data, (error,body) =>{
        if (error){
            console.log(error)
        }else{
            console.log(body)
        }
    })
}

module.exports = { mailSender }
