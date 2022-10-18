namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: string;
      PORT: string;
      DB_USER: string;
      DB_HOST: string;
      DB_DATABASE: string;
      DB_PASSWORD: string;
      JWT_SECRET: string;
    }
  }