"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCategoryController = void 0;
var DeleteCategoryController = /** @class */ (function () {
    function DeleteCategoryController(deleteCategoryService) {
        this.deleteCategoryService = deleteCategoryService;
    }
    DeleteCategoryController.prototype.handle = function (request, response) {
        var id = request.params.id;
        this.deleteCategoryService.execute(id);
        return response.status(204).send();
    };
    return DeleteCategoryController;
}());
exports.DeleteCategoryController = DeleteCategoryController;
