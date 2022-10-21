import { defineInterface } from '@directus/extensions-sdk';
import InterfaceComponent from './interface.vue';

export default defineInterface({
	id: 'extension-editorjs',
	name: 'Editor.js',
	description: 'Block-styled editor for rich media stories, outputs clean data in JSON using Editor.js',
	icon: 'add_circle',
	component: InterfaceComponent,
	types: ['json'],
	group: 'standard',
	options: [
		{
			field: 'placeholder',
			name: '$t:placeholder',
			meta: {
				width: 'half',
				interface: 'text-input',
				options: {
					placeholder: '$t:enter_a_placeholder',
				},
			},
		},
		{
			field: 'font',
			name: '$t:font',
			type: 'string',
			meta: {
				width: 'half',
				interface: 'select-dropdown',
				options: {
					choices: [
						{
							text: '$t:sans_serif',
							value: 'sans-serif',
						},
						{
							text: '$t:monospace',
							value: 'monospace',
						},
						{
							text: '$t:serif',
							value: 'serif',
						},
						{
							text: 'IBM Plex',
							value: 'ibm',
						},
					],
				},
			},
			schema: {
				default_value: 'ibm',
			},
		},
		{
			field: 'tools',
			name: '$t:interfaces.input-rich-text-html.toolbar',
			type: 'json',
			schema: {
				default_value: ['header', 'list', 'code', 'image', 'paragraph', 'delimiter', 'quote', 'underline', 'twitter'],
			},
			meta: {
				width: 'half',
				interface: 'select-multiple-dropdown',
				options: {
					choices: [
						{
							value: 'header',
							text: 'Header',
						},
						{
							value: 'list',
							text: 'List',
						},
						{
							value: 'paragraph',
							text: 'Paragraph',
						},
						{
							value: 'code',
							text: 'Code',
						},
						{
							value: 'image',
							text: 'Image',
						},
						{
							value: 'table',
							text: 'Table',
						},
						{
							value: 'quote',
							text: 'Quote',
						},
						{
							value: 'marker',
							text: 'Marker',
						},
						{
							value: 'simpleimage',
							text: 'Simple Image',
						},
						{
							value: 'underline',
							text: 'Underline',
						},
						{
							value: 'inlinecode',
							text: 'Inline Code',
						},
						{
							value: 'strikethrough',
							text: 'Strikethrough',
						},
						{
							value: 'delimiter',
							text: 'Delimiter',
						},
						{
							value: 'alignmentTune',
							text: 'Alignment',
						},
						{
							value: 'twitter',
							text: 'Twitter Embed',
						},
					],
				},
			},
		},
		{
			field: 'bordered',
			name: '$t:displays.formatted-value.border',
			type: 'boolean',
			meta: {
				width: 'half',
				interface: 'boolean',
				options: {
					label: '$t:displays.formatted-value.border_label',
				},
			},
			schema: {
				default_value: true,
			},
		},
		{
			field: 'folder',
			name: '$t:interfaces.system-folder.folder',
			type: 'uuid',
			meta: {
				width: 'full',
				interface: 'system-folder',
				note: '$t:interfaces.system-folder.field_hint',
			},
			schema: {
				default_value: undefined,
			},
		},
	],
});
