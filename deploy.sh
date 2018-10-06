#! /usr/bin/env bash
set -e # exit entire script when command exits with non-zero status

# Install dependencies
npm install

# Publish `production` release
expo publish --release-channel production --non-interactive

# Start building standalone android build using `production` release channel
expo build:android --release-channel production --non-interactive --no-publish

# Download the built android binary
curl -o artifacts/app.apk "$(expo url:apk --non-interactive)" --create-dirs

# Use fastlane to upload your current standalone android build
# Customize this to fit your needs. Take note of env variables. 
# Check out https://docs.fastlane.tools for more info.
bundle exec fastlane supply --track 'production' --json_key 'secrets/api-6774831128510009294-70105-65311c94d7b3.json' --package_name "com.lendroit.sammeet" --apk "artifacts/app.apk" --skip_upload_metadata --skip_upload_images --skip_upload_screenshots

