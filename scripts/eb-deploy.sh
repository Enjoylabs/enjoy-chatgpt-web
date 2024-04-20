dir="$(dirname "$0")"
# npm install
# npm run build
#打包
rm app_prod.zip
rm -rf tmp
mkdir tmp
cp -R .next/standalone/. tmp/
cp -R .ebextensions/. tmp/
cp -R .elasticbeanstalk/. tmp/
cd tmp
zip -r app_prod.zip .
eb deploy --debug

#设置环境变量
#cat .env.local| xargs eb setenv