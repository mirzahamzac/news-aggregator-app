FROM node:20-alpine

WORKDIR /app

COPY package*.json .

RUN npm install
RUN npm i @mui/material
RUN npm i axios
RUN npm i @emotion/react
RUN npm i @emotion/styled
RUN npm i react-datepicker
RUN npm i @mui/x-date-pickers
RUN npm i dayjs
RUN npm i @mui/material @emotion/react @emotion/styled
RUN npm i @mui/styled-engine-sc styled-components

COPY . .

EXPOSE 1997

CMD ["npm","run","start"]



