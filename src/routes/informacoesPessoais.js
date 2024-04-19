import { Router } from "express"

const router = Router();

router.get("/", async (req, res) => {
    const informacoesPessoais = await req.context.models.InformacoesPessoais.findAll();
    return res.send(informacoesPessoais);
})

router.post("/", async (req, res) => {
    console.log("cheguei aqui - " + req.body)
    console.log(req.context)
    const informacoesPessoais = await req.context.models.InformacoesPessoais.create({
        email: req.body.email,
        nome_completo: req.body.nome_completo,
        cargo: req.body.cargo,
        cidade: req.body.cidade,
        estado: req.body.estado,
        pais: req.body.pais
    });

    return res.send(informacoesPessoais);
})

  
export default router;

