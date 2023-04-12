FROM node:slim

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

VOLUME [ "/usr/src/app/public/uploads" ]

EXPOSE 3000

CMD [ "node", "./bin/www" ]