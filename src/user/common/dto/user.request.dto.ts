import { IsString, Matches, MaxLength, MinLength } from "class-validator";

interface IUserSignUpDTO {
  userName: string;
  password: string;
}

export class UserSignUpDTO implements IUserSignUpDTO{
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  userName: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/^[a-zA-Z0-9]*$/)
  password: string;
}