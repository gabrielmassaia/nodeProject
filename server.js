import { fastify } from 'fastify'

const server = fastify()

// POST http://localhost:3333/videos

server.post('/videos', () => {
    return 'Hello World'
})

server.get('/videos', () => {
    return 'Hello gbmassaaia'
})

server.put('/videos/:id', () => {
    return 'Hello nodejson'
})

server.delete('/videos/:id', () => {
    return 'Hello nodejson'
})

server.listen({
    port: 3333,
})
