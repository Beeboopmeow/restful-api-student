const yup = require('yup');

const studentSchema = yup.object({
    body: yup.object({
        "name": yup.string().required()
    })
});

const courseSchema = yup.object({
    body: yup.object({
        "name": yup.string().required()
    })
});

const validate = (schema) => async (req, res, next) => {
    try {
        await schema.validate({
            body: req.body,
            query: req.query,
            params: req.params
        });
        return next();
    } catch(e) {
        return res.status(500).json({type: e.name, message: e.message});
    }
}

module.exports = { validate, studentSchema, courseSchema };