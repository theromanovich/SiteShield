import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PasswordService } from './password/password.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, PasswordService]
})
export class AuthModule {}
