import { createRouter } from "next-connect";

import { Mahasiswa } from '@/models';

var jwt = require('jsonwebtoken');

const handler = createRouter()
    .post(async (req, res) => {
        const { body } = req;
        let mhs = await Mahasiswa.findOne({
            where: {
                nrp: body.nrp, 
                email: body.email
            } 
        });

        if(mhs) {
            // ketika sukses dan ada data mahasiswa
            var token = jwt.sign(body, process.env.SECRET_JWT, { expiresIn: "7d" });
            res.json({ 
                status: true, 
                result: token, 
                type: 'bearer' 
            });
        } else {
            res.json({ status: false, message: "User not found" });
        }
    });

export default handler.handler();