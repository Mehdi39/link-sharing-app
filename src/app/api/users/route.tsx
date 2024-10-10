import { NextResponse } from "next/server";

const userInfo = {
    name: "MD. Jahid Hossain Mridha",
    age: 31,
    mobile: "01301281464"
}

export const GET = () => {
    return new NextResponse(JSON.stringify(
        {
            success: true,
            data: userInfo
        }
    ),
        {
            status: 200,
        }

    );
}