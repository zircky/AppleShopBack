import { IsOptional, IsString } from 'class-validator'

export class CreateDeliveryDto {
	@IsString()
	address: string

	@IsString()
	city: string

	@IsString()
	house: string

	@IsOptional()
	@IsString()
	building: string
}
