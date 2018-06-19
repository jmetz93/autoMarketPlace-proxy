FROM node:10.4.1-alpine
RUN mkdir /proxy-server

WORKDIR /proxy-server
COPY package.json /proxy-server
RUN npm install

COPY . .
EXPOSE 8080
CMD ["npm", "start"]
