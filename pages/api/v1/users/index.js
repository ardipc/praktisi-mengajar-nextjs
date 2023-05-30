import { createRouter } from "next-connect";
import middleware from '../../../../helpers/middleware';

import { Users } from "@/models";

const handler = createRouter()
    .use(middleware)
    .get(async (req, res) => {
        let result = await Users.findAndCountAll();
        res.json({ status: true, result });        
    });

export default handler.handler();