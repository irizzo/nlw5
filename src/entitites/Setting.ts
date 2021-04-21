import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn,
} from 'typeorm';

// a v4 gera com números aleatórios
import { v4 as uuid } from 'uuid';

//definir a tabela settings como Entidade
@Entity("settings")

class Setting {
  // se eu quisesse usar um nome diferente dos das colunas aqui -> @PrimaryColumn({ name: "user_id"})
  @PrimaryColumn()
  id: string;

  @Column()
  username: string;

  @Column()
  chat: boolean;
  
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // é a função chamada quando um new NomeDaClasse() é executado, por ex new Settign()
  constructor() {
    if(!this.id) {
      this.id = uuid();
    }
  }
}

export { Setting }