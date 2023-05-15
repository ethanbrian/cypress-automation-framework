pipeline {
    agent any 

    tools{nodejs "node"}

    stages {
        stage('Cypress Parallel Test Suite'){
            parallel {
                stage('Slave Node1'){
                    agent {
                        label "remote_node1"
                    }
                    steps {
                        git url: 'https://github.com/ethanbrian/cypress-automation-framework.git'
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npx cypress run --spec cypress/e2e/api/paymentorder.js headless'
                    }
                }
                stage('Slave Node2'){
                    agent {
                        label "remote_node2"
                    }
                    steps {
                        git url: 'https://github.com/ethanbrian/cypress-automation-framework.git'
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npx cypress run --spec cypress/e2e/api/paymentorder.js headless'
                    }
                }
            }
        }
    }
}