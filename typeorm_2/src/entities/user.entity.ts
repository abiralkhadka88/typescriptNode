import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

export enum UserStatus {
  VERIFIED = "VERIFIED",
  UNDER_VERIFICATION = "UNDER_VERIFICATION",
  REJECTED = "REJECTED",
}
@Entity({ name: "user" })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 20, name: "first_name" })
  firstName: string;

  @Column({ type: "varchar", length: 20, name: "last_name" })
  lastName: string;

  @Column({ type: "boolean", name: "is_active" })
  isActive: boolean;

  @Column({ type: "enum", enum: UserStatus, default: "UNDER_VERIFICATION" })
  userStatus: UserStatus;
}
