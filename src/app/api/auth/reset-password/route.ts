import { NextResponse } from 'next/server';
import crypto from 'crypto';
import connectMongo from '@/lib/db';
import User from '@/models/ModelUser';
import { signToken } from '@/utils/jwt';

export async function PATCH(request: Request) {
    await connectMongo();
    try {
        const { token } = request.query;
        const { password, confirmPassword } = await request.json();

        const hashedToken = crypto.createHash('sha256').update(token).digest('hex');
        const user = await User.findOne({
            passwordResetToken: hashedToken,
            passwordResetExpires: { $gt: Date.now() },
        });

        if (!user) {
            return NextResponse.json({ status: 'fail', message: 'Token invalid or expired' }, { status: 400 });
        }

        user.password = password;
        user.confirmPassword = confirmPassword;
        user.passwordResetToken = undefined;
        user.passwordResetExpires = undefined;

        await user.save();

        const jwtToken = signToken(user._id);
        return NextResponse.json({
            status: 'success',
            message: 'Password reset successfully',
            token: jwtToken,
        });
    } catch (error) {
        return NextResponse.json({ status: 'fail', message: `Password reset failed, because ${error.message}` }, { status: 500 });
    }
}
