import { rest } from "msw";

export const handlers = [
    rest.put("/counter/increament", async (req, res, ctx) => {
        const { value } = req.body;
        return res(
            ctx.json({
                value: value + 2,
            }),
        );
    }),
    rest.get("/login", async (req, res, ctx) => {
        return res(
            ctx.json({
                id: "f79e82e8-c34a-4dc7-a49e-9fadc0979fda",
                firstName: "John",
                lastName: "Maverick",
            }),
        );
    }),
    rest.get("https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json", async (req, res, ctx) => {
        // const id = req.url.searchParams.get("id");

        // const originRes = await ctx.fetch(req);
        // const originResData = await originRes.json();
        return res(
            ctx.status(403),
            ctx.json({
                errorMessage: `Data not found`,
            }),
            // ctx.json({
            //     data: {
            //         people: [
            //             ...originResData.data.people,
            //             {
            //                 name: id,
            //                 age: 1351,
            //             },
            //         ],
            //     },
            // }),
        );
    }),
];
