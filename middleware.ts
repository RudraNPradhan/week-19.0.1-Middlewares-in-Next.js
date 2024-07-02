import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    console.log(req.nextUrl.pathname)
    if (req.nextUrl.pathname.startsWith('/admin')) {
        return NextResponse.redirect(new URL('/signin', req.url))
    }   
    if (req.nextUrl.pathname.startsWith('/dashboard')) {
        return NextResponse.next()
    }   
}
        



// import { NextRequest, NextResponse } from "next/server"


// let requestCount = 0
// export function  middleware(req: NextRequest) {
//     requestCount++ 
//     const res = NextResponse.next()
//     console.log("request count is: ", requestCount)
//     return res
// }


// // See "Matching Paths" below to learn more
// export const config = {
//     matcher: '/api/:path*',
// }