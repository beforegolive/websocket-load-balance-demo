const redis = require('redis')

const publisher = redis.createClient()

publisher.publish('my channel', 'hi')

publisher.publish('my channel', 'hello world!')

publisher.publish('my channel 2', 'hello world!')