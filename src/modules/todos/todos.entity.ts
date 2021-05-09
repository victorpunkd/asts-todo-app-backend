import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Todos extends Model<Todos> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    title: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    description: string;

    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    dueDate: Date;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    priority: number;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
    })
    isDone: boolean;
}