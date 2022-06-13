import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Day } from '../days/day.entity';
import { Hateoas } from '../hateoas/hateoas.interface';
import { Link } from '../hateoas/hateoas.types';

/**
 * Attachment entity
 */
@Entity()
export class Attachment implements Hateoas {

  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @ApiProperty()
  @Column({
    type: 'varchar'
  })
  @Exclude({ toPlainOnly: true })
  public filename: string;

  @ApiProperty({
    format: 'mimetype'
  })
  @Column({
    type: 'varchar',
    length: 20
  })
  public mimetype: string;

  @Column({
    type: 'varchar',
    length: 30,
    nullable: true
  })
  public title: string;

  @Column({
    type: 'uuid'
  })
  public dayId: string;

  @ManyToOne(() => Day, day => day.attachments)
  public day?: Day;

  public _links: Link[] = [];

  /** Gets the filename extension */
  public get extension(): string {
    return this.filename.substring(this.filename.lastIndexOf('.') + 1).toLowerCase();
  }
}
