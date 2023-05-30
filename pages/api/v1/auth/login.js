import { createRouter } from "next-connect";
import { Users } from '@/models';

var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');

const handler = createRouter()
    .post(async (req, res) => {
        const { body } = req;
        // {
        //     "email": "notifikasi.ong@gmail.com",
        //     "password": "admin123"
        // }

        let mhs = await Users.findOne({
            where: { 
                email: body.email
            } 
        });

        if(mhs) {
            
            let isPass = bcrypt.compareSync(body.password, mhs.password);
            if(isPass){
                var token = jwt.sign({ email: body.email }, process.env.SECRET_JWT, { expiresIn: "3d" });
                await Users.update({ token: token }, { where: { email: body.email } });
                
                res.json({ 
                    status: true, 
                    result: token, 
                    type: 'bearer' 
                });
            } else {
                res.json({ status: false, result: "Password tidak cocok." });
            }
        } else {
            res.json({ status: false, result: "User tidak ada." });
        }
    });

export default handler.handler();