#BASE image taken :https://github.com/cypress-io/cypress-docker-images
FROM cypress/browsers:node14.16.0-chrome90-ff88

#create the folder where our project will be stored
RUN mkdir /cypress
#make it the work directory
WORKDIR /cypress
#the essential files that must use to run our scripts
COPY ./package.json .
COPY ./cypress.config.js .
COPY ./cypress.env.json .
COPY ./cypress ./cypress
#Install the cypress dependencies in the work directory
RUN npm install
#Executable commands the container will use[exc Form]
ENTRYPOINT ["npx","cypress","run"]
#with CMD in this case , one can specify more parameters to the last entrypoint
CMD [""]