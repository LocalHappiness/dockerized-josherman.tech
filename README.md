# **Creation of [joshuaherman.tech](www.joshuaherman.tech)**

## [Next.js](https://nextjs.org/), [Tailwindcss](https://tailwindcss.com/), & [Typescript](https://www.typescriptlang.org/)

### Task-list for joshuaherman.tech

- [x] Create Docker container for website development. [Many Thanks: ](https://github.com/KumarAbhirup/dockerized)[![Twitter](https://img.shields.io/twitter/follow/kumar_abhirup.svg?style=social&label=@kumar_abhirup)](https://twitter.com/kumar_abhirup/)
- [x] Create Ansible role for complete deployment
- [x] Site source will be hosted on Github
- [x] Implement [Tailwind CSS](https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss)
- [x] Does it work?

### Start server and go to [localhost:3000](http://localhost:3000)

```bash
#Create .env file at root for dockerfile
touch .env
#Create .env.local for next.js
cd joshuaherman.tech/packages/landingpage
cd touch .env.local
#Install all dependicies locally
npm install
#You can either deploy the docker container now or just use npm to start development of site
#NPM
cd joshuaherman.tech/packages/landingpage
npm run dev

#Docker
cd joshuaherman.tech
docker-compose up
```
