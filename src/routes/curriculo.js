import { Router } from 'express';

const router = Router();

router.get("/", async (req, res) => {
    try {
        const curriculo = await req.context.models.Curriculo.findAll();
        
        curriculo.length > 0 ? res.send(curriculo) : res.status(404).send({status: 404, message: "Nenhum currículo encontrado"})
    } catch(err) {
        return res.status(500).send({status: 500, message: err.message});
    }
    
}) 

router.post("/", async (req, res) => {
    try {
        const curriculo = await req.context.models.Curriculo.create({
            username: req.body.username,
        });
        res.send(curriculo);
    }catch(err) {
        res.status(400).send(err.message);
    }
})

router.put("/:id", async (req, res) => {
    try {
        const curriculo = await req.context.models.Curriculo.findByPk(req.params.id);
        curriculo.update({
            username: req.body.username
        });
        res.send(curriculo);
    }catch (err) {
        res.status(400).send(err.message);
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const curriculo = await req.context.models.Curriculo.findByPk(req.params.id);
        curriculo.destroy();

        res.sendStatus(204);

    }catch(err) {
        res.status(400).send(err.message);
    }
})

export default router;

