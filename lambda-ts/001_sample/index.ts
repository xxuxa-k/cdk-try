export const handler = async () => {
  return {
    statucsCode: 200,
    headers: { "Content-Type": "text/plain" },
    body: JSON.stringify({ message: "Hello, World!" })
  }
}

