import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsOptional } from 'class-validator';

export class AccoutDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  ownerId: number;

  @ApiProperty()
  @IsBoolean()
  isBlockingEnabled: boolean;

  @ApiProperty()
  @IsBoolean()
  allowFromBlockListOnly: boolean;
}

export class PatchAccountDto {
  @ApiProperty({ required: false })
  @IsBoolean()
  @IsOptional()
  isBlockingEnabled: boolean;

  @ApiProperty({ required: false })
  @IsBoolean()
  @IsOptional()
  allowFromBlockListOnly: boolean;
}
