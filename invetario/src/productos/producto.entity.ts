import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Categoria  } from '../categorias/categoria.entity';


@Entity('productos')
export class Producto {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => Categoria, (categoria) => categoria.productos, { eager: true, onDelete: 'RESTRICT' })
  categoria!: Categoria;

  @Column()
  nombre!: string;

  @Column({ nullable: true })
  descripcion!: string;

  @Column({ default: 1 })
  precio!: number;

  @Column({ default: 1 })
  stock!: number;

  @Column({ default: true })
  activo!: boolean;
}