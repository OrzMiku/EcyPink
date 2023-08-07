import mikureq from "../service/mikureq";

const getHitokoto = async (params) => {
    const req = new mikureq()
    const res = await req.get({
        url: "https://v1.hitokoto.cn/",
        params
    })
    return res
}

export default getHitokoto