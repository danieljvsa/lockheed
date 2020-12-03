const {connection, db} = require('../database/connection')


module.exports = {
    async search_top_10_companies (req,res){
        let companies = await db.query("SELECT SUM(`pContr`) AS sum, group_concat(DISTINCT `adjudicatario`) FROM `informacao` WHERE `adjudicante` LIKE '%Hospital%' GROUP BY `adjudicatario` ORDER BY sum DESC LIMIT 12")
        
        return res.json(companies[0])
    },
    async search_top_10_companies_2008 (req,res){
        let companies_2008 = await db.query("SELECT SUM(`pContr`) AS sum, group_concat(DISTINCT `adjudicatario`) FROM `informacao` WHERE `adjudicante` LIKE '%Hospital%'  AND `dataPub` BETWEEN '2008-01-01' AND '2008-12-31' GROUP BY `adjudicatario` ORDER BY sum DESC LIMIT 10")
        
        return res.json(companies_2008[0])
    },
    async search_top_10_companies_2009 (req,res){
        let companies_2009 = await db.query("SELECT SUM(`pContr`) AS sum, group_concat(DISTINCT `adjudicatario`) FROM `informacao` WHERE `adjudicante` LIKE '%Hospital%' AND `dataPub` BETWEEN '2009-01-01' AND '2009-12-31' GROUP BY `adjudicatario` ORDER BY sum DESC LIMIT 10")
        
        return res.json(companies_2009[0])
    },
    async search_top_10_companies_2010 (req,res){
        let companies_2010 = await db.query("SELECT SUM(`pContr`) AS sum, group_concat(DISTINCT `adjudicatario`) FROM `informacao` WHERE `adjudicante` LIKE '%Hospital%' AND `dataPub` BETWEEN '2010-01-01' AND '2010-12-31' GROUP BY `adjudicatario` ORDER BY sum DESC LIMIT 10")
        
        return res.json(companies_2010[0])
    },
    async search_top_10_companies_2011 (req,res){
        let companies_2011 = await db.query("SELECT SUM(`pContr`) AS sum, group_concat(DISTINCT `adjudicatario`) FROM `informacao` WHERE `adjudicante` LIKE '%Hospital%' AND `dataPub` BETWEEN '2011-01-01' AND '2011-12-31' GROUP BY `adjudicatario` ORDER BY sum DESC LIMIT 10")
        
        return res.json(companies_2011[0])
    },
}