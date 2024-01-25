dir="$(dirname "$0")"
npm install
npm run export
#打包
rm app.zip
zip -r app.zip package.json .next/ public/
eb deploy --debug

