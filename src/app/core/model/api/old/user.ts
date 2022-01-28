export interface UserAPI {
  contact: {
    name: string;
    surname: string;
    client: {
      id: number;
      name: string;
    };
  };

  id: number;

  role: {
    id: number;
    name: string;
    level: number;
  };

  username: string;
}
