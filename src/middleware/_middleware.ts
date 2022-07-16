import { NextResponse, NextRequest, NextFetchEvent } from 'next/server'
export async function middleware(req: NextRequest, ev: NextFetchEvent) {
    const { pathname } = req.nextUrl
    console.log('middleware')
    if (pathname == '/') {
        
        return NextResponse.redirect('/comingsoon')
    }
    return NextResponse.next()
}
