/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
    SMTP_HOST: string;
    SMTP_PORT: string;
    SMTP_USER: string;
    SMTP_PASS: string;
    RECIPIENT_EMAIL: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }