/**
 * Meeting room ID generator using memorable word combinations
 */

// Word lists for generating memorable room IDs
const adjectives = [
  'happy', 'bright', 'gentle', 'swift', 'calm', 'warm', 'cool', 'soft',
  'kind', 'bold', 'wise', 'fair', 'pure', 'great', 'fine', 'grand',
  'sweet', 'clear', 'fresh', 'proud', 'brave', 'sharp', 'quick', 'smooth',
  'strong', 'quiet', 'light', 'dark', 'wild', 'free', 'true', 'deep',
  'wide', 'tall', 'small', 'huge', 'tiny', 'neat', 'clean', 'safe',
  'rich', 'wise', 'noble', 'royal', 'lucky', 'sunny', 'misty', 'foggy',
  'snowy', 'rainy', 'windy', 'cloudy', 'starry', 'lunar', 'solar', 'cosmic'
];

const colors = [
  'red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'brown',
  'gray', 'black', 'white', 'silver', 'golden', 'bronze', 'crimson', 'scarlet',
  'azure', 'emerald', 'amber', 'jade', 'ruby', 'sapphire', 'coral', 'ivory',
  'violet', 'indigo', 'teal', 'cyan', 'magenta', 'lime', 'olive', 'navy',
  'maroon', 'peach', 'mint', 'lavender', 'rose', 'cream', 'pearl', 'copper'
];

const nouns = [
  'mountain', 'river', 'ocean', 'forest', 'valley', 'desert', 'lake', 'hill',
  'meadow', 'garden', 'island', 'beach', 'canyon', 'cliff', 'waterfall', 'stream',
  'plain', 'prairie', 'marsh', 'swamp', 'bay', 'cove', 'shore', 'coast',
  'peak', 'ridge', 'slope', 'trail', 'path', 'road', 'bridge', 'tunnel',
  'cave', 'grotto', 'lagoon', 'pond', 'creek', 'brook', 'spring', 'fountain',
  'field', 'grove', 'woodland', 'jungle', 'oasis', 'delta', 'fjord', 'inlet'
];

const elements = [
  'dawn', 'dusk', 'sunset', 'sunrise', 'morning', 'evening', 'twilight', 'noon',
  'breeze', 'wind', 'storm', 'rain', 'snow', 'frost', 'mist', 'fog',
  'cloud', 'thunder', 'lightning', 'rainbow', 'star', 'moon', 'sun', 'sky',
  'wave', 'tide', 'current', 'flow', 'ripple', 'splash', 'spray', 'foam',
  'flame', 'spark', 'glow', 'shine', 'light', 'shadow', 'shade', 'beam',
  'echo', 'whisper', 'song', 'melody', 'harmony', 'rhythm', 'pulse', 'beat'
];

/**
 * Get a random item from an array
 */
function getRandomItem<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

/**
 * Generate a unique meeting room ID using 4 random words separated by dashes
 * Format: adjective-color-noun-element
 * 
 * @returns A unique room ID string (e.g., "happy-blue-mountain-dawn")
 */
export function generateMeetingRoomId(): string {
  const word1 = getRandomItem(adjectives);
  const word2 = getRandomItem(colors);
  const word3 = getRandomItem(nouns);
  const word4 = getRandomItem(elements);
  
  return `${word1}-${word2}-${word3}-${word4}`;
}

/**
 * Generate a full meeting URL with a unique room ID
 * 
 * @param baseUrl - The base URL for the meeting service
 * @returns A complete meeting URL
 */
export function generateMeetingUrl(baseUrl: string): string {
  const roomId = generateMeetingRoomId();
  return `${baseUrl}/${roomId}`;
}

