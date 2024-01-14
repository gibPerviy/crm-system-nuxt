import type { ICard } from '@/components/kanban/kanban.types'

const defaultValue: { card: ICard | null; isOpen: boolean } = {
	card: null,
	isOpen: false,
}

export const useDealSlideStore = defineStore('deal-slide', () => {
	const slideState = ref(defaultValue)
	const clear = () => (slideState.value = defaultValue)
	const set = (card: ICard) => {
		slideState.value.card = card
		slideState.value.isOpen = true
	}
	const toggle = () => (slideState.value.isOpen = !slideState.value.isOpen)

	return { slideState, clear, set, toggle }
})
