FROM node:lts-alpine AS build
#ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "./"]
RUN npm install --silent && mv node_modules ../
COPY . .
RUN npm run build

RUN chown -R node /usr/src/app
USER node

RUN npm run build --production -o shop

FROM nginx:alpine AS publish
EXPOSE 80
COPY --from=build /usr/src/app/dist/shop/ /usr/share/nginx/html


#CMD ["npm", "start"]
