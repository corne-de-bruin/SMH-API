import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreatePlatformTable1537472547976 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        const table = new Table({
            name: 'platform',
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    length: '255',
                    isPrimary: true,
                    isNullable: false,
                }, {
                    name: 'brand',
                    type: 'varchar',
                    length: '255',
                    isPrimary: false,
                    isNullable: false,
                }, {
                    name: 'name',
                    type: 'varchar',
                    length: '255',
                    isPrimary: false,
                    isNullable: false,
                }, {
                    name: 'category',
                    type: 'varchar',
                    length: '255',
                    isPrimary: false,
                    isNullable: false,
                },  {
                    name: 'description',
                    type: 'varchar',
                    length: '255',
                    isPrimary: false,
                    isNullable: false,
                }, {
                    name: 'image',
                    type: 'varchar',
                    length: '255',
                    isPrimary: false,
                    isNullable: false,
                }, {
                    name: 'authentication_type',
                    type: 'varchar',
                    length: '255',
                    isPrimary: false,
                    isNullable: false,
                }, {
                    name: 'authentication_url',
                    type: 'varchar',
                    length: '255',
                    isPrimary: false,
                    isNullable: false,
                }
            ],
        });

        await queryRunner.createTable(table);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable('platform');
    }

}
