const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  host: 'localhost',
  port: 1025,
  auth: {
    user: 'project.1',
    pass: 'secret.1'
  }
});

transporter.sendMail({
  from: 'noreply@mail.si-yee.com',
  text: '测试',
  to: 'qa894178522@qq.com',
  subject: '小说最新章节',
  html: `<h2> 最新章节 ： </h2>`,
})