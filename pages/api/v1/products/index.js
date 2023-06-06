import { createRouter } from "next-connect";
import middleware from '../../../../helpers/middleware';

import mongoDB from "@/helpers/mongodb";
import Products from '@/models/products';

const handler = createRouter()
    // .use(middleware)
    .get(async (req, res) => {
        await mongoDB();
        let result = await Products.find({})
            .populate({
                path: 'category_id',
                select: 'name description',
                options: { alias: 'category' }
            });

        return res.json({ status: true, result });        
    })
    .post(async (req, res) => {
        const { body } = req;
        await mongoDB();
        let result = await Products.create(body);
        return res.json({ status: true, result });
    });

export default handler.handler();