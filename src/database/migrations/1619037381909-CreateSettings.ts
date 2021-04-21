import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSettings1619037381909 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> { 
        await queryRunner.createTable(
            new Table({
                name: 'settigns',
                columns: [
                    {
                        name: "id",
                        type: "uuid", // unique universal id
                        // se eu quisesse que fosse gerado pelo bd: generationStrategy: "uuid"
                        isPrimary: true
                    },
                    {
                        name: 'username',
                        type: 'varchar'
                    },
                    {
                        name: 'chat',
                        type: 'boolean',
                        default: true
                    },
                    {
                        name: 'crated_at',
                        type: 'timestamp',
                        default: "now()"
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: "now()"
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('Settigns');
    }

}
