import { product_iPhone } from './product.data'
import { PrismaClient } from '@prisma/client'
import { categoryData } from './category.data'

const prisma = new PrismaClient()
async function main() {
	await prisma.category.createMany({
		data: categoryData
	})
	await prisma.product.createMany({
		data: product_iPhone
	})
}

main()
	.catch(e => {
		// eslint-disable-next-line no-console
		console.error(e)
	})
	.finally(async () => {
		await prisma.$disconnect()
	})