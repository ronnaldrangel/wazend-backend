module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST', 'smtp.example.com'),
        port: env('SMTP_PORT', 587),
        auth: {
          user: env('SMTP_USERNAME'),
          pass: env('SMTP_PASSWORD'),
        },
        // ... any custom nodemailer options
      },
      settings: {
        defaultFrom: env('EMAIL_FROM', 'hello@example.com'),
        defaultReplyTo: env('EMAIL_REPLY_TO', 'hello@example.com'),
      },
    },
  },
  // email: {
  //   config: {
  //     provider: 'strapi-provider-email-resend',
  //     providerOptions: {
  //       apiKey: env('RESEND_API_KEY'), // Required
  //     },
  //     settings: {
  //       defaultFrom: env('RESEND_FROM'),
  //       defaultReplyTo: env('RESEND_USERNAME'),
  //     },
  //   }
  // }, 
  // ...
  // Otras configuraciones de plugins
  "users-permissions": {
    config: {
      register: {
        allowedFields: [
          "name",   // Permitir el campo 'name'
          "phone"   // Permitir el campo 'phone'
        ],
      },
    },
  },

  // S3
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        baseUrl: env('MINIO_PUBLIC_ENDPOINT'),
        s3Options: {
          credentials: {
            accessKeyId: env('MINIO_ROOT_USER'),
            secretAccessKey: env('MINIO_ROOT_PASSWORD'),
          },
          endpoint: env('MINIO_PRIVATE_ENDPOINT'),
          region: env('MINIO_REGION'),
          forcePathStyle: true,
          params: {
            Bucket: env('MINIO_BUCKET'),
          },
        }
      },
    },
  },


});