import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start sm:text-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-start">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Welcome to Thread
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Premium fashion clothing for men and women. Shop our latest collection today.
          </p>
          <div className="pt-6">
            <Link
              href="/shop"
              className="rounded-md bg-black px-4 py-2 text-sm text-white no-underline"
            >
              Shop Collection
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
