FROM node:14.17.4

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json /usr/src/app/
RUN npm ci

COPY . /usr/src/app/

EXPOSE 3000
CMD ["npm","run","start:dev"]