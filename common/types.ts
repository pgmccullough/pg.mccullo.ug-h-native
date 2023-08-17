export interface UserClean {
  cover_image: {
    gps: string|null,
    timestamp: number|null,
    image: string
  },
  profile_image: {
    gps: string|null,
    timestamp: number|null,
    image: string
  },
  site_description?: string,
  site_name: string,
  watchword: {
    word: string,
    timestamp: number
  }
}