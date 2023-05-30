import { createRouter } from "next-connect";
import middleware from '../../../../helpers/middleware';

import { Users } from "@/models";

const handler = createRouter()
    .use(middleware)
    .get(async (req, res) => {
        const { user } = req;
        let get = await Users.findOne({where: {email: user.email}});
        res.json({ status: true, result: get });        
    });

export default handler.handler();