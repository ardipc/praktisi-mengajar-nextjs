import { createRouter } from "next-connect";

import { Users } from "@/models";
var jwt = require('jsonwebtoken');

const handler = createRouter()
    .get(async (req, res) => {
        const { query } = req;
        try {
            let verify = jwt.verify(query.q, process.env.SECRET_JWT)
            await Users.update({ is_active: 1 }, { where: { email: verify.email }});
            res.json({ status: true, result: "Akun sudah diaktifkan." });
        } catch (error) {
            res.json({ status: false, result: "Link sudah expired."})
        }
    });

export default handler.handler();