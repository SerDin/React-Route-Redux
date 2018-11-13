fakeAuth = () => {
	return {
		isAuthenticated: false,
		authenticate(cb) {
			this.isAuthenticated = true
			setTimeout(cb, 2000)
		},
		signout: true,
		authenticate(cb) {
			this.isAuthenticated = false
			setTimeout(cb, 2000)
		}
	}
}
