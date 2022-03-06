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
				bat "echo ${DOCKERHUB_CREDENTIALS_USR}"
				bat "echo ${DOCKERHUB_CREDENTIALS_PSW}"
				bat "echo ${DOCKERHUB_CREDENTIALS_PSW} | docker login -u ${DOCKERHUB_CREDENTIALS_USR} --password-stdin"
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
