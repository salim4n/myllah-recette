export default interface Recipe {
	id: number;
	title: string;
	ingredients?: string[];
	instructions?: string[];
	image: string;
	type?: string; //plat? entrée? dessert?
}
