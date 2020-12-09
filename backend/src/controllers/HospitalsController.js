const { db } = require('../database/connection')

module.exports = {
    async search_top_10_hospitals (req,res){
        let hospitals = await db.query("SELECT SUM(`pContr`) AS sum, group_concat(DISTINCT `adjudicante`) AS hospital FROM `informacao` WHERE `adjudicante` LIKE '%Hospital%' AND `dataPub` BETWEEN '2008-01-01' AND '2011-12-31' GROUP BY `adjudicante` ORDER BY sum DESC LIMIT 12")
    
        res.json(hospitals[0])
    },
    async search_top_10_minus_hospitals (req,res){
        let hospitals = await db.query("SELECT SUM(`pContr`) AS sum, group_concat(DISTINCT `adjudicante`) AS hospital FROM `informacao` WHERE `adjudicante` LIKE '%Hospital%' AND `adjudicante` NOT LIKE '%lda%' AND `dataPub` BETWEEN '2008-01-01' AND '2011-12-31' GROUP BY `adjudicante` ORDER BY sum ASC LIMIT 12")
    
        res.json(hospitals[0])
    },
    async search_top_10_hospitals_2008 (req,res){
        let hospitals = await db.query("SELECT SUM(`pContr`) AS sum, group_concat(DISTINCT `adjudicante`) AS hospital FROM `informacao` WHERE `adjudicante` LIKE '%Hospital%' AND `dataPub` BETWEEN '2008-01-01' AND '2008-12-31' GROUP BY `adjudicante` ORDER BY sum DESC LIMIT 12")
    
        res.json(hospitals[0])
    },
    async search_top_10_hospitals_2009 (req,res){
        let hospitals = await db.query("SELECT SUM(`pContr`) AS sum, group_concat(DISTINCT `adjudicante`) AS hospital FROM `informacao` WHERE `adjudicante` LIKE '%Hospital%' AND `dataPub` BETWEEN '2009-01-01' AND '2009-12-31' GROUP BY `adjudicante` ORDER BY sum DESC LIMIT 12")
    
        res.json(hospitals[0])
    },
    async search_top_10_hospitals_2010 (req,res){
        let hospitals = await db.query("SELECT SUM(`pContr`) AS sum, group_concat(DISTINCT `adjudicante`) AS hospital FROM `informacao` WHERE `adjudicante` LIKE '%Hospital%' AND `dataPub` BETWEEN '2010-01-01' AND '2010-12-31' GROUP BY `adjudicante` ORDER BY sum DESC LIMIT 12")
    
        res.json(hospitals[0])
    },
    async search_top_10_hospitals_2011 (req,res){
        let hospitals = await db.query("SELECT SUM(`pContr`) AS sum, group_concat(DISTINCT `adjudicante`) AS hospital FROM `informacao` WHERE `adjudicante` LIKE '%Hospital%' AND `dataPub` BETWEEN '2011-01-01' AND '2011-12-31' GROUP BY `adjudicante` ORDER BY sum DESC LIMIT 12")
    
        res.json(hospitals[0])
    },
    async search_top_10_minus_hospitals_2008 (req,res){
        let hospitals = await db.query("SELECT SUM(`pContr`) AS sum, group_concat(DISTINCT `adjudicante`) AS hospital FROM `informacao` WHERE `adjudicante` LIKE '%Hospital%' AND `adjudicante` NOT LIKE '%lda%' OR '%câmara%' AND `dataPub` BETWEEN '2008-01-01' AND '2008-12-31' GROUP BY `adjudicante` ORDER BY sum ASC LIMIT 12")
    
        res.json(hospitals[0])
    },
    async search_top_10_minus_hospitals_2009 (req,res){
        let hospitals = await db.query("SELECT SUM(`pContr`) AS sum, group_concat(DISTINCT `adjudicante`) AS hospital FROM `informacao` WHERE `adjudicante` LIKE '%Hospital%' AND `adjudicante` NOT LIKE '%associação%' AND `dataPub` BETWEEN '2009-01-01' AND '2009-12-31' GROUP BY `adjudicante` ORDER BY sum ASC LIMIT 12")
    
        res.json(hospitals[0])
    },
    async search_top_10_minus_hospitals_2010 (req,res){
        let hospitals = await db.query("SELECT SUM(`pContr`) AS sum, group_concat(DISTINCT `adjudicante`) AS hospital FROM `informacao` WHERE `adjudicante` LIKE '%Hospital%' AND `adjudicante` NOT LIKE '%associação%' AND `dataPub` BETWEEN '2010-01-01' AND '2010-12-31' GROUP BY `adjudicante` ORDER BY sum ASC LIMIT 12")
    
        res.json(hospitals[0])
    },
    async search_top_10_minus_hospitals_2011 (req,res){
        let hospitals = await db.query("SELECT SUM(`pContr`) AS sum, group_concat(DISTINCT `adjudicante`) AS hospital FROM `informacao` WHERE `adjudicante` LIKE '%Hospital%' AND `dataPub` BETWEEN '2011-01-01' AND '2011-12-31' GROUP BY `adjudicante` ORDER BY sum ASC LIMIT 12")
    
        res.json(hospitals[0])
    },
    
}