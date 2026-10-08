pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Nageshwarrao9/devops-nodejscicd.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
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
                REM Kill any existing Node process
                taskkill /F /IM node.exe >nul 2>&1 || exit /b 0

                REM Start server.js in background
                powershell -Command "Start-Process node -ArgumentList 'server.js' -WorkingDirectory '%CD%'"
                '''
            }
        }
    }

    post {
        success {
            echo 'CI/CD Pipeline completed successfully! 🎉'
            echo 'Application is now running at http://localhost:3000'
        }
        failure {
            echo 'CI/CD Pipeline failed.'
        }
    }
}
