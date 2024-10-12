import { NextResponse } from 'next/server';

export async function GET() {
    const response = NextResponse.json({
        status: 'success',
        message: 'Logged out successfully',
    });

    response.cookies.set('jwt', '', {
        httpOnly: true,
        expires: new Date(0),
    });

    return response;
}
