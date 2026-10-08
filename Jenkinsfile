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
