export interface CatDto {
    name: string;
    color: string;
}

export class UpdateCatDto {
    readonly name?: string;
    readonly color?: string;
}