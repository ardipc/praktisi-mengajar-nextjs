import { createRouter } from "next-connect";
import Users from "@/models/users";
import mongoDB from "@/helpers/mongodb";
var jwt = require('jsonwebtoken');

const handler = createRouter()
    .get(async (req, res) => {
        await mongoDB();

        const { query } = req;
        try {
            let verify = jwt.verify(query.q, process.env.SECRET_JWT)
            await Users.updateOne({ email: verify.email }, { is_active: true });

            res.json({ status: true, result: "Akun sudah diaktifkan." });
        } catch (error) {
            res.json({ status: false, result: "Link sudah expired."})
        }
    });

export default handler.handler();