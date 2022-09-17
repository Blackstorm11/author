import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Quotes {
    @PrimaryGeneratedColumn()
    id: number

    @Column({nullable:true})
    __v: string;

    @Column({nullable:true})
    AName: string;
    @Column()
    likes:number;

    @Column()
    dislike:number;

    @Column()
    quote:string;
    @Column()
    isActive:boolean;

    @Column()
    tags:string;
}
