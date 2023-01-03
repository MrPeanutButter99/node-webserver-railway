import * as http from 'http'

http.createServer( (req, res) => {
    
    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
    res.writeHead(200, {'Content-Type': 'application/csv'})

    res.write('id, Nombre\n')
    res.write('1, Fernando\n')
    res.write('2, Nicolas\n')
    res.write('3, Rosario\n')

    res.end()
})
.listen(8080)

console.log( `Escuchando el puerto: `, 8080)