export interface DribbbleShot {
  id: number;
  title: string;
  description: null;
  html_url: string;
  tags: [];
  images: {
    hidpi: string;
    normal: string;
    one_x: string;
    two_x: string;
    four_x: string;
    teaser: string;
  };
  published_at: Date;
  updated_at: Date;
  low_profile: false;
  animated: false;
  width: number;
  height: number;
  attachments: [];
  projects: [];
  video: null;
}

export const getDribbbleShots = async (): Promise<DribbbleShot[]> => {
  const res = await fetch(
    "https://api.dribbble.com/v2/user/shots?access_token=" +
      process.env.ACCESS_TOKEN
  );
  const data = await res.json();

  return data;
};
