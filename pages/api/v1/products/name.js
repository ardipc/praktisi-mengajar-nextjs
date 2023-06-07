import { createRouter } from "next-connect";
import middleware from '../../../../helpers/middleware';

import mongoDB from "@/helpers/mongodb";
import Products from '@/models/products';

const handler = createRouter()
    // .use(middleware)
    .get(async (req, res) => {
        await mongoDB();
        const { query } = req;
        let patterns = `.*${query.q}.*`;
        let result = await Products.find({ name: { $regex: patterns, $options: 'i' } }).populate('category_id');
        return res.json({ status: true, result: result });        
    });

export default handler.handler();