type UploadFile = {
  id: number;
  created_at: Date;
  updated_at: Date;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: JSON;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string;
  provider: string;
  provider_metadata: JSON;
};

type ComponentDataProfile = {
  id: number;
  name: string;
  surname: string;
  wantsMarketing: boolean;
  avatar: UploadFile;
  city: string;
  telephone: string;
  network: string;
  dateOfBirth: Date;
};

export interface CurrentUserProps {
  id: number;
  created_at: Date;
  updated_at: Date;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  profile: ComponentDataProfile;
}
