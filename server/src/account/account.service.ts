import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { PatchAccountDto } from './dto';

@Injectable()
export class AccountService {
  constructor(private db: DbService) {}

  async getAccount(userId: number) {
    return this.db.account.findUniqueOrThrow({ where: { ownerId: userId } });
  }

  async patchAccount(userId: number, patch: PatchAccountDto) {
    return this.db.account.update({
      where: {
        ownerId: userId,
      },
      data: { ...patch },
    });
  }
}
