function sendText() {
  const accountSid = 'AC1c575398f328b2a4eb564728a296be08';
  const authToken = '536cf42fce7053baea97bd52fc3d20c1';
  const client = require('twilio')(accountSid, authToken);

  client.messages
    .create({
       body: 'Your verification code is ' + (Math.floor(Math.random()  * (999 - 100) + 100)).toString(),
       from: '+13212097129',
       to: '+14076834035'
     })
    .then(message => console.log(message.sid));
}
