const {credores, devedores, pagamentos, sequelize} = require('../../Model')


async function CreatePagamentos(req, res ){
    let transaction
    let{ Pagamentos }=req.body
    try{

       transaction = await sequelize.transaction()
       let queryCredor = await credores.findAll({})
       let queryDevedor = await devedores.findAll({})

       let CreatePagamentos = Pagamentos.map((e)=>{
            // Tratativa de erro caso nao encontre a indeficação do credor
            let filterQueryCredor = queryCredor.filter(x => x.identificador_credor == e.identificador_credor )
            if(filterQueryCredor.length === 0){
                res.status(400).json({ message: 'Credor não encontrado.' });
            }
            
            // Tratavida de erro caso cadastro do credor a receber o pagamento estiver reprovado
            let filterQueryStatusCredor = filterQueryCredor.filter(x => x.status_cadastro == 'reprovado' )
            if(filterQueryStatusCredor.length > 0){
                res.status(400).json({ message: 'Credor com status reprovado.' });
                throw new Error('Credor com status reprovado.')
            }

            // Tratativa de erro caso nao encontre a indeficação do devedor
            let filterQueryDevedor = queryDevedor.filter(x => x.identificador_devedor == e.identificador_ente_devedor )
            if(filterQueryDevedor.length === 0){
                res.status(400).json({ message: 'Devedor não econtrado.' });
            }

            // Tratativa de erro caso o valor inicial forem igual a 0 
            if(e.valor_inicial <=0 || e.valor_final <=0){
                res.status(400).json({ message: 'Valores devem ser maiores que 0.' });
                throw new Error('Valores devem ser maiores que 0.')
            }
            // Valor inicial sempre mior que o valor final
            if(e.valor_inicial <= e.valor_final){
                 res.status(400).json({ message: 'Valor inicial deve ser maior que o final.' })
                 throw new Error('Valor inicial deve ser maior que o final.' )
            }

            return {
                valor_inicial: e.valor_inicial ,
                valor_final: e.valor_final,
                identificador_ente_devedor:filterQueryDevedor[0].identificador_devedor,
                identificador_credor:filterQueryCredor[0].identificador_credor,
                data: e.data,
                status_remessa: e.status_remessa,
                motivo: e.motivo,
                identificador_remessa: e.identificador_remessa
            }
        })
       

        await pagamentos.bulkCreate(CreatePagamentos,{transaction})

        await transaction.commit()
        return res.status(200).json({ message: 'Pagamento efetuado' });
            
        }catch(error){
            console.log(error)
            if(transaction) await transaction.rollback()
            return res.status(500)
        }
}

module.exports = {CreatePagamentos};
