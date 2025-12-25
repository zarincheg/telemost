'use client';

import { Button } from "@/components/ui/button";
import { Video } from "lucide-react";
import { config } from "@/lib/config";
import { generateMeetingUrl } from "@/lib/meeting-room-generator";

export function StartMeetingButton() {
  const handleStartMeeting = () => {
    const meetingUrl = generateMeetingUrl(config.meetingBaseUrl);
    window.location.href = meetingUrl;
  };

  return (
    <Button
      size="lg"
      className="bg-gradient-to-r from-neutral-900 to-neutral-800 hover:from-neutral-800 hover:to-neutral-700 text-white font-semibold px-10 py-7 text-base rounded-2xl min-w-[260px] shadow-xl shadow-neutral-900/20 hover:shadow-2xl hover:shadow-neutral-900/30 hover:scale-105 transition-all duration-300 cursor-pointer"
      onClick={handleStartMeeting}
    >
      <Video className="mr-2 h-5 w-5" />
      Начать видеозвонок
    </Button>
  );
}

