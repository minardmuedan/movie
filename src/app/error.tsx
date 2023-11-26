"use client"

export default function Error(error: Error) {
  return (
    <main className="flex items-center justify-center">
      <h1 className="text-3xl">{error.message}</h1>
    </main>
  )
}
