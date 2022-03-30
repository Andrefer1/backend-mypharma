import createCategoryTest from "./createCategoryTest";
import deleteCategoryTest from "./deleteCategoryTest";
import listCategoriesTest from "./listCategoriesTest";
import updateCategoryTest from "./updateCategoryTest";

describe("Teste da categoria", () => {
    createCategoryTest();
    deleteCategoryTest();
    listCategoriesTest();
    updateCategoryTest();
});
