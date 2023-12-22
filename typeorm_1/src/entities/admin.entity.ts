import { Column, PrimaryGeneratedColumn } from "typeorm";
import { Entity } from "../../node_modules /typeorm";

@Entity()
export class Admin {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
