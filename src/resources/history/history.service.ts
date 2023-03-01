import type { Video } from '~~/types/videos';
import { history } from '~/data';

export class HistoryService {
  /**
   * Copy the history locally to be able to insert
   */
  videos: Video[] = history;

  /**
   * Find all history
   */
  findAll(): Video[] {
    return this.videos;
  }

  /**
   * Create a history
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
