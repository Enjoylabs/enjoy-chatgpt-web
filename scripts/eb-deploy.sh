# 部署说明

dir="$(dirname "$0")"
npm install && npm run build    
#判断是否成功
if [ $? -ne 0 ]; then
  echo "npm install failed"
  exit 1
fi
#清理缓存
rm -rf .next/cache
#打包
rm app_prod.zip
zip -r app_prod.zip package.json .next/ public/ .ebextensions/ .elasticbeanstalk/
eb deploy --debug
#设置环境变量
#cat .env.local| xargs eb setenv