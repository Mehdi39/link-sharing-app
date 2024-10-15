import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const token = request.cookies.get('jwt')?.value;

    // If no token, redirect to login
    if (!token) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    // Allow access to other routes if token exists
    // Do the actual JWT verification in API routes or pages where needed
    if (request.nextUrl.pathname === '/login') {
        return NextResponse.redirect(new URL('/', request.url)); // Redirect to root if already logged in
    }

    return NextResponse.next(); // Proceed to the requested route
}

export const config = {
    matcher: ['/', '/profile'], // Add paths that should be protected
};
