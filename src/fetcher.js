export const fetcher = async (url) => {
  const response = await fetch(url)
  const data = await response.json()
  console.log(data)
}
