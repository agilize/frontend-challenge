FROM node:17-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
RUN npm install -s

COPY . .

RUN chown -R node /app/node_modules

USER node

CMD ["npm", "start"]
