# vike-react + Cloudflare Pages Demo

[View Demo](https://vike-react-cf-pages.pages.dev)

This is an example to show how `vike-react` and Cloudflare Pages can be used to quickly setup and host a React SSR website.


### Development

In development, we run the Wrangler Pages CLI and the Vite dev server concurrently. This means we can run our Pages functions locally, and forward any 'frontend' requests to Vite. The proxy is handled by the Wrangler CLI: `wrangler pages dev -- vite`.

```sh
pnpm install
pnpm run dev
```

Then view the site on [http://localhost:8788](http://localhost:8788)

### Production

To deploy the site on Cloudflare Pages, you need to add some custom configuration. Firstly, make sure the **Build command** is set to `pnpm run build` - this will run the Vite build command. Next, set the **Build output directory** to `/dist/client`.

To build and test locally, follow the below commands:

```sh
pnpm run build
pnpm run serve
```

Then view the site on [http://localhost:8788](http://localhost:8788)
