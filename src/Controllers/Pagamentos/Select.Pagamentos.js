const {pagamentos,sequelize}= require('../../Model')

async function SelectByIdPagamentos(req, res ){
    let transaction
    try{
    
    transaction = await sequelize.transaction()
        
        var query = await pagamentos.findAll({where:{id : req.params.id}})    
        
        if (query.length === 0){
            res.status(400).json({menssage:"Nenhum pagamento registrado com esse ID"})
            throw new Error ("Nenhum pagamento registrado com esse ID")
        }
         await transaction.commit()
         return res.status(200).send(query)
            
        }catch(error){
            console.log(error)
            if(transaction) await transaction.rollback()
            return res.status(500)
        }
    }

async function SelectallPagamentos(req, res ){
    
    let transaction

    try{
    

    transaction = await sequelize.transaction()
        
        var query = await pagamentos.findAll({})    

        await transaction.commit()
         return res.status(200).send(query)
            
        }catch(error){
            console.log(error)
            if(transaction) await transaction.rollback()
            return res.status(500)
        }
}

module.exports = {SelectallPagamentos, SelectByIdPagamentos};