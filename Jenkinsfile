pipeline {
    agent any

    
        parameters{
            string(name: 'SPEC', defaultValue: 'cypress/integration/**/**', description: 'Enter the script path that you want to execute')
            choice(name: 'BROWSER', choices: ['chrome', 'edge', 'firefox'], description: 'choose the browser where you want to execute your script')
        }
        options{
            ansiColor('xtrem')
        }

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
                bat 'npm run cypress:ci'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}