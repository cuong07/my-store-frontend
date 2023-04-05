import request from "../axios";

export const getPublic = async () => {
    try {
        const response = await request({
            url: "/public",
        })
        return response;
    } catch (error) {
        console.log(error);
    }
}