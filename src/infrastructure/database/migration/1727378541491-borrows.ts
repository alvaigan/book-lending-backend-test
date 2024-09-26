import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class Borrows1727378541491 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'borrows',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            isUnique: true,
            isGenerated: true,
          },
          {
            name: 'member_id',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'book_id',
            type: 'uuid',
            isNullable: false,
          },
        ],
      }),
    );
    await queryRunner.query(
      `ALTER TABLE borrows ALTER COLUMN id SET DEFAULT uuid_generate_v4();`,
    );

    await queryRunner.createForeignKey(
      'borrows',
      new TableForeignKey({
        name: 'fk_borrows_books',
        columnNames: ['book_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'books',
      }),
    );

    await queryRunner.createForeignKey(
      'borrows',
      new TableForeignKey({
        name: 'fk_borrows_members',
        columnNames: ['member_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'members',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('borrows', 'fk_borrows_books');
    await queryRunner.dropForeignKey('borrows', 'fk_borrows_members');
    await queryRunner.dropTable('borrows');
  }
}
