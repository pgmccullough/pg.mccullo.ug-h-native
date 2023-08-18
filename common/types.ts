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

export interface PostFeedback {
  commentsOn: boolean,
  comments: any,
  sharesOn: boolean,
  shares: any,
  likesOn: boolean,
  likes: any,
}

export interface PostMedia {
  audio: any,
  directory?: string,
  files: any[]|null,
  images: any[]|null,
  links: any[]|null,
  videos: any[]|null,
}

export interface Post {
  _id: string,
  content: string,
  created: number,
  feedback: PostFeedback,
  lastEdited: number,
  media: PostMedia,
  privacy: "Public"|"Followers"|"Friends"|"Self"|"Save Media"|"Story"
}