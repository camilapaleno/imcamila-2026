interface Builder {
  name: string;
  title: string;
  short: string;
  long: string;
  tools: string;
  preview: any;
  overlay: any;
  category: string[];
  projectType?: string;
  website?: string;
  github?: string;
  youtube?: string;
  gallery?: string;
  embed?: string;
  filtered?: boolean;
}

export const builders: Builder[] = [


];


export default builders;