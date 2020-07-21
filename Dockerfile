FROM node

# set a working directory
WORKDIR /app

# add app
COPY . ./

# install app dependencies
RUN npm ci

# expose the following port
EXPOSE 3000

# star app
CMD ["npm", "start"]
