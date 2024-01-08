export const onRequest: PagesFunction = async () => {
  try {
    const response = await fetch('https://dummyjson.com/posts?limit=20')

    return response
  }
  catch (err) {
    const error = err as Error
    return new Response(error.message, { status: 500 })
  }
}
