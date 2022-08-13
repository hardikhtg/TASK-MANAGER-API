const sgMail = require('@sendgrid/mail')
const sendgridAPIKey = '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' 

sgMail.setApiKey(sendgridAPIKey)

const sendWelcome = (email, name) => {
    sgMail.send({
        to: email,
        from: 'ameygupta9211@gmail.com',
        subject: 'Welcome to the app',
        text: `welcome to using the task app ${name}, lemme know ho it is`
    }) 
}

const sendCancel = (email, name) => {
    sgMail.send({
        to: email,
        from: 'ameygupta9211@gmail.com',
        subject: 'Goodbye',
        text: `We'll miss you ${name}, Please tell us how we can improve`
    }) 
}


module.exports = {
    sendWelcome,
    sendCancel
}