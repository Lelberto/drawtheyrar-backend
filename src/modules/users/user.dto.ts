import { ApiProperty, OmitType } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

/**
 * DTO for user creation
 */
export class CreateUserDto {
  
  @ApiProperty()
  @IsEmail()
  public readonly email: string;
  
  @ApiProperty()
  @IsString()
  @Length(3, 30)
  public readonly name: string;

  @ApiProperty()
  @IsString()
  @Length(8, 100)
  public readonly password: string;
}

/**
 * DTO for user update
 */
export class UpdateUserDto extends OmitType(CreateUserDto, []) {}
