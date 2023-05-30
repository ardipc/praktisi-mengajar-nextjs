import { createRouter } from "next-connect";

var jwt = require('jsonwebtoken');

const router = createRouter()
    .use(async (req, res, next) => {
        const { headers: { authorization } } = req;
        if(authorization) {
            // Bearer xxx
            const pecah = authorization.split(' ');
            // ['Bearer', 'xxx']
            try {
                var decoded = jwt.verify(pecah[1], process.env.SECRET_JWT);
                console.log(decoded);
                req.user = decoded;
                next();
            } catch(err) {
                res.json({ status: false, result: "Unauthorize." });
            }
        } else {
            res.json({ status: false, result: "Need Authorization." });
        }
    });

export default router;