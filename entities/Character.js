// entities/Character.js
import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Character {

    @PrimaryGeneratedColumn()
    id;

    @Column()
    name;

    // ... other columns ...
}
