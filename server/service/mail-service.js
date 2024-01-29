const nodemailer = require('nodemailer');
const directTransport = require('nodemailer-direct-transport')

class MailService {

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: 'iopn ymhr uogw rllj'
      },
      tls: {
        rejectUnauthorized: false
      }
    })
  }
  async sendActivationMail({ email, link }) {
    await this.transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Активация аккаунта на ' + process.env.API_URL,
      text: '',
      html: `
        <div>
          <h1>Для активации пройдите по ссылке</h1>
          <a href="${link}">${link}</a>
        </div>
        `
    })
  }
}

module.exports = new MailService()
