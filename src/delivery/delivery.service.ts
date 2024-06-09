import { Injectable } from '@nestjs/common'
import { Delivery } from '@prisma/client'
import { PrismaService } from '../prisma.service'
import { CreateDeliveryDto } from './dto/create-delivery.dto'

@Injectable()
export class DeliveryService {
	constructor(private prisma: PrismaService) {
	}

	async createDelivery(data: CreateDeliveryDto, userId: number) {
		return this.prisma.delivery.create({
			data: {
				address: data.address,
				city: data.city,
				building: data.building,
				house: data.house,
				user: {
					connect: { id: userId }
				}
			}
		})
	}

	async getDeliveries(userId: number): Promise<Delivery[]> {
		return this.prisma.delivery.findMany({
			where: { userId },
		});
	}
}
