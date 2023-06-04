import { createRouter } from "next-connect";
import middleware from '../../../../helpers/middleware';

import mongoDB from "@/helpers/mongodb";
import Users from '@/models/users';

const handler = createRouter()
    .use(middleware)
    .get(async (req, res) => {
        await mongoDB();
        let result = await Users.find({});
        return res.json({ status: true, result });        
    });

export default handler.handler();