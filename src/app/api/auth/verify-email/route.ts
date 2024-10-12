import { NextResponse } from 'next/server';
import crypto from 'crypto';
import connectDB from '@/lib/db';
import User from '@/models/ModelUser';

export async function GET(request: Request) {
    await connectDB();
    try {
        const { searchParams } = new URL(request.url);
        const token = searchParams.get('token');
        const hashedToken = crypto.createHash('sha256').update(token).digest('hex');

        const user = await User.findOne({ emailVerificationToken: hashedToken });

        if (!user) {
            return NextResponse.json({ status: 'fail', message: 'Invalid or expired token' }, { status: 400 });
        }

        user.isVerified = true;
        await user.save({ validateBeforeSave: false });

        return NextResponse.json({ status: 'success', message: 'Email verified' });
    } catch (error) {
        return NextResponse.json({ status: 'fail', message: `Verification failed because of ${error.message}` }, { status: 500 });
    }
}
