import Link from "next/link";
import { AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black flex flex-col items-center justify-center text-center px-4 font-mono">
      <AlertTriangle className="w-16 h-16 text-red-500 mb-6" />

      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
        404: Resource Not Found
      </h1>

      <div className="bg-gray-200 dark:bg-gray-900 p-4 rounded-lg text-left text-sm text-gray-700 dark:text-green-400 mb-8 max-w-md w-full border border-gray-300 dark:border-gray-800">
        <p>{`{`}</p>
        <p className="ml-4">"error": "NoSuchKey",</p>
        <p className="ml-4">"message": "The specified key does not exist.",</p>
        <p className="ml-4">"resource": "/page-you-requested",</p>
        <p className="ml-4">"requestId": "CLOUD-ENGINEER-NOT-FOUND"</p>
        <p>{`}`}</p>
      </div>

      <Link
        href="/"
        className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors"
      >
        Return to Console (Home)
      </Link>
    </div>
  );
}
