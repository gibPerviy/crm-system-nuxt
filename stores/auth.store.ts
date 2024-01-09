interface IAuthStore {
	email: string
	name: string
	status: boolean
}

const defaultValue: { user: IAuthStore } = {
	user: {
		email: '',
		name: '',
		status: false,
	},
}

export const userAuthStore = defineStore('auth', () => {
	const userState = ref(defaultValue)

	const isAuth = computed(() => userState.value.user.status)

	const clear = () => (userState.value = defaultValue)
	const set = (input: IAuthStore) => {
		userState.value.user = input
	}

	return { userState, isAuth, clear, set }
	// state: () => defaultValue,
	// getters: {
	// 	isAuth: state => state.user.status,
	// },
	// actions: {
	// 	clear() {
	// 		this.$patch(defaultValue)
	// 	},
	// 	set(input: IAuthStore) {
	// 		this.$patch({ user: input })
	// 	},
	// },
})

export const userIsLoadingStore = defineStore('isLoading', () => {
	const isLoading = ref(true)
	const set = (data: boolean) => {
		isLoading.value = data
	}

	return { isLoading, set }
	// state: () => ({
	// 	isLoading: true,
	// }),
	// actions: {
	// 	set(data: boolean) {
	// 		this.$patch({ isLoading: data })
	// 	},
	// },
})
