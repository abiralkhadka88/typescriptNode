import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  DeleteDateColumn,
} from "typeorm";

export enum UserStatus {
  VERIFIED = "VERIFIED",
  UNDER_VERIFICATION = "UNDER_VERIFICATION",
  REJECTED = "REJECTED",
}
@Entity({ name: "user_table" })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 20, name: "first_name" })
  firstName: string;

  @Column({ type: "varchar", length: 20, name: "last_name" })
  lastName: string;

  @Column({ name: "bank_balance", type: "real" })
  bankBalance: string;

  // @Column({ type: "boolean", name: "is_active" })
  // isActive: boolean;

  // @Column({ type: "enum", enum: UserStatus, default: "UNDER_VERIFICATION" })
  // userStatus: UserStatus;

  // a,b,c
  // @Column({ type: "simple-array" })
  // relativeNameList: string[];

  @Column({ type: "jsonb", nullable: true })
  data: { isNepali: boolean; voterIDCard: string };

  // @DeleteDateColumn({ name: "deleted_at" })
  // deletedAt: Date;
}
