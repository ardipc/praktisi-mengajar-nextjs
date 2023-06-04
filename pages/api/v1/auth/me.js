import { createRouter } from "next-connect";
import middleware from '../../../../helpers/middleware';

import Users from "@/models/users";
import mongoDB from "@/helpers/mongodb";

const handler = createRouter()
    .use(middleware)
    .get(async (req, res) => {
        await mongoDB();
        
        const { user } = req;
        let get = await Users.findOne({ email: user.email });
        return res.json({ status: true, result: get });        
    });

export default handler.handler();