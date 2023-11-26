import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { GetSessionInfoDto, SignInBodyDto, SignUpBodyDto } from './dto';

@Controller('auth')
export class AuthController {
  @Post('sign-up')
  @ApiCreatedResponse()
  signUp(@Body() body: SignUpBodyDto) {}

  @Post('sign-in')
  @ApiOkResponse()
  @HttpCode(HttpStatus.OK)
  signIn(@Body() body: SignInBodyDto) {}

  @Post('sign-out')
  @HttpCode(HttpStatus.OK)
  signOut() {}

  @Get('session')
  @ApiOkResponse({
    type: GetSessionInfoDto
  })
  getSessionInfo() {}
}
