import { ArrayMinSize, IsString } from 'class-validator'

export class ImagesDto {
	@IsString()
	name: string

	@IsString({ each: true })
	@ArrayMinSize(1)
	images: string[]

	@IsString()
	color: string

}