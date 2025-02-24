/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // other configurations
};

module.exports = nextConfig;
```

# example netlify.toml
[build]
  command = "next build"
  functions = "netlify/functions"
  publish = ".next"

[context.production.environment]
  NETLIFY_NEXT_PLUGIN_SKIP = "true"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

## (optional) Settings for Netlify Dev
## https://github.com/netlify/cli/blob/main/docs/netlify-dev.md#project-detection
#[dev]
#  command = "yarn start" # Command to start your dev server
#  port = 3000 # Port that the dev server will be listening on
#  publish = "dist" # Folder with the static content for _redirect file

## more info on configuring this file: https://docs.netlify.com/configure-builds/file-based-configuration/
