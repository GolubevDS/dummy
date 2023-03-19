type Mods = Record<string, boolean>

export const classNames = (names: Array<string | undefined> = [], mods: Mods = {}): string => {
	return [
		...Object.values(names)
			.filter((name) => name),
		...Object.entries(mods)
			.filter(([_, value]) => Boolean(value))
			.map(([className]) => className),
	].join(' ');
};
