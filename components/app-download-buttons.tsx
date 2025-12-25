'use client';

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useEffect, useState } from "react";

type Platform = 'ios' | 'android' | 'desktop';

const APP_STORE_URL = "https://apps.apple.com/app/jitsi-meet/id1165103905";
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=org.jitsi.meet";

function detectPlatform(): Platform {
  if (typeof window === 'undefined') return 'desktop';
  
  const userAgent = window.navigator.userAgent.toLowerCase();
  
  // Check for iOS
  if (/iphone|ipad|ipod/.test(userAgent)) {
    return 'ios';
  }
  
  // Check for Android
  if (/android/.test(userAgent)) {
    return 'android';
  }
  
  // Default to desktop
  return 'desktop';
}

export function AppDownloadButtons() {
  const [platform, setPlatform] = useState<Platform>('desktop');

  useEffect(() => {
    setPlatform(detectPlatform());
  }, []);

  // Mobile users see a single button for their platform
  if (platform === 'ios') {
    return (
      <Button
        size="lg"
        variant="outline"
        className="border-2 border-neutral-900/80 bg-white/80 backdrop-blur-sm hover:bg-neutral-900 hover:text-white text-neutral-900 font-semibold px-10 py-7 rounded-2xl min-w-[220px] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        asChild
      >
        <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
          <svg className="mr-3 h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
          App Store
        </a>
      </Button>
    );
  }

  if (platform === 'android') {
    return (
      <Button
        size="lg"
        variant="outline"
        className="border-2 border-neutral-900/80 bg-white/80 backdrop-blur-sm hover:bg-neutral-900 hover:text-white text-neutral-900 font-semibold px-10 py-7 rounded-2xl min-w-[220px] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        asChild
      >
        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg className="mr-3 h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
          </svg>
          Google Play
        </a>
      </Button>
    );
  }

  // Desktop users see both buttons
  return (
    <>
      <Button
        size="lg"
        variant="outline"
        className="border-2 border-neutral-900/80 bg-white/80 backdrop-blur-sm hover:bg-neutral-900 hover:text-white text-neutral-900 font-semibold px-10 py-7 rounded-2xl min-w-[220px] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        asChild
      >
        <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
          <svg className="mr-3 h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
          App Store
        </a>
      </Button>

      <Button
        size="lg"
        variant="outline"
        className="border-2 border-neutral-900/80 bg-white/80 backdrop-blur-sm hover:bg-neutral-900 hover:text-white text-neutral-900 font-semibold px-10 py-7 rounded-2xl min-w-[220px] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        asChild
      >
        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg className="mr-3 h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
          </svg>
          Google Play
        </a>
      </Button>
    </>
  );
}

export function DownloadAppButton() {
  const [platform, setPlatform] = useState<Platform>('desktop');
  const [downloadUrl, setDownloadUrl] = useState<string>('#download');

  useEffect(() => {
    const detectedPlatform = detectPlatform();
    setPlatform(detectedPlatform);
    
    // Set download URL based on platform
    if (detectedPlatform === 'ios') {
      setDownloadUrl(APP_STORE_URL);
    } else if (detectedPlatform === 'android') {
      setDownloadUrl(PLAY_STORE_URL);
    } else {
      setDownloadUrl('#download');
    }
  }, []);

  return (
    <Button
      size="lg"
      variant="outline"
      className="border-2 border-neutral-900/80 bg-white/80 backdrop-blur-sm hover:bg-neutral-900 hover:text-white text-neutral-900 font-semibold px-10 py-7 text-base rounded-2xl min-w-[260px] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
      asChild
    >
      <a 
        href={downloadUrl}
        target={platform !== 'desktop' ? '_blank' : undefined}
        rel={platform !== 'desktop' ? 'noopener noreferrer' : undefined}
      >
        <Download className="mr-2 h-5 w-5" />
        Скачать приложение
      </a>
    </Button>
  );
}

