import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import User from '@/models/ModelUser';
import { getUserFromCookie } from '@/utils/auth'; // Utility function to get user from JWT or session

export async function GET() {
    await connectDB();

    try {
        const userId = await getUserFromCookie(); // Assume you have a utility to extract user from the cookie or token
        if (!userId) {
            return NextResponse.json({ status: 'fail', message: 'Not authenticated' }, { status: 401 });
        }

        const user = await User.findById(userId);
        if (!user) {
            return NextResponse.json({ status: 'fail', message: 'User not found' }, { status: 404 });
        }

        return NextResponse.json({ status: 'success', data: { user } });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ status: 'fail', message: `Error fetching profile because of ${error.message}` }, { status: 500 });
    }
}
