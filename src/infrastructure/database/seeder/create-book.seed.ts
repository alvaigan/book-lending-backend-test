import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { books } from '../../../sampledata';
import { Book } from '../../models/book.model';

export default class CreateBook implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Book)
      .values(books)
      .execute();
  }
}
