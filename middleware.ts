import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const middleware = (request: NextRequest) => {
    console.log('start')
    const  pathname  = request.nextUrl.pathname
   console.log('pathname',pathname)

    const allowedPaths = ['/', '/home']
   console.log('allowedPaths',allowedPaths)

    if (!allowedPaths.includes(pathname)) {
     console.log('!pathname',pathname)
        return NextResponse.redirect(new URL('/not-found', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher:
        ['/((?!api|_next/static|_next/image|favicon.ico).*)']
       // ['/:path*']
}
