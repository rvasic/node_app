pipeline{
	agent {label "Jenkins Agent"}

	environment {
		DOCKERHUB_CREDENTIALS=credentials('dockerhub-credentials')
	}

	stages {
		stage('Build') {
			steps {
				bat 'docker build -t rvasic/nodeapp:latest .'
			}
		}

		stage('Login') {
			steps {
				withCredentials([usernamePassword( credentialsId: 'dockerhub-credentials', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
					bat "echo ${PASSWORD} | docker login -u ${USERNAME} --password-stdin"
				}
			}
		}

		stage('Push') {
			steps {
				bat 'docker push rvasic/nodeapp:latest'
			}
		}
	}

	post {
		always {
			bat 'docker logout'
		}
	}

}
