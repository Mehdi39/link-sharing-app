import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

export async function getUserFromCookie() {
    const cookieStore = cookies();
    const token = cookieStore.get('jwt')?.value;

    if (!token) return null;

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return decoded.id; // assuming JWT payload contains user ID
    } catch (error) {
        console.error("Error verifying token:", error.message);
        return null;
    }
}
