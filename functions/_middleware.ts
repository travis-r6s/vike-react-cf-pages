/** If you have other functions that are NOT under the /api folder, add them here so they aren't handled by Vike. */
const excludedPaths = [
  '/api',
  '/assets',
]

interface Env {
  ENVIRONMENT: 'development' | 'production'
}

type Function = PagesFunction<Env>

export const renderMiddleware: Function = async (context) => {
  const url = new URL(context.request.url)

  try {
    if (excludedPaths.some(path => url.pathname.startsWith(path))) {
      return context.next()
    }

    // We only want to use the Vike renderer in production - in development, these requests get forwarded to the Vite dev server.
    if (context.env.ENVIRONMENT === 'development') {
      return context.next()
    }

    const { renderPage } = await import('vike/server')
    const { httpResponse } = await renderPage({ urlOriginal: context.request.url })

    if (!httpResponse) {
      return context.next()
    }

    return new Response(httpResponse.body, {
      status: httpResponse.statusCode,
      headers: httpResponse.headers,
    })
  }
  catch (err) {
    const error = err as Error
    console.error(error)
    return new Response(`${error.message}\n${error.stack}`, { status: 500 })
  }
}

/**
 * We can chain multiple middlewares - just make sure that our render middleware
 * is the last in the array, so it can handle all non-api and asset requests, and handles 404 etc.
 */
export const onRequest = [renderMiddleware]
