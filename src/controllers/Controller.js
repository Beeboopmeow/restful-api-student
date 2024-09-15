const dataSource = require('../models'); 

class Controller {
    constructor(modelName) {
        this.model = modelName;
    }

    async getAll (req, res, next) {
        try {
            const registryList = await dataSource[this.model].findAll();
            return res.status(200).json(registryList);
        } catch (e) {
            next(e);
        }
    }

    async getOneById(req, res, next) {
        try {
            const registry = await dataSource[this.model].findByPk(req.params.id);
            return res.status(200).json(registry);
        } catch (e) {
            next(e);
        }
    }

    async create(req, res, next) {
        try {
            const newRegistry = await dataSource[this.model].create(req.body);
            return res.status(200).json(newRegistry);
        } catch (e) {
            next(e);
        }
    }

    async update(req, res, next) {
        try {
            const registry = await dataSource[this.model].findByPk(req.params.id);
            const updatedRegistry = await registry.update(req.body);
            return res.status(200).json({ message: 'Registry successfully updated' , updatedRegistry });
        } catch (e) {
            next(e);
        }
    }

    async erase(req, res, next) {
        try {
            const registry = await dataSource[this.model].findByPk(req.params.id);
            registry.destroy();
            return res.status(200).json({ message: 'Registry successfully deleted' });
        } catch (e) {
            next(e);
        }
    }
}

module.exports = Controller;