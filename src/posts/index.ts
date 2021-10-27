import bootcampBurnout from "./bootcamp-burnout"; 

export const postList = [
  // bootcampBurnout,
] as Array<{ desc: string; date: string; title: string; markdown: string; id: number;}>;
// Casting this because if there are no posts, we'll get type never and crashhhh and burn