import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	base: '/starling/docs/',
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
						{ label: 'Home', link: './docs/home/home' },
						{ label: 'Contributing', link: './docs/home/contributing' },
						{ label: 'Code of Conduct', link: './docs/home/code_of_conduct' },
						{ label: 'Changelog', link: './docs/home/changelog' },
						{ label: 'License', link: './docs/home/license' },
					],
				},
				{
					label: 'Properties',
					items: [
						{ label: 'main', link: './docs/properties/main' },
					],
				},
				{
					label: 'API',
					items: [
						{ label: 'Model parameters', link: './docs/api/model_parameters' },
						{ label: 'Setup method', link: './docs/api/setup_method' },
						{ label: 'Compute method', link: './docs/api/compute_method' },
						{ label: 'Summary method', link: './docs/api/summary_method' },
						{ label: 'Results attributes', link: './docs/api/results_attributes' },
					],
				},
				{
					label: 'Dataset',
					items: [
						{ label: 'Home', link: './docs/dataset/home' },
						{ label: 'NAIP', link: './docs/dataset/naip' },
						{ label: 'SPOT', link: './docs/dataset/spot' },
						{ label: 'venµs', link: './docs/dataset/venµs' },
					],
				},
				{
					label: 'Metrics',
					items: [
						{ label: 'Consistency metrics', link: './docs/metrics/consistency' },
						{ label: 'Distance metrics', link: './docs/metrics/distance' },
						{ label: 'Correctness metrics', link: './docs/metrics/correctness' },
					],
				},
				{
					label: 'Examples',
					items: [
						{ label: 'PyTorch models', link: './docs/examples/pytorch_models' },
						{ label: 'TensorFlow models', link: './docs/examples/tensorflow_models' },
						{ label: 'Duffuser models', link: './docs/examples/diffuser_models' },
						{ label: 'Multi-image SR model', link: './docs/examples/multi_image_sr_model' },
						{ label: 'Create Correctness animation', link: './docs/examples/create_correctness_animation' },
					],
				},
				{
					label: 'Benchmark',
					items: [
						{ label: 'Benchmark', link: './docs/benchmarks/benchmarks' },
					],
				},
			],
		}),
	],
});
