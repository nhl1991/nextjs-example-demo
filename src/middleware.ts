import { headers } from "next/headers";
import { NextRequest, NextResponse, userAgent } from "next/server";

export default async function middleware(request: NextRequest, response: NextResponse) {
    const url = request.nextUrl;
    const { pathname } = request.nextUrl;
    const { device } = userAgent(request)
    const viewport = device.type || 'desktop'

    if (request.method === "GET") {
        if (pathname === '/device-detection-demo' && !url.searchParams.has('viewport')) {

            url.searchParams.set('viewport', viewport)
            const headerUserAgent = request.headers.get('user-agent') || "";
            const isMobile = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(headerUserAgent);
            
            

            // device.type can be: 'mobile', 'tablet', 'console', 'smarttv',
            // 'wearable', 'embedded', or undefined (for desktop browsers)
            request.headers.set('x-is-mobile', `${isMobile ? 'true' : 'false'}`)
            return NextResponse.redirect(url);
        }

        if(pathname === '/hooks/useSearchParams' && !url.searchParams.has('query')){
            url.searchParams.set('query', 'you can type something here.')
            return NextResponse.redirect(url);
        }

        if(pathname === '/components/image'){
            console.log( request.headers.get('content-DPR'))
        }
        
    }
}



export const config = {
  // 내부 자원은 아예 매칭에서 제외
  matcher: ['/((?!_next/static|/.well_known/|_next/image|favicon.ico|robots.txt|sitemap.xml|api).*)'],
};