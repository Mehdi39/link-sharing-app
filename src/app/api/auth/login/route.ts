import {NextResponse} from 'next/server';
import connectDB from '@/lib/db';
import User from '@/models/ModelUser';
import {signToken} from '@/utils/jwt';
import bcrypt from 'bcrypt';

export async function POST(request: Request) {
    await connectDB();
    try {
        const {email, password} = await request.json();

        if (!email || !password) {
            return NextResponse.json({status: 'fail', message: 'Please provide email and password'}, {status: 400});
        }

        const user = await User.findOne({email}).select('+password');

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return NextResponse.json({status: 'fail', message: 'Invalid email or password'}, {status: 401});
        }

        if (!user.isVerified) {
            return NextResponse.json({status: 'fail', message: 'Please verify your email first'}, {status: 401});
        }

        console.log("User: ", user)

        const token = signToken({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        const response = NextResponse.json({
            status: 'success',
            message: 'Logged in successfully',
            token,
        });

        response.cookies.set('jwt', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // Ensure it's secure in production
            path: '/',
            maxAge: 24 * 60 * 60, // 1 day
        });

        return response;
    } catch (error) {
        return NextResponse.json({status: 'fail', message: `Login failed because of ${error.message}`}, {status: 500});
    }
}
