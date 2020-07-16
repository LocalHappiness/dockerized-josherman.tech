![Docker Cloud Build Status](https://img.shields.io/docker/cloud/build/verbingthen0un/joshuaherman.tech?style=for-the-badge)
![Docker Cloud Automated build](https://img.shields.io/docker/cloud/automated/verbingthen0un/joshuaherman.tech?style=for-the-badge)
![Docker Image Size (latest by date)](https://img.shields.io/docker/image-size/verbingthen0un/joshuaherman.tech?style=for-the-badge)

# **Creation of [joshuaherman.tech](www.joshuaherman.tech)**

## [Next.js](https://nextjs.org/), [Tailwindcss](https://tailwindcss.com/), & [Typescript](https://www.typescriptlang.org/)

### Task-list for joshuaherman.tech

- [x] Create Docker container for website development. [Many Thanks: ](https://github.com/KumarAbhirup/dockerized)[![Twitter](https://img.shields.io/twitter/follow/kumar_abhirup.svg?style=social&label=@kumar_abhirup)](https://twitter.com/kumar_abhirup/)
- [x] Site source will be hosted on Github
- [x] Integrate with hub.docker.com for deployment
- [x] Have my Docker images auto updated on server
- [x] Does it work?

### Start server and go to [localhost:3000](http://localhost:3000)

```bash
#Create .env file at root for dockerfile
touch .env
#Create .env.local for next.js
cd joshuaherman.tech/packages/landingpage
cd touch .env.local
#Install all dependencies locally
npm install
#You can either deploy the docker container now or just use npm to start development of site
#NPM
cd joshuaherman.tech/packages/landingpage
npm run dev

#Docker will start in production mode
cd joshuaherman.tech
docker-compose up
```
