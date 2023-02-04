type Mods = Record<string, string | boolean>

export const classNames = (names: string[], mods: Mods = {}): string => {
	return [
		...names,
		...Object.entries(mods)
			.filter(([_, value]) => Boolean(value))
			.map(([className]) => className),
	].join(' ');
};
