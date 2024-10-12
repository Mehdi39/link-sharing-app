import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import User from '@/models/ModelUser';
import sendEmail from '@/utils/email';

export async function POST(request: Request) {
    await connectDB(); // Connect to the DB
    try {
        const body = await request.json();
        const { email, password, confirmPassword } = body;

        const newUser = new User({
            email,
            password,
            confirmPassword,
        });

        // Create email verification token
        const verificationToken = newUser.createEmailVerificationToken();
        const verificationLink = `https://toyan-devlinks.vercel.app/verify-email?token=${verificationToken}`;

        // Send verification email
        const emailOptions = {
            email,
            subject: 'Welcome to Link Sharing Application! Confirm Your Email',
            message: `Click to verify: ${verificationLink}`,
        };
        await sendEmail(emailOptions);

        await newUser.save();

        return NextResponse.json({
            status: 'success',
            message: 'Verification email sent. Please verify your email address.',
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ status: 'fail', message: `Error during sign-up because of ${error.message}` }, { status: 500 });
    }
}
