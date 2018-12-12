'use strict'

require('dotenv').config() // reads vars from $/.env to process.env.<var>
const accountSid = process.env.ACCOUNT_SID
const authToken = process.env.AUTH_TOKEN
const client = require('twilio')(accountSid, authToken)

;(async (to, from) => {

  console.log(`calling # ${to} from ${from}`)

  try {
    const call = await client.calls.create({
      url: 'http://demo.twilio.com/docs/voice.xml',
      to,
      from
    })
    console.log('call sid ->', call.sid)

  } catch (error) {
    console.error('fail ->', error)
  }
})(process.env.TO, process.env.FROM)
