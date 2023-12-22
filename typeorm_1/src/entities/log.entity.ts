import { Column, PrimaryGeneratedColumn } from "typeorm";
import { Entity } from "../../node_modules /typeorm";

@Entity({ name: "my_log_table" })
export class LogTable {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "int" })
  type: string;

  @Column("varchar")
  data: string;
}
