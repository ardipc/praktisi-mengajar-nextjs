import { createRouter } from "next-connect";
import middleware from '../../../../helpers/middleware';

import mongoDB from "@/helpers/mongodb";
import Categories from '@/models/categories';

const handler = createRouter()
    .use(middleware)
    .get(async (req, res) => {
        await mongoDB();
        const { query } = req;
        let result = await Categories.findById(query.id);
        res.json({ status: true, result });        
    })
    .put(async (req, res) => {
        await mongoDB();
        const { query, body } = req;
        let result = await Categories.update({_id: query.id}, body);
        res.json({ status: true, result });
    })
    .delete(async (req, res) => {
        await mongoDB();
        const { query } = req;
        let del = await Categories.deleteOne({ _id: query.id });
        res.json({ status: true, result: del });
    });

export default handler.handler();