// pipeline {
//     agent any 

//     tools{nodejs "node"}

//     stages {
//         stage('Cypress Parallel Test Suite'){
//             parallel {
//                 stage('Slave Node1'){
//                     agent {
//                         label "remote_node1"
//                     }
//                     steps {
//                         git url: 'https://github.com/ethanbrian/cypress-automation-framework.git'
//                         bat 'npm install'
//                         bat 'npm update'
//                         bat 'npx cypress run --spec cypress/e2e/api/paymentorder.js headless'
//                     }
//                 }
//                 stage('Slave Node2'){
//                     agent {
//                         label "remote_node2"
//                     }
//                     steps {
//                         git url: 'https://github.com/ethanbrian/cypress-automation-framework.git'
//                         bat 'npm install'
//                         bat 'npm update'
//                         bat 'npx cypress run --spec cypress/e2e/api/paymentorder.js headless'
//                     }
//                 }
//             }
//         }
//     }
// }



pipeline {
    agent any
    tools{nodejs "node"}
    
    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/ethanbrian/cypress-automation-framework.git'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                bat 'npm install' // or yarn install
                bat 'npm update'
            }
        }
        
        stage('Run Cypress Tests') {
        steps {
        timeout(time: 15, unit: 'MINUTES') {
            bat 'npx cypress run --headless --spec "cypress/e2e/api/paymentorder.js"'
                bat 'npx cypress run --headless --spec "cypress/e2e/api/payment_order_originator.js"'
                bat 'npx cypress run --headless --spec "cypress/e2e/api/express_deposit_request_post.js"'
                bat 'npx cypress run --headless --spec "cypress/e2e/api/express_deposit_request_get.js"'
                bat 'npx cypress run --headless --spec "cypress/e2e/api/TransactionRoutes.js"'
        }
    }
}

    }
}

