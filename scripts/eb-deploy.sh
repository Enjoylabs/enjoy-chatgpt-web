dir="$(dirname "$0")"
# npm install
# npm run build
#打包
rm app_prod.zip
zip -r app_prod1.zip package.json app/* public/ .ebextensions/ .elasticbeanstalk/
eb deploy --debug

#设置环境变量
#cat .env.local| xargs eb setenv