import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common'
import { ImagesService } from './images.service'
import { Auth } from '../auth/decorators/auth.decorator'
import { ImagesDto } from './images.dto'

@Controller('images')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  @Get()
  async getAll() {
    return this.imagesService.getAll()
  }

  @Get('by-slug/:slug')
  async getBySlug(@Param('slug') slug:string){
    return this.imagesService.bySlug(slug)
  }

  @Get(':id')
  @Auth()
  async getById(@Param('id') id:string) {
    return this.imagesService.byId(+id)
  }

  @HttpCode(200)
  @Auth('admin')
  @Post()
  async create() {
    return this.imagesService.create()
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth('admin')
  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: ImagesDto) {
    return this.imagesService.update(+id, dto)
  }

  @HttpCode(200)
  @Auth('admin')
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.imagesService.delete(+id)
  }

}
