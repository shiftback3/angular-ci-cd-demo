pipeline {
    agent any

    
        parameters{
            string(name: 'SPEC', defaultValue: 'cypress/integration/login.spec', description: 'Enter the script path that you want to execute')
            choice(name: 'BROWSER', choices: ['chrome', 'edge', 'firefox'], description: 'choose the browser where you want to execute your script')
        }
        // options{
        //     ansiColor('xterm')
        // }

    stages {
        stage('Dependencies') {
            steps {
                bat 'npm i'
            }
        }
        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }
        stage('Unit Tests') {
            steps {
                bat 'npm run test'
            }
        }
        stage('e2e Tests') {
            steps {
                // bat 'npx cypress run --browser ${BROWSER} --spec ${SPEC}'
                bat 'npm run start'
                bat 'npx cypress run --browser ${BROWSER} --spec ${SPEC}'
            }
        }
        
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
    post{
        always{
            echo 'Deployment Complete'
        }
    }
}