# stage 1
FROM node:14-alpine as build
WORKDIR /usr/src/build
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# stage 2
FROM node:14-alpine
WORKDIR /usr/src/app
COPY --from=build /usr/src/build ./
EXPOSE 3000
CMD [ "npm", "run", "start:prod" ]