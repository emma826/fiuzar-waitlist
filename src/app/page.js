import Image from 'next/image';
import Link from "next/link";

import LeadDetails from '@/components/leadDetails';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans flex items-center justify-center px-4 py-12">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-6 bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left Column */}
        <div className="hidden md:block bg-gray-50 p-8">
          <h2 className="text-2xl font-bold mb-6">Smarter content repurposing for creators.</h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="text-blue-600 text-xl">💡</div>
              <div>
                <h5 className="font-semibold mb-1">Repurpose all content types</h5>
                <p>Turn blogs, YouTube videos, and Facebook Lives into ready-to-post content for multiple platforms.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-blue-600 text-xl">✍️</div>
              <div>
                <h5 className="font-semibold mb-1">Platform-aware writing</h5>
                <p>Fiuzar adapts your content to suit LinkedIn, Instagram, YouTube Shorts, and more.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-blue-600 text-xl">⏱️</div>
              <div>
                <h5 className="font-semibold mb-1">Schedule content automatically</h5>
                <p>Plan and publish content consistently without manual uploads.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-2">Join our journey and get early access</h2>
          <p className="text-gray-600 mb-4">Be one of the first to try Fiuzar and receive our free repurposing checklist instantly.</p>

          <div className="flex -space-x-3 mb-4">
            {[75, 76, 77, 78, 79].map((id) => (
              <img
                key={id}
                src={`https://randomuser.me/api/portraits/${id % 2 === 0 ? 'women' : 'men'}/${id}.jpg`}
                alt={`User ${id}`}
                width={40}
                height={40}
                className="rounded-full border-2 border-white object-cover"
              />
            ))}
          </div>

          <LeadDetails />

          <p className="text-xs text-gray-500 mt-4">
            By clicking “Join”, you agree to our <Link href="#" className="underline">Privacy Policy</Link> and <Link href="#" className="underline">Terms of Use</Link>.
          </p>
        </div>

        {/* Mobile Left Column */}
        <div className="md:hidden p-6">
          <h2 className="text-xl font-bold mb-4">Smarter content repurposing for creators.</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-blue-600 text-lg">💡</span>
              <div>
                <h5 className="font-semibold">Repurpose all content types</h5>
                <p className="text-sm">Turn blogs, YouTube videos, and Facebook Lives into ready-to-post content.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-600 text-lg">✍️</span>
              <div>
                <h5 className="font-semibold">Platform-aware writing</h5>
                <p className="text-sm">Adapts to LinkedIn, Instagram, YouTube Shorts, and more.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-600 text-lg">⏱️</span>
              <div>
                <h5 className="font-semibold">Schedule content automatically</h5>
                <p className="text-sm">Plan and publish without manual uploads.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
