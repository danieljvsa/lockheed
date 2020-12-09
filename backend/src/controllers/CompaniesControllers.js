const {db} = require('../database/connection')


module.exports = {
    async search_top_10_companies (req,res){
        let companies = await db.query("SELECT SUM(`pContr`) AS sum, group_concat(DISTINCT `adjudicatario`) AS empresa FROM `informacao` WHERE `adjudicante` LIKE '%Hospital%' GROUP BY `adjudicatario` ORDER BY sum DESC LIMIT 12")
        
        return res.json(companies[0])
    },
    async search_top_10_companies_2008 (req,res){
        let companies_2008 = await db.query("SELECT SUM(`pContr`) AS sum, group_concat(DISTINCT `adjudicatario`) AS empresa FROM `informacao` WHERE `adjudicante` LIKE '%Hospital%'  AND `dataPub` BETWEEN '2008-01-01' AND '2008-12-31' GROUP BY `adjudicatario` ORDER BY sum DESC LIMIT 10")
        
        return res.json(companies_2008[0])
    },
    async search_top_10_companies_2009 (req,res){
        let companies_2009 = await db.query("SELECT SUM(`pContr`) AS sum, group_concat(DISTINCT `adjudicatario`) AS empresa FROM `informacao` WHERE `adjudicante` LIKE '%Hospital%' AND `dataPub` BETWEEN '2009-01-01' AND '2009-12-31' GROUP BY `adjudicatario` ORDER BY sum DESC LIMIT 10")
        
        return res.json(companies_2009[0])
    },
    async search_top_10_companies_2010 (req,res){
        let companies_2010 = await db.query("SELECT SUM(`pContr`) AS sum, group_concat(DISTINCT `adjudicatario`) AS empresa FROM `informacao` WHERE `adjudicante` LIKE '%Hospital%' AND `dataPub` BETWEEN '2010-01-01' AND '2010-12-31' GROUP BY `adjudicatario` ORDER BY sum DESC LIMIT 10")
        
        return res.json(companies_2010[0])
    },
    async search_top_10_companies_2011 (req,res){
        let companies_2011 = await db.query("SELECT SUM(`pContr`) AS sum, group_concat(DISTINCT `adjudicatario`) AS empresa FROM `informacao` WHERE `adjudicante` LIKE '%Hospital%' AND `dataPub` BETWEEN '2011-01-01' AND '2011-12-31' GROUP BY `adjudicatario` ORDER BY sum DESC LIMIT 10")
        
        return res.json(companies_2011[0])
    },
    async search_max_companies (req,res){
        let companies_max = await db.query("SELECT COUNT(`adjudicatario`) AS count, group_concat(DISTINCT `adjudicatario`) AS empresa FROM `informacao` WHERE `adjudicante` LIKE '%Hospital%' GROUP BY `adjudicatario` ORDER BY count DESC LIMIT 25")
    
        return res.json(companies_max[0])
    },
    async search_max_2008_companies (req,res){
        let companies_max_2008 = await db.query("SELECT COUNT(`adjudicatario`) AS count, group_concat(DISTINCT `adjudicatario`) AS empresa FROM `informacao` WHERE `adjudicante` LIKE '%Hospital%' AND `dataPub` BETWEEN '2008-01-01' AND '2008-12-31' GROUP BY `adjudicatario` ORDER BY count DESC")
    
        return res.json(companies_max_2008[0])
    },
    async search_max_2009_companies (req,res){
        let companies_max_2009 = await db.query("SELECT COUNT(`adjudicatario`) AS count, group_concat(DISTINCT `adjudicatario`) AS empresa FROM `informacao` WHERE `adjudicante` LIKE '%Hospital%' AND `dataPub` BETWEEN '2009-01-01' AND '2009-12-31' GROUP BY `adjudicatario` ORDER BY count DESC")
    
        return res.json(companies_max_2009[0])
    },
    async search_max_2010_companies (req,res){
        let companies_max_2010 = await db.query("SELECT COUNT(`adjudicatario`) AS count, group_concat(DISTINCT `adjudicatario`) AS empresa FROM `informacao` WHERE `adjudicante` LIKE '%Hospital%' AND `dataPub` BETWEEN '2010-01-01' AND '2010-12-31' GROUP BY `adjudicatario` ORDER BY count DESC")
    
        return res.json(companies_max_2010[0])
    },
    async search_max_2011_companies (req,res){
        let companies_max_2011 = await db.query("SELECT COUNT(`adjudicatario`) AS count, group_concat(DISTINCT `adjudicatario`) AS empresa FROM `informacao` WHERE `adjudicante` LIKE '%Hospital%' AND `dataPub` BETWEEN '2011-01-01' AND '2011-12-31' GROUP BY `adjudicatario` ORDER BY count DESC")
    
        return res.json(companies_max_2011[0])
    },
    async search_max_companies (req,res){
        let companies_max = await db.query("SELECT COUNT(`adjudicatario`) AS count, group_concat(DISTINCT `adjudicatario`) AS empresa FROM `informacao` WHERE `adjudicante` LIKE '%Hospital%' AND `dataPub` BETWEEN '2008-01-01' AND '2011-12-31' GROUP BY `adjudicatario` ORDER BY count DESC")
        
        return res.json(companies_max[0])
    }
}