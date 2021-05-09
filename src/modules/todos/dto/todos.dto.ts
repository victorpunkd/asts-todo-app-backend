import { IsNotEmpty, MinLength } from 'class-validator';

export class TodosDto {
    @IsNotEmpty()
    @MinLength(3)
    readonly title: string;

    @IsNotEmpty()
    @MinLength(6)
    readonly description: string;

    @IsNotEmpty()
    readonly dueDate: Date;

    @IsNotEmpty()
    readonly priority: number;

    @IsNotEmpty()
    readonly isDone: boolean;
}