FROM node:lts-bullseye-slim

WORKDIR /app

COPY package.json yarn.lock ./

RUN corepack enable

RUN yarn install

COPY . .

ENV PORT=5000

EXPOSE 5000

CMD [ "yarn", "start" ]