import request from "../axios"


export const getProducts = async (productType) => {
    try {
        const response = await request({
            url: `/products/${productType}`,
        })
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const getProductDetail = async (productType, productId) => {
    try {
        const response = await request({
            url: `/${productType}/${productId}`
        });
        return response;
    } catch (error) {
        console.log(error);
    }
}