const {devedores} = require('../../Model')

function CreateDevedores(req, res ){
        var identificador_devedor = req.body.identificador_devedor
        var nome_devedor = req.body.nome_devedor
        var cpnj_devedor = req.body.cpnj_devedor
        devedores.create({
            identificador_devedor: identificador_devedor,
            nome_devedor:nome_devedor,
            cpnj_devedor:cpnj_devedor,
            }).then(()=>{
                res.status(200).json({message:"Devedor identificado"})
            }).catch((error)=>{
                console.log(error)
            })
}

module.exports = {CreateDevedores};