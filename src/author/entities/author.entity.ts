import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Author {
    @PrimaryGeneratedColumn()
    id: number

    @Column({nullable:true})
    __: string;

    @Column({nullable:true})
    AName: string;
    @Column()
    likes:number

    @Column()
    dislike:number

    @Column()
    quotes:string
    @Column()
    isActive:boolean
}
