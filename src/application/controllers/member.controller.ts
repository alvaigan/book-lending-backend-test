import { Controller, Get } from '@nestjs/common';
import { MemberService } from '../../domain/member/member.service';

@Controller('member')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Get('/')
  getAllMember(): string {
    return this.memberService.getAllMember();
  }
}
