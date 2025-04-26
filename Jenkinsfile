pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Pull the latest code from GitHub
                git branch: 'main', url: 'https://github.com/aksh047/Jenkins-pipeline.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    docker.build('aksh047/question3-image')
                }
            }
        }
        stage('Push Docker Image') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', 'dockerhub-credentials') {
                        docker.image('aksh047/question3-image').push()
                    }
                }
            }
        }
    }
}
