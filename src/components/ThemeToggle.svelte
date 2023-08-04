<script>
	import { onMount } from 'svelte';

	const STORAGE_KEY = 'theme';
	const DARK_PREFERENCE = '(prefers-color-scheme: dark)';

	const THEMES = {
		DARK: 'dark',
		LIGHT: 'light'
	};

	let currentTheme = THEMES.DARK;

	const prefersDarkThemes = () => window.matchMedia('(prefers-color-scheme: dark)').matches;

	const applyTheme = () => {
		const preferredTheme = prefersDarkThemes() ? THEMES.DARK : THEMES.LIGHT;
		currentTheme = localStorage.getItem(STORAGE_KEY) ?? preferredTheme;

		document.body.setAttribute('data-theme', currentTheme);
	};

	const toggleTheme = () => {
		const stored = localStorage.getItem(STORAGE_KEY);

		if (stored) {
			localStorage.removeItem(STORAGE_KEY);
		} else {
			localStorage.setItem(STORAGE_KEY, prefersDarkThemes() ? THEMES.LIGHT : THEMES.DARK);
		}

		applyTheme();
	};

	onMount(() => {
		applyTheme();
		window.matchMedia(DARK_PREFERENCE).addEventListener('change', applyTheme);
	});
</script>

<div>
	<button class="btn btn-sm bg-200" on:click={toggleTheme}>
		{currentTheme === THEMES.DARK ? 'Light mode' : 'Dark mode'}
	</button>
</div>
