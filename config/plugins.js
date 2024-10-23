
module.exports = ({ env }) => ({
  /*upload: {
      config: {
        provider: "strapi-provider-upload-do",
        providerOptions: {
          key: env('DO_SPACE_ACCESS_KEY'),
          secret: env('DO_SPACE_SECRET_KEY'),
          endpoint: env('DO_SPACE_ENDPOINT'),
          space: env('DO_SPACE_BUCKET'),
          directory: env('DO_SPACE_DIRECTORY'),
          cdn: env('DO_SPACE_CDN'),
        }
      },
    },*/
   /* upload: {
        config: {
          provider: "strapi4-ftp-provider",
          providerOptions: {
            host: env("FTP_HOST"),
            port: env("FTP_PORT"),
            user: env("FTP_USER"),
            password: env("FTP_PASSWORD"),
            secure: env.bool("FTP_SECURE", false),
            path: env("FTP_BASE_PATH"),
            baseUrl: env("FTP_BASE_URL"),
          },
        },
      },*/
      upload: {
        config: {
          provider: "strapi-provider-upload-ftp-v2",
          providerOptions: {
            host: env("FTP_HOST"),
            port: env("FTP_PORT"),
            user: env("FTP_USER"),
            password: env("FTP_PASSWORD"),
            basePath: env("FTP_BASE_PATH"),
            baseUrl: env("FTP_BASE_URL"),
          },
          breakpoints: {
                  xlarge: 1920,
                  large: 1000,
                  medium: 750,
                  small: 500,
                  xsmall: 64
                },
        },
      },
    email: {
        config: {
          provider: 'nodemailer',
          providerOptions: {
            host: env('SMTP_HOST', 'smtp.example.com'),
            port: env('SMTP_PORT', 587),
            secureConnection: env('SMTP_SSL', false),
            auth: {
              user: env('SMTP_USERNAME'),
              pass: env('SMTP_PASSWORD'),
            },
            tls: {
              ciphers:'SSLv3'
            }
          },
          settings: {
            defaultFrom: env('DEFAULT_EMAIL'),
            defaultReplyTo: env('DEFAULT_EMAIL'),
          },
        },
      },
});
