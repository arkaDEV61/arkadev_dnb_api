
module.exports = ({ env }) => ({
  upload: {
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
