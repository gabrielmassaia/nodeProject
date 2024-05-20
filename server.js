import { fastify } from 'fastify'

const server = fastify()

server.get('/', () => {
    return 'Hello World'
})

server.get('/hello', () => {
    return 'Hello gbmassaia'
})

server.get('/node', () => {
    return 'Hello nodejson'
})

server.listen({
    port: 3333,
})
