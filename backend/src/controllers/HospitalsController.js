const { db } = require('../database/connection')

module.exports = {
    async search_top_10_hospitals (req,res){
        let hospitals = await db.query("SELECT SUM(`pContr`) AS sum, group_concat(DISTINCT `adjudicante`) AS hospital FROM `informacao` WHERE `adjudicante` LIKE '%Hospital%' AND `adjudicante` NOT LIKE '%câmara%' AND `dataPub` BETWEEN '2008-01-01' AND '2011-12-31' GROUP BY `adjudicante` ORDER BY sum DESC ")
    
        res.json(hospitals[0])
    },
    async search_top_10_hospitals_2008 (req,res){
        let hospitals = await db.query("SELECT SUM(`pContr`) AS sum, group_concat(DISTINCT `adjudicante`) AS hospital FROM `informacao` WHERE `adjudicante` LIKE '%Hospital%' AND `adjudicante` NOT LIKE '%câmara%' AND `dataPub` BETWEEN '2008-01-01' AND '2008-12-31' GROUP BY `adjudicante` ORDER BY sum DESC ")
    
        res.json(hospitals[0])
    },
    async search_top_10_hospitals_2009 (req,res){
        let hospitals = await db.query("SELECT SUM(`pContr`) AS sum, group_concat(DISTINCT `adjudicante`) AS hospital FROM `informacao` WHERE `adjudicante` LIKE '%Hospital%' AND `adjudicante` NOT LIKE '%câmara%' AND `dataPub` BETWEEN '2009-01-01' AND '2009-12-31' GROUP BY `adjudicante` ORDER BY sum DESC ")
    
        res.json(hospitals[0])
    },
    async search_top_10_hospitals_2010 (req,res){
        let hospitals = await db.query("SELECT SUM(`pContr`) AS sum, group_concat(DISTINCT `adjudicante`) AS hospital FROM `informacao` WHERE `adjudicante` LIKE '%Hospital%' AND `adjudicante` NOT LIKE '%câmara%' AND `dataPub` BETWEEN '2010-01-01' AND '2010-12-31' GROUP BY `adjudicante` ORDER BY sum DESC ")
    
        res.json(hospitals[0])
    },
    async search_top_10_hospitals_2011 (req,res){
        let hospitals = await db.query("SELECT SUM(`pContr`) AS sum, group_concat(DISTINCT `adjudicante`) AS hospital FROM `informacao` WHERE `adjudicante` LIKE '%Hospital%' AND `adjudicante` NOT LIKE '%câmara%' AND `dataPub` BETWEEN '2011-01-01' AND '2011-12-31' GROUP BY `adjudicante` ORDER BY sum DESC ")
    
        res.json(hospitals[0])
    },
    async search_max_hospitals (req,res){
        let companies_max = await db.query("SELECT COUNT(`adjudicante`) AS count, group_concat(DISTINCT `adjudicante`) AS empresa FROM `informacao` WHERE `adjudicante` LIKE '%Hospital%' AND `adjudicante` NOT LIKE '%câmara%' GROUP BY `adjudicante` ORDER BY count DESC ")
    
        return res.json(companies_max[0])
    },
    async search_max_2008_hospitals (req,res){
        let companies_max_2008 = await db.query("SELECT COUNT(`adjudicante`) AS count, group_concat(DISTINCT `adjudicante`) AS empresa FROM `informacao` WHERE `adjudicante` LIKE '%Hospital%' AND `adjudicante` NOT LIKE '%câmara%' AND `dataPub` BETWEEN '2008-01-01' AND '2008-12-31' GROUP BY `adjudicante` ORDER BY count DESC")
    
        return res.json(companies_max_2008[0])
    },
    async search_max_2009_hospitals (req,res){
        let companies_max_2009 = await db.query("SELECT COUNT(`adjudicante`) AS count, group_concat(DISTINCT `adjudicante`) AS empresa FROM `informacao` WHERE `adjudicante` LIKE '%Hospital%' AND `adjudicante` NOT LIKE '%câmara%' AND `dataPub` BETWEEN '2009-01-01' AND '2009-12-31' GROUP BY `adjudicante` ORDER BY count DESC")
    
        return res.json(companies_max_2009[0])
    },
    async search_max_2010_hospitals (req,res){
        let companies_max_2010 = await db.query("SELECT COUNT(`adjudicante`) AS count, group_concat(DISTINCT `adjudicante`) AS empresa FROM `informacao` WHERE `adjudicante` LIKE '%Hospital%' AND `adjudicante` NOT LIKE '%câmara%' AND `dataPub` BETWEEN '2010-01-01' AND '2010-12-31' GROUP BY `adjudicante` ORDER BY count DESC")
    
        return res.json(companies_max_2010[0])
    },
    async search_max_2011_hospitals (req,res){
        let companies_max_2011 = await db.query("SELECT COUNT(`adjudicante`) AS count, group_concat(DISTINCT `adjudicante`) AS empresa FROM `informacao` WHERE `adjudicante` LIKE '%Hospital%' AND `adjudicante` NOT LIKE '%câmara%' AND `dataPub` BETWEEN '2011-01-01' AND '2011-12-31' GROUP BY `adjudicante` ORDER BY count DESC")
    
        return res.json(companies_max_2011[0])
    },
}