import { Injectable } from '@nestjs/common';
import { Response } from 'express';

@Injectable()
export class CookieService {
  static tokenKey = 'access-token';

  setToken(res: Response, token: string) {
    res.cookie(CookieService.tokenKey, token, {
      httpOnly: false,
      maxAge: 24 * 60 * 60 * 1000,
      signed: false,
      secure: true,
      sameSite: 'none',
    });
  }

  removeToken(res: Response) {
    res.clearCookie(CookieService.tokenKey, {
      sameSite: 'none',
      secure: true,
    });
  }
}
