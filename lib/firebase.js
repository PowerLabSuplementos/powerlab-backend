const admin = require('firebase-admin');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      type: "service_account",
      project_id: "power-lab-suplementos",
      private_key_id: "efb2b1840e8dac0adfa1e0abff3ec9fc1ae82bb4",
      private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDly3GH2W+1Mb17\n6FoFAYpJpWbFmy/w7FZHLI73EXIwu6d8X4R+/YDrjNpVk/utqSsykbIla3YryWVJ\n93XEnGAuB2simIuTi1d/PW7WTCBv9ehJntWa+zRDzHCvZke3E5qzTWE7Cl3eajTL\nuQv4xisRUgNsASLHhJyNpbdMiI1E7NvcYfhNxGYYjWIHeAjT8s6FS9Mq8Du3t8wn\n51Fog0F1V85s4Q5I38JjNCTq32Tn05b6KH5EG1CYNJOXxwziXUZUkD9PE8ucPnAN\nPi0AGpe/nWePH4FZzNCR+XSF9zdtdXK/95sNvnqptU4G6Rzd8xWnHpsjXtOI177N\nOzNyqDQNAgMBAAECggEADxcj2ru68/9y9dDdnoAKJIl13QqypIPkq5JfxhZRdSVR\nm5+LLCq6HV3X1bBc4fvewBikxgPPVBNK8UdMps9tGoC2tqQlYFhRc+PlJDIGHEwe\nB72kQeP2u/AQQ1h4Y6uoKFevx6iH3wwC8RDzGhBrchz8aAqQDeGlxUCJb7905X53\nkP9/NniVmyBPL8osZu0xr+p72nD4jbbzRR7amvrxznf8Yn2hi3xIl6OW4SXMBSZw\n/IIQkUtv0nDpHtFYtBWv3De9LBaMR4hVHmjD7660qQTeKItn1ptwo5GcbYZhYIkL\nkeBgj5Xg3An5CZ5xT9BPDDpIygTiS3uRlQA1k57fEQKBgQD/RjB7dOO6MIE3lU1x\nlybKK+kcRYsg3OUe0nPGTcm9VvqIqSiuQUlH3uHZB17Y6H508HPkgvk+IvI4Zp/U\nbNoEq6N044oY89ebhk034mW6h37t9GGBkXx3lt9OF186V/+HBEs4rBjBifOKAC4J\n3I/fqZgr7oGkVY/IWuVk1oN8PQKBgQDmcrU64ea/wuAspBS4J8diqvTVU3qMgDro\nN79AdoxwzoGBorTKBXyCdmRCW3gH44bLDAmCEtzMFQB5ojt89TMToCzQ2sINETQ+\n6bg8GOUR0Y3FpNIcgxLufarXviYVoCZe9NMn9NtGp2crJkXWXLOgE3v+f3XULzMj\nyI2oMawEEQKBgQCSVek7DIHzXRTmCSexAyYQZWWneFJOT3Lk3V3TAwqwCKlsKBSS\n+AgLNEChyjDcBUNgw+qbx10b+qqCHIppGtFMNhxoyHuE3Fvv4uhnLdiFOmFQBXTT\n8tO4NnviZ1GGv6VS/+ojHby/TdaXeIzryE2NuMnr/TjCPO5Eu56e1L3hPQKBgG6c\nxpKR1fFbd8DVrUBLj6+zgTtYC22fKydFgt5NSNHovU7dK0wA4Ce67hrPzshylMOn\nbnTp2uN2fTjk/wrWowKbkodZSWV+SYadJppqFKG95P/mQhf/bjndRgCyO5OLwH85\nopT+ObYrKiETCNiAvJNsZsrcoVEMqs5VOHFwDjIRAoGAfITxpvfCW2sm1CfKDNB8\nNG9RxLI3a1YrTLDsfejz58nhu+yAKnUbN9nuISlPh6E/0RfrSgzFa/XzlcA0wXFj\nfALgjGueOQKzpslmh9G44JcEhDYjY/xv0Cn8xighHEGEJuSBbzu/NMcBNwEmP45i\n3oqGEkhtY6V42v2VM26Cxec=\n-----END PRIVATE KEY-----\n",
      client_email: "firebase-adminsdk-fbsvc@power-lab-suplementos.iam.gserviceaccount.com",
      client_id: "114981942076221300358",
      auth_uri: "https://accounts.google.com/o/oauth2/auth",
      token_uri: "https://oauth2.googleapis.com/token",
    }),
    storageBucket: "power-lab-suplementos.appspot.com",
  });
}

module.exports = admin;
