import { fastify } from 'fastify'
import { DatabaseMemory } from './database-memory.js'

const server = fastify()

const database = new DatabaseMemory()

server.post('/videos', (request, reply) => {

    const { title, description, duration } = request.body

    database.create({
        title,
        description,
        duration,
    })

    return reply.status(201).send()
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
