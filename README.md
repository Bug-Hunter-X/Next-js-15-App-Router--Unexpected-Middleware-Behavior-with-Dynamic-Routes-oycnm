# Next.js 15 App Router: Unexpected Middleware Behavior with Dynamic Routes

This repository demonstrates an unexpected behavior when using dynamic routes with middleware in the Next.js 15 app directory.  The middleware redirects correctly when accessing the route directly, but fails when the route is accessed via a client-side link or navigation.

**Steps to Reproduce:**

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Access `/` - It will redirect to `/about` as expected by middleware.
5. Access `/about` directly - It will render the `/about` page correctly.
6. Access a link to `/about` generated on the `/` page - It will render the `/` page rather than redirecting to the `/about` page.

**Expected Behavior:**

The middleware should redirect to `/about` regardless of how the route is accessed.

**Actual Behavior:**

The middleware only redirects when `/` is accessed directly, and not from client-side navigation.