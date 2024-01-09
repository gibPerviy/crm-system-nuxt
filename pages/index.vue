<script lang="ts" setup>
useSeoMeta({
	title: 'Home | CRM System',
})
</script>

<template>
	<div class="p-10">
		<h1 class="font-bold text-2xl mb-10">CRM System</h1>
		<div>
			<UiCard class="mb-3" draggable="true">
				<UiCardHeader role="button">New Card</UiCardHeader>
				<UiCardContent>Компания</UiCardContent>
				<UiCardFooter>Date</UiCardFooter>
			</UiCard>
		</div>
	</div>
</template>
