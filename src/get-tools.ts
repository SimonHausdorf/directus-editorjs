import CodeTool from '@editorjs/code';
import DelimiterTool from '@editorjs/delimiter';
import HeaderTool from '@editorjs/header';
import InlineCodeTool from '@editorjs/inline-code';
import MarkerTool from '@editorjs/marker';
import ParagraphTool from '@editorjs/paragraph';
import QuoteTool from '@editorjs/quote';
import SimpleImageTool from '@editorjs/simple-image';
import TableTool from '@editorjs/table';
import UnderlineTool from '@editorjs/underline';
import StrikethroughTool from '@itech-indrustries/editorjs-strikethrough';
import ListTool from 'editorjs-list';
import AlignmentTuneTool from 'editorjs-text-alignment-blocktune';
import Twitter from 'twitter-embed-editorjs-plugin';
import ImageTool from './custom-plugins/plugin-image-patch.js';

export type UploaderConfig = {
	addTokenToURL: (url: string, token: string) => string;
	baseURL: string | undefined;
	setFileHandler: (handler: any) => void;
	setCurrentPreview?: (url: string) => void;
	getUploadFieldElement: () => any;
	t: Record<string, string>;
};

export default function getTools(
	uploaderConfig: UploaderConfig,
	selection: Array<string>,
	haveFilesAccess: boolean
): Record<string, object> {
	const tools: Record<string, any> = {};
	const fileRequiresTools = ['image'];

	const defaults: Record<string, any> = {
		header: {
			class: HeaderTool,
			shortcut: 'CMD+SHIFT+H',
			inlineToolbar: true,
			config: {
				levels: [2, 3],
				defaultLevel: 2,
			},
		},
		list: {
			class: ListTool,
			inlineToolbar: false,
			shortcut: 'CMD+SHIFT+1',
		},
		paragraph: {
			class: ParagraphTool,
			inlineToolbar: true,
		},
		code: {
			class: CodeTool,
		},
		twitter: {
			class: Twitter,
		},
		underline: {
			class: UnderlineTool,
			shortcut: 'CMD+SHIFT+U',
		},
		strikethrough: {
			class: StrikethroughTool,
		},
		table: {
			class: TableTool,
			inlineToolbar: true,
		},
		quote: {
			class: QuoteTool,
			inlineToolbar: true,
			shortcut: 'CMD+SHIFT+O',
		},
		marker: {
			class: MarkerTool,
			shortcut: 'CMD+SHIFT+M',
		},
		inlinecode: {
			class: InlineCodeTool,
			shortcut: 'CMD+SHIFT+I',
		},
		delimiter: {
			class: DelimiterTool,
		},
		simpleimage: {
			class: SimpleImageTool,
		},
		image: {
			class: ImageTool,
			config: {
				uploader: uploaderConfig,
			},
		},
		alignmentTune: {
			class: AlignmentTuneTool,
		},
	};

	for (const toolName of selection) {
		if (!haveFilesAccess && fileRequiresTools.includes(toolName)) continue;

		if (toolName in defaults) {
			tools[toolName] = defaults[toolName];
		}
	}

	if ('alignmentTune' in tools) {
		if ('paragraph' in tools) {
			tools.paragraph.tunes = ['alignmentTune'];
		}

		if ('header' in tools) {
			tools.header.tunes = ['alignmentTune'];
		}

		if ('quote' in tools) {
			tools.quote.tunes = ['alignmentTune'];
		}
	}

	return tools;
}
