module.exports = {
	apps: [{
		name:'fitting-exploder',
		script: './index.js'
	}],
	deploy: {
		production: {
			user: 'ubuntu',
			host: 'ec2-35-160-3-32.us-west-2.compute.amazonaws.com',
			key: '~/.ssh/webserver.pem',
			ref: 'origin/master',
			repo: 'git@github.com:sprocketjockey/fitting-exploder.git',
			path: '/home/ubuntu/fitting-exploder',
			'post-deploy':'npm install && pm2 startOrRestart ecosystem.config.js'
		}
	}
}
