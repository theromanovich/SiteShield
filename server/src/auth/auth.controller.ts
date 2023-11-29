import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Res,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { GetSessionInfoDto, SignInBodyDto, SignUpBodyDto } from './dto';
import { Response } from 'express';
import { CookieService } from './cookie.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService, private cookieService: CookieService) {}

  @Post('sign-up')
  @ApiCreatedResponse()
  async signUp(@Body() body: SignUpBodyDto, @Res() res: Response) {
    const { accessToken } = await this.authService.signUp(
      body.email,
      body.password,
    );

    this.cookieService.setToken(res, accessToken);
  }

  @Post('sign-in')
  @ApiOkResponse()
  @HttpCode(HttpStatus.OK)
  signIn(@Body() body: SignInBodyDto) {}

  @Post('sign-out')
  @HttpCode(HttpStatus.OK)
  signOut() {}

  @Get('session')
  @ApiOkResponse({
    type: GetSessionInfoDto,
  })
  getSessionInfo() {}
}
