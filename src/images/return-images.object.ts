import { Prisma } from '@prisma/client'

export const returnImagesObject: Prisma.ImagesSelect = {
	id: true,
	name: true,
	images: true,
	color: true,
	slug: true
}