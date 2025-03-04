const projectModel = require("../models/project.model");

module.exports.create = async (req,res)=>{
    try {
        const {name, code} = req.body;
        if(!name || !name?.trim()){
            return res.status(400).json({message: "name is required"})
        }

        const project = await projectModel.create({name, code: ' '})

        res.status(201).json({message: 'project created successfully', data:project})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

module.exports.listController = async (req,res)=>{
    try {
        const projects = await projectModel.find();

        res.status(200).json({data: projects})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}