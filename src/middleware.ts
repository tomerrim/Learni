export { default } from "next-auth/middleware";

export const config = { matcher: ["/topics/new", "/topics/:topicId/edit", "/api/:path*"] }