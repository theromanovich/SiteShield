import { Module } from '@nestjs/common';
import { AccountService } from 'src/account/account.service';
import { DbModule } from 'src/db/db.module';
import { UsersService } from './users.service';

@Module({
  imports: [DbModule, AccountService],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
