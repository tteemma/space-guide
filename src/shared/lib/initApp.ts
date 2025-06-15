export const startApp = (cb: () => void) => {
	if (typeof window === 'undefined') {
		cb()
	}
}
