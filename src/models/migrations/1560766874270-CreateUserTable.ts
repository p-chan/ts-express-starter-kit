import { MigrationInterface, QueryRunner } from 'typeorm'

export class CreateUserTable1560766874270 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      'CREATE TABLE `users` (`id` int NOT NULL AUTO_INCREMENT, `email` varchar(254) NOT NULL, `name` varchar(48) NOT NULL, `screen_name` varchar(24) NOT NULL, `password` varchar(60) NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), UNIQUE INDEX `IDX_97672ac88f789774dd47f7c8be` (`email`), UNIQUE INDEX `IDX_ba9af88ac0003d40f4f7033e47` (`screen_name`), PRIMARY KEY (`id`)) ENGINE=InnoDB'
    )
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      'DROP INDEX `IDX_ba9af88ac0003d40f4f7033e47` ON `users`'
    )
    await queryRunner.query(
      'DROP INDEX `IDX_97672ac88f789774dd47f7c8be` ON `users`'
    )
    await queryRunner.query('DROP TABLE `users`')
  }
}
