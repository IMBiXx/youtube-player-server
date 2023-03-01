import type { Video } from '~~/types/videos';
import { bookmark } from '~/data';

export class BookmarkService {
  /**
   * Copy the bookmarks locally to be able to insert
   */
  videos: Video[] = bookmark;

  /**
   * Find all bookmarks
   */
  findAll(): Video[] {
    return this.videos;
  }

  /**
   * Create a bookmark
   *
   * /!\ Ideally, we should check the content of the request before saving it.
   *
   * @param videoData - An object corresponding to a video.
   */
  create(videoData: Video): Video {
    const newVideo: Video = {
      ...videoData,
    };

    this.videos.push(newVideo);
    return newVideo;
  }
}
