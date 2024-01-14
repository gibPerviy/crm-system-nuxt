<script lang="ts" setup>
// import { KanbanSlideoverTop } from '@/components/kanban/slideover/Top.vue'
import { useDealSlideStore } from '@/stores/deal-slide.store'
const store = useDealSlideStore()

const isLocalOpen = computed({
	get: () => store.slideState.isOpen,
	set: value => {
		store.slideState.isOpen = value
	},
})
</script>

<template>
	<div>
		<USlideover v-model="isLocalOpen">
			<UCard
				class="flex flex-col flex-1 overflow-y-auto"
				:ui="{
					body: { base: 'flex-1' },
					ring: '',
					divide: 'divide-y divide-border',
				}"
			>
				<template #header>
					<KanbanSlideoverTop />
				</template>
				<KanbanSlideoverComments />
			</UCard>
		</USlideover>
	</div>
</template>
