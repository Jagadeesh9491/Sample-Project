pipeline {
    agent any
    options {
        copyArtifactPermission('*');
        timeout(time: 3, unit: 'MINUTES')
    }
    stages {
        stage('Install Dependencies') {
            // Use the script block to run platform-specific commands
               steps {
                bat 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                bat 'npx wdio wdio.conf.ts'
            }
        }
        stage('Generate Allure Report') {
            steps {
                bat "\"npx\" allure generate ${WORKSPACE}/allure-results"
            }
            post {
              always {
            bat "\"npx\" allure open ${WORKSPACE}"
        }
            }
        }
    }
}



