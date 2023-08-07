import mikureq from "../service/mikureq";

const getSetu = async (r18) => {
    const params = {
        type: "json",
        sort: r18 ? "r18" : undefined
    }
    const req = new mikureq('https://moe.jitsu.top')
    const res = await req.get({
        url: "/api/",
        params
    })
    return res
}

export default getSetu