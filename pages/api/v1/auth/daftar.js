import { createRouter } from "next-connect";
import sendMail from "@/helpers/email";

import { Users } from "@/models";

var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');

const handler = createRouter()
    .post(async (req, res) => {
        const { body } = req;

        let encPass = bcrypt.hashSync(body.password, 10);
        console.log(encPass);
        
        await Users.create({...body, password: encPass });
        let enc = jwt.sign({ email: body.email }, process.env.SECRET_JWT, { expiresIn: '1h' });
        
        await sendMail({
            to: body.email,
            subject: 'Aktivasi Akun',
            content: `${process.env.APP_BASE}/auth/aktivasi?q=${enc}`
        });

        res.json({ status: true, result: "Mohon cek email kamu untuk aktivasi akun." });
    });

export default handler.handler();