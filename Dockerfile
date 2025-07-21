FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Start the application
CMD ["npm", "start"]
