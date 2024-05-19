import { createServer } from 'node:http'

const server = createServer (() => {
    return console.log('oi')
})

server.listen(3333)

const gb = 'gb'