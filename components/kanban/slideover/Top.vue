<script lang="ts" setup>
import dayjs from 'dayjs'
import { useDealSlideStore } from '@/stores/deal-slide.store'

const store = useDealSlideStore()
</script>

<template>
	<div class="border-border bg-black/20 rounded p-3">
		<div class="uppercase bold text-lg mb-4">О сделке</div>
		<KanbanSlideoverLabel label-text="Наименование">
			<h2>{{ store.slideState.card?.name }}</h2>
		</KanbanSlideoverLabel>
		<KanbanSlideoverLabel label-text="Сумма">
			{{ convertCurrency(store.slideState.card?.price || 0) }}
		</KanbanSlideoverLabel>
		<KanbanSlideoverLabel label-text="Статус">
			<UiBadge variant="outline">
				{{ store.slideState.card?.status }}
			</UiBadge>
		</KanbanSlideoverLabel>
		<KanbanSlideoverLabel label-text="Клиент">
			{{ store.slideState.card?.companyName }}
		</KanbanSlideoverLabel>
		<KanbanSlideoverLabel label-text="Дата создания">
			{{ dayjs(store.slideState.card?.$createdAt).format('DD MMMM YYYY') }}
		</KanbanSlideoverLabel>
	</div>
</template>
