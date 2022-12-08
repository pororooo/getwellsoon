import { CreateDisordersDto } from "./createDisorder.dto";
declare const UpdateDisordersDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateDisordersDto>>;
export declare class UpdateDisordersDto extends UpdateDisordersDto_base {
    name: string;
    description: string;
    link: string;
}
export {};
