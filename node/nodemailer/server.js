const SMTPServer = require("smtp-server").SMTPServer;

// This example starts a SMTP server using TLS with your own certificate and key
const server = new SMTPServer({});

server.on('error', err => {
  console.log(err)
})

server.listen(1025);