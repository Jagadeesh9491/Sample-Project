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
                bat 'npx allure generate allure-results'
            }
            post {
              always {
            archiveArtifacts artifacts: 'allure-results/**'
            allure includeProperties: false, jdk: '', properties: [], reportBuildPolicy: 'ALWAYS', results: [
                [path: '${env.WORKSPACE}/allure-results']
            ]
            sh "sudo chown -R jenkins: ${env.WORKSPACE}"
            cleanWs()
        }
            }
        }
    }
}



