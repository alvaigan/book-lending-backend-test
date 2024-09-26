import { Injectable } from '@nestjs/common';

@Injectable()
export class MemberService {
  getAllMember(): string {
    return 'all members';
  }
}
