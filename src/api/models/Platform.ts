import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Platform {

    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @IsNotEmpty()
    @Column({ name: 'brand' })
    public brand: string;

    @IsNotEmpty()
    @Column({ name: 'name' })
    public name: string;

    @IsNotEmpty()
    @Column()
    public category: string;

    @IsNotEmpty()
    @Column()
    public description: string;

    @IsNotEmpty()
    @Column()
    public image: string;

    @IsNotEmpty()
    @Column({ name: 'authentication_type' })
    public authenticationType: string;

    @IsNotEmpty()
    @Column({ name: 'authentication_url' })
    public authenticationUrl: string;

    public toString(): string {
        return `${this.name} ${this.brand} (${this.category})`;
    }

}
