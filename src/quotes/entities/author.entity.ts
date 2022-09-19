import { Column, Entity, Generated, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Quotes {
    @PrimaryColumn({type:"uuid"})
    @Generated("uuid")
    id:string;

    @Column({nullable:true})
    __v: string;
   
    @Column()
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
