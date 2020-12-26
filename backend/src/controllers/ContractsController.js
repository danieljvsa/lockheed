const {db} = require('../database/connection')


module.exports = {
    
    async companies (req,res){
        let companies = await db.query("SELECT DISTINCT substr(adjudicatario,instr(adjudicatario,'(') + 1, instr(adjudicatario,')') - instr(adjudicatario,'(') - 1) as cpv, adjudicatario as empresa From informacao WHERE adjudicante LIKE '%hospital%' AND  adjudicante NOT LIKE '%câmara%' AND `dataPub` BETWEEN '2008-01-01' AND '2011-12-31'")
        
        return res.json(companies[0])
    },
    async hospitals (req,res){
        let hospitals = await db.query("SELECT DISTINCT (substr(adjudicante,instr(adjudicante,'(') + 1, instr(adjudicante,')') - instr(adjudicante,'(') - 1)) as cpv, adjudicante as hospital From informacao WHERE adjudicante LIKE '%hospital%' AND adjudicante NOT LIKE '%câmara%' AND `dataPub` BETWEEN '2008-01-01' AND '2011-12-31'")
    
        return res.json(hospitals[0])
    },

    async contracts_company(req,res){
        let {company} = req.body

        await db.query("SELECT * FROM informacao WHERE adjudicatario LIKE '%" + company + "%' AND adjudicante LIKE '%hospital%' AND adjudicante NOT LIKE '%câmara%' AND `dataPub` BETWEEN '2008-01-01' AND '2011-12-31'").then(contracts => res.status(200).json(contracts[0])).catch(err => res.status(400).json(err))
    },

    async contracts_hospital(req,res){
        let {hospital} = req.body
        
        await db.query("SELECT * FROM informacao WHERE adjudicante LIKE '%" + hospital + "%' AND `dataPub` BETWEEN '2008-01-01' AND '2011-12-31' ").then(contracts => res.status(200).json(contracts[0])).catch(err => res.status(400).json(err))
    }
    

}