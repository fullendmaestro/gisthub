import { auth } from "@/edgedb";
import Link from "next/link";
import NextSteps from "@/components/NextSteps";

export default async function Home() {
  const session = auth.getSession();

  const signedIn = await session.isSignedIn();

  return (
    <div>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex flex-1 justify-end space-x-2">
            {!signedIn ? (
              <>
                <Link
                  href={auth.getBuiltinUIUrl()}
                  prefetch={false}
                  className="text-sm font-semibold leading-6 text-gray-800"
                >
                  <button className="ring-2 ring-inset ring-primary bg-primarylight px-4 py-2 rounded-md">
                    Sign in
                  </button>
                </Link>
                <Link
                  href={auth.getBuiltinUISignUpUrl()}
                  prefetch={false}
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  <button className="bg-primary px-4 py-2 rounded-md text-white">
                    Sign up
                  </button>
                </Link>
              </>
            ) : (
              <Link
                href="dashboard"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                <button className="bg-primary px-4 py-2 rounded-md text-white">
                  Dashboard
                </button>
              </Link>
            )}
          </div>
        </nav>
      </header>

      <div className="relative isolate px-6 py-14 lg:px-8">
        <div className="mx-auto max-w-2xl pt-16 sm:pt-24 lg:pt-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              GIST HUB
            </h1>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Welcome to GISTHUB🤝
            </p>
            <p className="mt-6 text-base leading-7 text-gray-600">
              A one place house place where anyone anyplace anytime can share a
              gist or be gisted 🤝.
            </p>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Let's disturb the house 🏚️
            </p>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Have Fun 🎉
            </p>
            <Link
              href="/dashboard"
              className="text-sm font-semibold leading-6 text-gray-800"
            >
              <button className="rounded-md bg-primary-100 px-4 py-2 ring-2 ring-inset ring-primary-500">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
