import createBrandTest from "./createBrandTest";
import deleteBrandTest from "./deleteBrandTest";
import listBrandsTest from "./listBrandsTest";
import updateBrandTest from "./updateBrandTest";

describe("Teste da marca", async () => {
    createBrandTest();
    deleteBrandTest();
    listBrandsTest();
    updateBrandTest();
});
