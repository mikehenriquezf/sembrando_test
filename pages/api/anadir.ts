import { prisma } from "../../lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { brand, title, category, content } = req.body;

    try {
        await prisma.carsModels.create({
            data: {
                carBrand: brand,
                carName: title,
                carModel: category,
                carDescription: content,
            },
        });
        res.status(200).json({ message: "Carro añadido con exito!" });
    } catch (error) {
        console.log("Fail :(");
    }
}
