FROM cypress/included:8.0.0
RUN mkdir /cypress-docker
WORKDIR /cypress-docker
COPY ./package.json .
COPY ./package-lock.json .
COPY ./cypress.json .
COPY ./custCypressSnapshot.json .
COPY ./tsconfig.json .
COPY ./Pages .
COPY ./HelpFolder .
COPY ./cypress ./cypress
RUN npm install
ENTRYPOINT ["npm", "run"]