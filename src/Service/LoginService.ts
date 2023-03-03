interface User {
  id: string;
  password: string;
}
export interface ResponseUser extends Omit<User, "password"> {
  isLogin: boolean;
}

interface LoginServiceImplements {
  get: (key: string) => ResponseUser;
  post: (key: string, body: User) => ResponseUser;
  update: (key: string, body: User) => User;
  delete: (key: string) => void;
}

class LoginService implements LoginServiceImplements {
  private instance: Storage;
  constructor(instance: Storage) {
    this.instance = instance;
  }

  get(key: string) {
    const user = this.instance.getItem(key);
    if (user) {
      return JSON.parse(user);
    }
    return {
      id: "",
      isLogin: false
    };
  }
  post(key: string, body: User) {
    this.instance.setItem(key, JSON.stringify({ id: body.id, isLogin: true }));
    return this.get(key);
  }
  update(key: string, body: User) {
    this.instance.setItem(key, JSON.stringify(body));
    return this.get(key);
  }
  delete(key: string) {
    this.instance.removeItem(key);
  }
}

export default LoginService;
