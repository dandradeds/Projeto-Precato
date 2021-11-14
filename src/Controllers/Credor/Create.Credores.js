const {credores,sequelize}= require('../../Model')


async function CreateCredores(req, res ){
    try{
    let transaction

    transaction = await sequelize.transaction()
        var identificador_credor = req.body.identificador_credor
        var nome_credor = req.body.nome_credor
        var cpf_credor = req.body.cpf_credor
        var status_cadastro= req.body.status_cadastro
        credores.create({
            identificador_credor: identificador_credor,
            nome_credor:nome_credor,
            cpf_credor:cpf_credor,
            status_cadastro:status_cadastro,
            })
        
        await transaction.commit()
         return res.status(200).json({message:"Credor cadastrado"})
            
        }catch(error){
            console.log(error)
            if(transaction) await transaction.rollback()
            return res.status(500)
        }
}

module.exports = {CreateCredores};