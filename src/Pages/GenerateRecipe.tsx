import React, { useEffect, useState } from "react";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
	apiKey: "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",
});
const openai = new OpenAIApi(configuration);

const headers = new Headers();
headers.append(
	"User-Agent",
	"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",
);

function GenerateRecipe() {
	const [gptRecipe, setGptRecipe] = useState("");
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setGptRecipe(
			"bonjour! J'aimerais une recette de cuisine, la voici : une recette berbere pour un plat principal, une seule recette stp",
		);

		callGpt();
	}, [loading]);

	async function callGpt() {
		try {
			const response = await openai.createCompletion({
				model: "text-davinci-003",
				prompt: gptRecipe,
				temperature: 0.2,
				max_tokens: 64,
				top_p: 1.0,
				frequency_penalty: 0.0,
				presence_penalty: 0.0,
				stop: ['"""'],
			});
			console.log(response);
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<div className="container">
			<div className="row">
				<h1 className="text-center taupe">Generer une nouvelle recette !</h1>
			</div>
		</div>
	);
}

export default GenerateRecipe;
