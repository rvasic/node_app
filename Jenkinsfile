pipeline{
	agent "Jenkins Agent"

	environment {
		DOCKERHUB_CREDENTIALS=credentials('dockerhub-credentials')
	}

	stages {
		stage('Build') {
			steps {
				sh 'docker build -t rvasic/nodeapp:latest .'
			}
		}

		stage('Login') {
			steps {
				sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
			}
		}

		stage('Push') {
			steps {
				sh 'docker push rvasic/nodeapp:latest'
			}
		}
	}

	post {
		always {
			sh 'docker logout'
		}
	}

}
