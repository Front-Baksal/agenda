# agenda
이의제                                    기

# Next.js

## Terms

### Pre-rendering & Hydration

- By default, `Next.js pre-renders every page`. This means that Next.js **generates HTML for each page in advance**, instead of having it all done by client-side JavaScript. Pre-rendering can result in better performance and SEO.
    <!-- - > 기본적으로, Next.js는 모든 페이지를 pre-render 합니다. 이는 각 페이지를  -->

- Each generated HTML is associated with minimal JavaScript code necessary for that page
- When a page is loaded by the browser, its JavaScript code runs and makes the page fully interactive. (This process is called `hydration`.

### Static Generation

- `Static Generation` is the ***pre-rendering method*** that generates the HTML at **build time**. The pre-rendered HTML is then *reused* on each request.

### Server-side rendering

- `Server-side Rendering` is ***the pre-rendering method*** that generates the HTML on **each request**.

### getStaticProps()

- `getStaticProps` runs at **build time** in production.
- Inside the function, you can fetch external data and send it as props to the page.
- `getStaticProps` allows you to tell Next.js: “Hey, this page has some data dependencies"

### getServerSideProps()

``` javascript
export async function getServerSideProps(context) {
  return {
    props: {
      // props for your component
    },
  };
}
```

- To use Server-side Rendering, you need to export `getServerSideProps` instead of getStaticProps from your page.
- Because `getServerSideProps` is called at request time, its parameter `(context)` contains request specific parameters.

### Client-side rendering

- If you do not need to pre-render the data, you can also use the following strategy (called `Client-side Rendering`)
    - Statically generate (pre-render) parts of the page **that do not require external data.**
    - *When the page loads*, **fetch external data** from the client using JavaScript and populate the remaining parts.

### Server-side rendering vs Client-side rendering

- Client-side rendering is Static Generation without Data + Fetch Data on the Client-side
- This approach works well for user dashboard pages, for example. 
    - Because a dashboard is a private, user-specific page, SEO is not relevant,
    - and the page doesn’t need to be pre-rendered.
        - The data is frequently updated, which requires request-time data fetching.


### SWR

- The team behind Next.js has created **a React hook for data fetching** called `SWR`. 
- We highly recommend it if you’re fetching data on the client side. 
    - It handles `caching`, `revalidation`, `focus tracking`, `refetching on interval`, and more.