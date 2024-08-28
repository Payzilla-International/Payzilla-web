# Base on offical Node.js Alpine image
FROM public.ecr.aws/docker/library/node:18.19.1

WORKDIR /usr/app

COPY package.json .
RUN npm --version
RUN npm install
RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache

COPY . .

EXPOSE 13001

CMD ["npm", "run", "start"]
