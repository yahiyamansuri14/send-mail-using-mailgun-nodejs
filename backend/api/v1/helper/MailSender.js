var DOMAIN = 'sandbox695a773ffd35401e9b0e759eef909df7.mailgun.org'
var API_KEY = 'ef7f58a259fe3110c7b5aae118281320-2a9a428a-86bd0b4a'
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