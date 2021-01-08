const {db} = require('../database/connection')


module.exports = {
    async public_works_contracts (req,res){
        let contracts = await db.query("SELECT * FROM `informacao` WHERE `adjudicante` LIKE '%Hospital%' AND `adjudicante` NOT LIKE '%câmara%' AND adjudicante NOT LIKE '%município%' AND `dataPub` BETWEEN '2008-01-01' AND '2011-12-31' AND tipoProc LIKE '%Ajuste direto%' AND tipoCont like '%empreitadas de obras públicas%' AND pContr > 30000")
        
        


        return res.json(contracts[0])
    },

    async acquisition_of_real_state(req,res){
        let contracts = await db.query("SELECT * FROM informacao WHERE adjudicante LIKE '%hospital%' AND adjudicante NOT LIKE '%câmara%' AND adjudicante NOT LIKE '%município%' AND dataPub BETWEEN '2008-01-01' AND '2011-12-31' AND tipoProc LIKE '%Ajuste direto%' AND tipoCont like '%aquisição de bens móveis%' AND pContr > 20000")
        
        

        return res.json(contracts[0])
    },

    async purchasing_services(req,res){
        let contracts = await db.query("SELECT * FROM informacao WHERE adjudicante LIKE '%hospital%' AND adjudicante NOT LIKE '%câmara%' AND adjudicante NOT LIKE '%município%' AND dataPub BETWEEN '2008-01-01' AND '2011-12-31' AND tipoProc LIKE '%Ajuste direto%' AND tipoCont like '%aquisição de serviços%' AND pContr > 20000")
        
        

        return res.json(contracts[0])
    },

    async other_contracts(req,res){
        let contracts = await db.query("SELECT * FROM informacao WHERE adjudicante LIKE '%hospital%' AND adjudicante NOT LIKE '%câmara%' AND adjudicante NOT LIKE '%município%' AND dataPub BETWEEN '2008-01-01' AND '2011-12-31' AND tipoProc LIKE '%Ajuste direto%' AND tipoCont like '%-%' AND pContr > 50000")
    
        
        
        return res.json(contracts[0])
    },

    async fundamentos (req,res){
        let fund = {
            public_works: 'Artigo 19.º, alínea d) do Código dos Contratos Públicos',
            acquisition_of_real_state: 'Artigo 20.º, n.º 1, alínea d) do Código dos Contratos Públicos',
            purchasing_services: 'Artigo 20.º, n.º 1, alínea d) do Código dos Contratos Públicos',
            other_contracts: 'Artigo 21.º, n.º 1, alínea c) do Código dos Contratos Públicos'
        }

        return res.json(fund)
    },

     async repeated_contracts(req,res){
        let contracts = await db.query("SELECT Count(*) as count, dataPub, tipoCont, tipoProc, descr, fund, obj, adjudicante, adjudicatario, pContr FROM informacao WHERE adjudicante LIKE '%hospital%' AND adjudicante NOT LIKE '%câmara%' AND adjudicante NOT LIKE '%município%' AND dataPub BETWEEN '2008-01-01' AND '2011-12-31' group by obj Having count > 1")
        
        
        return res.json(contracts[0])
        

       
    }
}