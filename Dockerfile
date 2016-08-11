FROM mhart/alpine-node

WORKDIR /src

ADD package.json /src/package.json

# If you have native dependencies, you'll need extra tools
# RUN apk add --no-cache make gcc g++ python
RUN apk add --no-cache curl
# If you need npm, don't use a base tag
RUN npm install
ADD Server.js /src/server.js
ADD views/ /src/views/

#ENV DEBUG_FLAG=DEBUG
#ENV DEBUG_FLAG=DEBUG_BRK
ENV AUTH0SECRET="xxyyz"

EXPOSE 2000 5858
CMD node ${DEBUG_FLAG} server.js