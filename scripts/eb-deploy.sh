dir="$(dirname "$0")"
npm install
npm run build
#打包
rm app_prod.zip
zip -r app_prod.zip package.json .next/ public/ .ebextensions/ .elasticbeanstalk/
eb deploy --debug

