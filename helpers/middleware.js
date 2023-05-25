import { createRouter } from "next-connect";

var jwt = require('jsonwebtoken');

const router = createRouter()
    .use(async (req, res, next) => {
        const { headers: { authorization } } = req;
        const pecah = authorization.split(' ');
        try {
            var decoded = jwt.verify(pecah[1], process.env.SECRET_JWT);
            console.log(decoded);
            req.user = decoded;
            next();
        } catch(err) {
            res.json({ status: false, message: "Unauthorize" });
        }
    });

export default router;