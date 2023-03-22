import request from "../axios";

export const getPublic = async () => {
    try {
        const response = await request({
            url: "/public",
            method: "GET",
        })
        return response;
    } catch (error) {
        console.log(error);
    }
}