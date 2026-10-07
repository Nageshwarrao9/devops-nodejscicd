pipeline {

    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Source code already checked out by Jenkins.'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npm test -- --runInBand'
            }
        }

        stage('Deploy') {
            steps {
                bat '''
                taskkill /F /IM node.exe >nul 2>&1 || exit /b 0
                powershell -Command "Start-Process node -ArgumentList 'server.js' -WorkingDirectory '%CD%'"
                '''
            }
        }
    }

    post {
        success {
            echo 'CI/CD Pipeline completed successfully!'
        }

        failure {
            echo 'CI/CD Pipeline failed.'
        }
    }
}