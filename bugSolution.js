```javascript
// app/middleware.js

export function middleware(request) {
  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/about', request.url));
  }
}

export const config = {
  matcher: ['/'],
};

// app/page.js

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href='/about'>Go to About</Link>
    </div>
  );
}

// app/about/page.js

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
}
```