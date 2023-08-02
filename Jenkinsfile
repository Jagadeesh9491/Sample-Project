pipeline {
    agent any
    stages {
        stage('Install Dependencies') {
            // Use the script block to run platform-specific commands
                script {
                    // Check if the current agent is running on Windows
                    if (isUnix()) {
                        sh 'npm install'
                    } else {
                        bat 'npm install'
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



