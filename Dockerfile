FROM node:10.4.1-alpine
WORKDIR /app
ADD . /app
RUN npm install
EXPOSE 5700
ENV PORT 5700
CMD ["node", "server/index.js"]
