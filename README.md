## Install
```
npm i 2office-sms --save
```

## Usage
```
const Office2 = require('../')

const office2 = new Office2({
  account: 'your_2office_account',
  password: 'your_2office_password',
  servivalKey: 'your_2office_key'
})

office2.sendSms('18902xxxxxx', 'message content', 'your_channel', new Date().getTime(), 1, function (err, result) {
  return done(err)
})
```

## Api

- sendSms
  send normal sms(text message)
- sendVoiceSms
  send voice sms(voice call)

## Test

modify `test/fixture.json`, and run `mocha`
