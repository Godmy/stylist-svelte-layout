import NumberedStepGrid from './index.svelte';
import type { RecipeNumberedStepGrid } from '$stylist/layout/interface/recipe/numbered-step-grid';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** Kicker and title above a numbered list of steps. */
export default {
	component: NumberedStepGrid,
	title: 'NumberedStepGrid',
	description:
		'Kicker + title heading above an N-column numbered step list. Collapses to 1 column under 820px.',
	args: {
		kicker: 'Как это работает',
		title: 'Три шага до поездки',
		columns: 3,
		steps: [
			{
				title: 'Выбираете маршрут',
				text: 'Групповые экскурсии по расписанию или индивидуальные — под вашу компанию, даты и темп.'
			},
			{
				title: 'Оставляете заявку',
				text: 'Указываете дату и число человек. Система сразу считает стоимость и сумму предоплаты в $ и ₽.'
			},
			{
				title: 'Менеджер подтверждает',
				text: 'Связывается с вами, проверяет наличие мест и закрепляет бронь. Оплата — частичной предоплатой.'
			}
		]
	},
	controls: {
		kicker: { type: 'text' },
		title: { type: 'text' },
		columns: { type: 'number', min: 1, max: 4, step: 1 }
	},
	presets: { NoHeading: { kicker: '', title: '' } },
	context: {
		kind: 'element',
		tag: 'div',
		attrs: { style: 'max-width: 56rem; padding: 1rem;' },
		children: [{ kind: 'outlet' }]
	}
} satisfies ContractStory<RecipeNumberedStepGrid>;
