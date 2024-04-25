enjoy world 的chatgpt 环境。
# 开发

```bash
# 安装依赖
npm install
npm run dev
# 启动服务
```
# 部署
## aws eb 部署
使用aws的nodejs环境部署，package 目录下不存在node_modules，aws 在部署时会自动执行。当存在node_modules时aws 仅执行npm start.
执行
sh scripts/eb-deploy.sh 生成的zip 文件如下
```bash
.
├── .ebextensions
├── .elasticbeanstalk
├── .next
│   ├── server
│   ├── standalone
│   ├── static
│   └── types
└── public
```