const {credores,sequelize}= require('../../Model')


async function SelectByIdCredores(req, res ){
    try{
    let transaction

    transaction = await sequelize.transaction()
        
        var query = await credores.findAll({where:{id : req.params.id}})    

        await transaction.commit()
         return res.status(200).send(query)
            
        }catch(error){
            console.log(error)
            if(transaction) await transaction.rollback()
            return res.status(500)
        }
}

async function SelectAllCredores(req, res ){
    try{
    let transaction

    transaction = await sequelize.transaction()
        
        var query = await credores.findAll({})    

        await transaction.commit()
         return res.status(200).send(query)
            
        }catch(error){
            console.log(error)
            if(transaction) await transaction.rollback()
            return res.status(500)
        }
}

module.exports = {SelectAllCredores, SelectByIdCredores};