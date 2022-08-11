FROM node:16.16.0-alpine

RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app

RUN apk update && apk upgrade
# RUN apk add git

COPY . /usr/src/nuxt-app/
RUN yarn install

# RUN yarn run build

EXPOSE 2000


ENV NUXT_HOST=0.0.0.0

ENV NUXT_PORT=2000

# CMD [ "yarn", "start" ]
