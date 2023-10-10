import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: process.env.email_host,
    port: process.env.email_port,
    auth: {
        user: process.env.email_user,
        pass: process.env.email_pass,
    }
})

export default transporter;