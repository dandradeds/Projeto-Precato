const {devedores,sequelize}= require('../../Model')

async function SelectByIdDevedores(req, res ){
    let transaction
    try{
    
    transaction = await sequelize.transaction()
        
        var query = await devedores.findAll({where:{id : req.params.id}})    
        
        if (query.length === 0){
            res.status(400).json({menssage:"Nenhum devedor registrado com esse ID"})
            throw new Error ("Nenhum devedor registrado com esse ID")
        }
         await transaction.commit()
         return res.status(200).send(query)
            
        }catch(error){
            console.log(error)
            if(transaction) await transaction.rollback()
            return res.status(500)
        }
    }

async function SelectallDevedores(req, res ){
    
    let transaction

    try{
    

    transaction = await sequelize.transaction()
        
        var query = await devedores.findAll({})    

        await transaction.commit()
         return res.status(200).send(query)
            
        }catch(error){
            console.log(error)
            if(transaction) await transaction.rollback()
            return res.status(500)
        }
}

module.exports = {SelectallDevedores, SelectByIdDevedores};
