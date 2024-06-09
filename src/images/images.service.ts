import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { returnImagesObject } from './return-images.object'
import { ImagesDto } from './images.dto'
import { generateSlug } from '../utils/generate-slug'

@Injectable()
export class ImagesService {
	constructor(private prisma: PrismaService) {
	}

  async byId(id: number) {
    const image = await this.prisma.images.findUnique({
      where: {
        id
      },
      select: returnImagesObject
    })
    if (!image) {
      throw new Error('Image not found')
    }
    return image
  }

  async bySlug(slug: string) {
    const image = await this.prisma.images.findUnique({
      where:{
        slug
      },
      select: returnImagesObject
    })

    if (!image) {
      throw new NotFoundException('Image not found')
    }
    return image
  }

  async getAll() {
      return this.prisma.images.findMany({
          select:returnImagesObject
      })
  }

  async create() {
      return this.prisma.images.create({
          data:{
              name: '',
              color: '',
              images: '',
              slug: ''
              
          }
      })
  }

  async update(id: number, dto: ImagesDto) {
    const {name, images, color} = dto
    return this.prisma.images.update({
      where: {
        id
      },
      data: {
        name,
        images,
        color,
        slug: generateSlug(name)
      }
    })
  }

  async delete(id: number){
    return this.prisma.category.delete({
      where: {
        id
      }
    })
  }

}
