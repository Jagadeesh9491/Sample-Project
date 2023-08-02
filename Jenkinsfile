pipeline {
    agent any
    options {
        copyArtifactPermission('*');
        timeout(time: 3, unit: 'MINUTES')
    }
    environment {
        // Define environment variables for Node.js
        NODE_HOME = 'C:\Program Files\nodejs' 
        // Replace with the actual path to Node.js
        PATH = "${env.NODE_HOME}/bin:${env.PATH}"
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
            bat "'npx allure generate allure-results"   
            }
            post {
              always {
            bat "npx allure open"
        }
            }
        }
    }
}



