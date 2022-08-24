// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mail = requre('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default function handler(req, res) {
  const body = JSON.parse(req.body);
  
  
  const message = `
    FirstName: ${body.first_name}\r\n
    LastName: ${body.last_name}\r\n
    Phone: ${body.phone}\r\n
    Email: ${body.email}
  `;

  const data = {
    to: 'winaung1997@outlook.com',
    from: 'hello@winaung.com',
    Subject: 'Testing'
  }

  mail.send(data);
  res.status(200).json({ status: 'OK' })
}
