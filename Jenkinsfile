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
    
    stages {
        stage('Build') {
            steps {
                // Perform any necessary build steps before running tests
                // For example, installing dependencies, compiling code, etc.
                 git url: 'https://github.com/ethanbrian/cypress-automation-framework.git'
                 bat 'npm install'
                 bat 'npm update'
            }
        }
        
        stage('Run Cypress Tests') {
            steps {
                script {
                    // Define an array of Cypress spec file paths
                    def specFiles = [
                        'cypress/e2e/api/paymentorder.js',
                        'cypress/e2e/api/payment_order_originator.js',
                        'cypress/e2e/api/express_deposit_request_post.js',
                        'cypress/e2e/api/express_deposit_request_get.js'
                        'cypress/e2e/api/TransactionRoutes.js'
                    ]
                    
                    // Loop through the spec files and run Cypress for each file
                    for (def specFile in specFiles) {
                        sh "npx cypress run --spec ${specFile} --headless"
                    }
                }
            }
        }
    }
}
