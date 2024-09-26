const express = require('express')
const router = express.Router();
const Projects = require('../model/projectModel')

router.get('/all', async (req, res) => {
    try {
        const fetchedprojects = await Projects.find()
        res.status(200).json(fetchedprojects)
    }catch (error) {
        res.status(500).json(error)
    }
})

router.post('/add', async (req, res) => {
    try {
        const newprojectdata = new Projects(req.body)
        const { title, desc } = newprojectdata
        if ( !title || !desc) {
            res.status(400).json({ message: "Title & Desc Required" })
        }
        const savedata = await newprojectdata.save()
        res.status(201).json(savedata)
    } catch (error) {
        res.status(500).json(error)
    }
})