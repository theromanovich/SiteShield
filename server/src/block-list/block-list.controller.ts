import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { AddBlockItemDto, BlockItemDto, BlockListDto } from './dto';

@Controller('block-list')
export class BlockListController {
  @Get()
  @ApiOkResponse({
    type: BlockListDto,
  })
  getLst() {}

  @Post('item')
  @ApiCreatedResponse({
    type: BlockItemDto,
  })
  addBlockList(@Body() body: AddBlockItemDto) {}

  @Delete('item/:id')
  @ApiOkResponse()
  removeBlockItem(@Param(ParseIntPipe) id: number) {}
}
