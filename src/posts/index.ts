// import { expectations } from './expectations-overworking';
import { backToTheBeginningPost } from "./back-to-the-beginning"; 

export const postList = [
  // backToTheBeginningPost,
] as Array<{ desc: string; date: string; title: string; markdown: string;}>;
// Casting this because if there are no posts, we'll get type never and crashhhh and burn