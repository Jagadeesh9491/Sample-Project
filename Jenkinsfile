pipeline {
    agent any
    stages {
        stage('Install Dependencies') {
            // Use the script block to run platform-specific commands
                steps {
                      script {
                    try {
                        // Use sh on Unix and bat on Windows
                        if (isUnix()) {
                            sh 'npm install'
                        } else {
                            bat 'npm install'
                        }
                    } catch (Exception e) {
                        echo "Error installing dependencies: ${e.getMessage()}"
                        currentBuild.result = 'FAILURE'
                    }
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



