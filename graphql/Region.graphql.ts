import { objectType } from '@nexus/schema';
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const Region = objectType({
    name: 'Region',
    definition(t) {
        t.string('id');
        t.string('regName');
        t.string('regCode');
        t.list.field('divisions', {
            type: 'Region',
            resolve: async (parent: any, _args: any, _ctx: any) => {
                return await prisma.region.findOne({
                    where: { id: parent.id },
                })
                    .division();
            },

        });
    },
});
export default Region