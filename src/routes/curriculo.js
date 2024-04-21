import { Router } from 'express';

const router = Router();

router.get("/", async (req, res) => {
    const curriculo = await req.context.models.Curriculo.findAll();

    return res.send(curriculo);
}) 

router.post("/", async (req, res) => {
    const curriculo = await req.context.models.Curriculo.create({
        username: req.body.username,
    });
    res.send(curriculo);
})

export default router;

