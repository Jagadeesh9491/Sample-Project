pipeline {
    agent any
    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npx wdio wdio.conf.ts'
            }
        }
        stage('Generate Allure Report') {
            steps {
                sh 'npx allure generate allure-results --clean'
            }
            post {
                always {
                    sh 'npx allure open'
                }
            }
        }
    }
}



