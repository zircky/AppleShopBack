import { PrismaClient } from '@prisma/client'
import { product_airpods, product_iPad, product_mac, product_watch } from './product.data'

const prisma = new PrismaClient()
async function main() {
	// await prisma.images.createMany({
	// 	data: imagesData
	// })
	// await prisma.category.createMany({
	// 	data: categoryData
	// })
	// await prisma.product.createMany({
	// 	data: product_iPhone
	// })
	await prisma.product.createMany({
		data: product_iPad
	})
	await prisma.product.createMany({
		data: product_watch
	})
	await prisma.product.createMany({
		data: product_mac
	})
	await prisma.product.createMany({
		data: product_airpods
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