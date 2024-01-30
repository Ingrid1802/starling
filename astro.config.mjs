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
						{ label: 'Home', link: '/starling/home/home' },
						{ label: 'Contributing', link: '/starling/home/contributing' },
						{ label: 'Code of Conduct', link: '/starling/home/code_of_conduct' },
						{ label: 'Changelog', link: '/starling/home/changelog' },
						{ label: 'License', link: '/starling/home/license' },
					],
				},
				{
					label: 'Properties',
					items: [
						{ label: 'main', link: '/starling/properties/main' },
					],
				},
				{
					label: 'API',
					items: [
						{ label: 'Model parameters', link: '/starling/api/model_parameters' },
						{ label: 'Setup method', link: '/starling/api/setup_method' },
						{ label: 'Compute method', link: '/starling/api/compute_method' },
						{ label: 'Summary method', link: '/starling/api/summary_method' },
						{ label: 'Results attributes', link: '/starling/api/results_attributes' },
					],
				},
				{
					label: 'Dataset',
					items: [
						{ label: 'Home', link: '/starling/dataset/home' },
						{ label: 'NAIP', link: '/starling/dataset/naip' },
						{ label: 'SPOT', link: '/starling/dataset/spot' },
						{ label: 'venµs', link: '/starling/dataset/venµs' },
					],
				},
				{
					label: 'Metrics',
					items: [
						{ label: 'Consistency metrics', link: '/starling/metrics/consistency' },
						{ label: 'Distance metrics', link: '/starling/metrics/distance' },
						{ label: 'Correctness metrics', link: '/starling/metrics/correctness' },
					],
				},
				{
					label: 'Examples',
					items: [
						{ label: 'PyTorch models', link: '/starling/examples/pytorch_models' },
						{ label: 'TensorFlow models', link: '/starling/examples/tensorflow_models' },
						{ label: 'Duffuser models', link: '/starling/examples/diffuser_models' },
						{ label: 'Multi-image SR model', link: '/starling/examples/multi_image_sr_model' },
						{ label: 'Create Correctness animation', link: '/starling/examples/create_correctness_animation' },
					],
				},
				{
					label: 'Benchmark',
					items: [
						{ label: 'Benchmark', link: '/starling/benchmarks/benchmarks' },
					],
				},
			],
		}),
	],
});
