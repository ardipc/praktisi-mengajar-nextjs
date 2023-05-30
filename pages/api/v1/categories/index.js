import { createRouter } from "next-connect";
import middleware from '../../../../helpers/middleware';

import mongoDB from "@/helpers/mongodb";
import Categories from '@/models/categories';

const handler = createRouter()
    .use(middleware)
    .get(async (req, res) => {
        await mongoDB();
        let result = await Categories.find({});
        return res.json({ status: true, result });        
    })
    .post(async (req, res) => {
        const { body } = req;
        await mongoDB();
        let result = await Categories.create(body);
        res.json({ status: true, result });
    });

export default handler.handler();