import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({name:'users'})
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    namesocial: string;

    @Column()
    genero: string;

    @Column()
    cpf: string;

    @Column()
    ddd: string;

    @Column()
    telefone: string;

    @Column()
    rg: string
}