import createProductTest from "./createProductTest";
import deleteProductTest from "./deleteProductTest";
import listProductsTest from "./listProductsTest";
import updateProductTest from "./updateProductTest";

describe("Teste do produto", () => {
    createProductTest();
    deleteProductTest();
    listProductsTest();
    updateProductTest();
});
