import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import connectDB from '@/lib/db';
import User from '@/models/ModelUser';

export async function GET(request: Request) {
    await connectDB();
    try {
        const token = request.headers.get('Authorization')?.split(' ')[1];

        if (!token) {
            return NextResponse.json({ status: 'fail', message: 'Not logged in' }, { status: 401 });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id);

        if (!user) {
            return NextResponse.json({ status: 'fail', message: 'User no longer exists' }, { status: 401 });
        }

        return NextResponse.json({
            status: 'success',
            message: 'You have access',
        });
    } catch (error) {
        return NextResponse.json({ status: 'fail', message: `Unauthorized because of ${error}` }, { status: 401 });
    }
}
