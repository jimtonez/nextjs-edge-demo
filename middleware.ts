export { default } from "next-auth/middleware"

export const config = { matcher: ["/bets"] }
// import { getSubscription } from "./hooks/getSubscription";
// import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
// export async function middleware(request: NextRequest, _next: NextFetchEvent) {
//   const { pathname } = request.nextUrl;
//   const protectedPaths = ["/bets"];
//   const matchesProtectedPath = protectedPaths.some((path) =>
//     pathname.startsWith(path)
//   );

// //   const subscription = await getSubscription()
// //   if (matchesProtectedPath) {
// //     const subscription = await getSubscription());
// //     if (!subscription) {
// //       const url = new URL(`/signin`, request.url);
// //       url.searchParams.set("callbackUrl", encodeURI(request.url));
// //       return NextResponse.redirect(url);
// //     }
// //     if (token.role !== "admin") {
// //       const url = new URL(`/403`, request.url);
// //       return NextResponse.rewrite(url);
// //     }
// //   }
//   return NextResponse.next();
// }