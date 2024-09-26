import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { members } from '../../../sampledata';
import { Member } from '../../models/member.model';

export default class CreateMember implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Member)
      .values(members)
      .execute();
  }
}
