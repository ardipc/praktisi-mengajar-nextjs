import { createRouter } from "next-connect";
import middleware from '../../../../helpers/middleware';

import mongoDB from "@/helpers/mongodb";
import Products from '@/models/products';

const handler = createRouter()
    .use(middleware)
    .get(async (req, res) => {
        await mongoDB();
        const { query } = req;

        let result = await Products.findById(query.id).populate('categories');
        res.json({ status: true, result: result });        
    })
    .put(async (req, res) => {
        await mongoDB();
        const { query, body } = req;
        let result = await Products.update({_id: query.id}, body);
        res.json({ status: true, result });
    })
    .delete(async (req, res) => {
        await mongoDB();
        const { query } = req;
        let del = await Products.deleteOne({ _id: query.id });
        res.json({ status: true, result: del });
    });

export default handler.handler();