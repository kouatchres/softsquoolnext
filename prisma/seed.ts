
import * as faker from "faker"
import { PrismaClient } from '@prisma/client'


const data = Array.from({ length: 200 }).map(() => ({
    name: faker.name.firstName(),
    image: faker.image.image(),
    email: faker.internet.email(),
}));
const prisma = new PrismaClient()

 const  main =async()=> {
data.map((user)=> await prisma.user.create({ data: user }))
       }  
    main()
    .catch(e => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
