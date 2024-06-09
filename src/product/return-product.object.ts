import { Prisma } from '@prisma/client'
import { returnCategoryObject } from 'src/category/return-category.object'
import { returnReviewObject } from 'src/review/return-review.object'
import { returnImagesObject } from '../images/return-images.object'

export const productReturnObject: Prisma.ProductSelect = {
	images: {select: returnImagesObject},
	description: true,
	id: true,
	name: true,
	price: true,
	createdAt: true,
	storage: true,
	slug: true,
	screen: true,
	photo: true,
	processor: true,
	operatingSystem: true,
	displayRefreshRate: true,
	category: { select: returnCategoryObject },
	reviews: {
		select: returnReviewObject,
		orderBy: {
			createdAt: 'desc'
		}
	}
}

export const productReturnObjectFullest: Prisma.ProductSelect = {
	...productReturnObject
}
