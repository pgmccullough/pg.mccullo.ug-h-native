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

export interface Post {
  _id: string,
  content: string,
  created: number,
  feedback: {
      commentsOn: any,
      comments: any,
      sharesOn: any,
      shares: any,
      likesOn: any,
      likes: any,
  },
  lastEdited: number,
  media: any|{
      audio: any,
      directory?: string,
      files: any[]|null,
      images: any[]|null,
      links: any[]|null,
      videos: any[]|null,
  }
  privacy: "Public"|"Followers"|"Friends"|"Self"|"Save Media"|"Story"
}