pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Pull the latest code from GitHub
                git 'https://github.com/aksh047/Jenkins-pipeline.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    docker.build('Question3-image')
                }
            }
        }
        stage('Push Docker Image') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', 'dockerhub-credentials') {
                        docker.image('Question3-image').push()
                    }
                }
            }
        }
    }
}
