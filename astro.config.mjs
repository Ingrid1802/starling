import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	base: '/starling/',
	outDir: './docs',
	integrations: [
		starlight({
			title: 'OpenSR test',
			social: {
				github: 'https://github.com/ESAOpenSR/opensr-test',
			},
			sidebar: [
				{
					label: 'Home',
					items: [
						{ label: 'Home', link: './home/home' },
						{ label: 'Contributing', link: './home/contributing' },
						{ label: 'Code of Conduct', link: './home/code_of_conduct' },
						{ label: 'Changelog', link: './home/changelog' },
						{ label: 'License', link: './home/license' },
					],
				},
				{
					label: 'Properties',
					items: [
						{ label: 'main', link: './properties/main' },
					],
				},
				{
					label: 'API',
					items: [
						{ label: 'Model parameters', link: './api/model_parameters' },
						{ label: 'Setup method', link: './api/setup_method' },
						{ label: 'Compute method', link: './api/compute_method' },
						{ label: 'Summary method', link: './api/summary_method' },
						{ label: 'Results attributes', link: './api/results_attributes' },
					],
				},
				{
					label: 'Dataset',
					items: [
						{ label: 'Home', link: './dataset/home' },
						{ label: 'NAIP', link: './dataset/naip' },
						{ label: 'SPOT', link: './dataset/spot' },
						{ label: 'venµs', link: './dataset/venµs' },
					],
				},
				{
					label: 'Metrics',
					items: [
						{ label: 'Consistency metrics', link: './metrics/consistency' },
						{ label: 'Distance metrics', link: './metrics/distance' },
						{ label: 'Correctness metrics', link: './metrics/correctness' },
					],
				},
				{
					label: 'Examples',
					items: [
						{ label: 'PyTorch models', link: './examples/pytorch_models' },
						{ label: 'TensorFlow models', link: './examples/tensorflow_models' },
						{ label: 'Duffuser models', link: './examples/diffuser_models' },
						{ label: 'Multi-image SR model', link: './examples/multi_image_sr_model' },
						{ label: 'Create Correctness animation', link: './examples/create_correctness_animation' },
					],
				},
				{
					label: 'Benchmark',
					items: [
						{ label: 'Benchmark', link: './benchmarks/benchmarks' },
					],
				},
			],
		}),
	],
});
