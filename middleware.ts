import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Check if user is trying to access admin routes
  if (request.nextUrl.pathname.startsWith('/admin')) {
    const adminToken = request.cookies.get('adminToken');
    
    // Allow /admin/login without token
    if (request.nextUrl.pathname === '/admin/login') {
      return NextResponse.next();
    }
    
    // Redirect to login if no token
    if (!adminToken) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*']
};
