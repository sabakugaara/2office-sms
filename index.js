const request = require('request')
const crypto = require('crypto')
const parseString = require('xml2js').parseString
const endPoint = 'http://sms.2office.net:8080/WebService/SmsService.asmx'

/**
 * @param account
 * @param password
 * @param serivalKey
 */
function Office2 (options) {
  this._config = options
}

module.exports = Office2

Office2.prototype.sendSms = function (mobile, content, channel, smsid, sendType, callback) {
  return request.post({
    url: endPoint + '/SendSms3',
    form: {
      account: this._config.account,
      password: md5(this._config.password + this._config.serivalKey),
      mobile: mobile,
      content: content,
      channel: channel,
      smsid: smsid,
      sendType: sendType || 1
    }
  }, function (err, res, body) {
    if (err) {
      return callback(err)
    }

    parseString(body, function (err, result) {
      if (err) {
        return callback(err)
      }

      const parsed = result.string._.split(',')

      if (parsed[0] !== '0') {
        return callback(new Error(parsed[1]))
      }
      return callback(null, parsed[1])
    })
  })
}

function md5 (str) {
  return crypto.createHash('md5').update(str, 'utf8').digest('hex')
}

