"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDisordersDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const createDisorder_dto_1 = require("./createDisorder.dto");
class UpdateDisordersDto extends (0, mapped_types_1.PartialType)(createDisorder_dto_1.CreateDisordersDto) {
}
exports.UpdateDisordersDto = UpdateDisordersDto;
//# sourceMappingURL=updateDisorders.dto.js.map