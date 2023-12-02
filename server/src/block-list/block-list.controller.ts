import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { GetSessionInfoDto } from 'src/auth/dto';
import { SessionInfo } from 'src/auth/session-info.decorator';
import {
  AddBlockItemDto,
  BlockItemDto,
  BlockListDto,
  BlockListQueryDto,
} from './dto';

@Controller('block-list')
@UseGuards(AuthGuard)
export class BlockListController {
  @Get()
  @ApiOkResponse({
    type: BlockListDto,
  })
  getLst(
    @Query() query: BlockListQueryDto,
    @SessionInfo() session: GetSessionInfoDto,
  ) {}

  @Post('item')
  @ApiCreatedResponse({
    type: BlockItemDto,
  })
  addBlockList(
    @Body() body: AddBlockItemDto,
    @SessionInfo() session: GetSessionInfoDto,
  ) {}

  @Delete('item/:id')
  @ApiOkResponse()
  removeBlockItem(
    @Param(ParseIntPipe) id: number,
    @SessionInfo() session: GetSessionInfoDto,
  ) {}
}
