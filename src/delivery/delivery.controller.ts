import { Body, Controller, Get, HttpCode, Post, UsePipes, ValidationPipe } from '@nestjs/common'
import { DeliveryService } from './delivery.service'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CurrentUser } from 'src/auth/decorators/user.decorator'
import { CreateDeliveryDto } from './dto/create-delivery.dto'

@Controller('delivery')
export class DeliveryController {
  constructor(private readonly deliveryService: DeliveryService) {}

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Post('create')
  async createDelivery(@Body() data: CreateDeliveryDto, @CurrentUser('id') userId: number) {
    return this.deliveryService.createDelivery(data, userId);
  }

  @HttpCode(200)
  @Auth()
  @Get()
  async getDeliveries(@CurrentUser('id') userId: number) {
    return this.deliveryService.getDeliveries(Number(userId));
  }
}
