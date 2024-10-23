import { internet, name } from 'faker';

// Data Loader doesn't just work for SSR.
// In CSR projects, Data Loader can also avoid data acquisition dependency UI rendering,
// which solves the problem of requesting dynamic grid layout.
// In the future, Modern.js will also add more capabilities to this feature,
// such as pre-fetching, data caching, etc.

export type LoaderData = {
  code: number;
  data: {
    name: string;
    avatar: string;
    email: string;
  }[];
};

export const loader = async (): Promise<LoaderData> => {
  const data = new Array(20).fill(0).map(() => {
    const firstName = name.firstName();
    return {
      name: firstName,
      avatar: `https://api.dicebear.com/7.x/pixel-art/svg?seed=${firstName}`,
      email: internet.email(),
      archived: false,
    };
  });

  return {
    code: 200,
    data,
  };
};
