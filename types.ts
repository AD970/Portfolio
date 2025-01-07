export type ProjectType = {
  image: string;
  text: string;
  // type: 'Frontend' | 'Backend' | 'Fullstack'
  tags: string[];
  direction: "items-start" | "items-end";
  styles?: string;
  imageStyles?: string;
  imageWidth: string;
  imageHeight: string;
};
