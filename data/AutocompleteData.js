import { CatalogueData } from './CatalogueData';

export const AutocompleteData = CatalogueData.map((data) => ({
	title: data.name,
}));

console.log();
