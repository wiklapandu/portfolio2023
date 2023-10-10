const { default: transporter } = require("@/repositories/mailer")

export async function send_email(subject, from, toEmail, text, args = []) {
    return transporter.sendMail({
        from,
        subject,
        to: toEmail,
        text,
        ...args,
    }, function (error, info) {
        if (error) {
            throw new Error(error);
        } else {
            console.log('Email Sent');
            return true;
        }
    })
}