const Office2 = require('../')
const config = require('./fixture')

const office2 = new Office2(config)

describe('index.js', () => {
  it('should send sms success', (done) => {
    office2.sendSms(18902938888, 'message content', 7076, new Date().getTime(), 1, function (err, result) {
      return done(err)
    })
  })
})
