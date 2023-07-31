import React, { useState } from "react";
import * as tf from "@tensorflow/tfjs";
import { Tensor3D } from "@tensorflow/tfjs";
import * as mobilenet from "@tensorflow-models/mobilenet";

function Home() {
	const [imageURL, setImageURL] = useState<string | null>(null);
	const [predictions, setPredictions] = useState<any[]>([]);

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			const imageURL = URL.createObjectURL(file);
			setImageURL(imageURL);
			runPrediction(imageURL);
		}
	};

	const runPrediction = async (imageURL: string) => {
		const net = await mobilenet.load();
		const imageElement = document.createElement("img");
		imageElement.src = imageURL;
		imageElement.onload = async () => {
			const imgTensor = tf.browser.fromPixels(imageElement).toFloat();
			const preprocessedImg = tf.image.resizeBilinear(imgTensor, [224, 224]);
			const offset = tf.scalar(127.5);
			const normalizedImg = preprocessedImg.sub(offset).div(offset);
			const batchedImg = normalizedImg.reshape([-1, 224, 224, 3]) as Tensor3D;

			const predictions = await net.classify(batchedImg);
			setPredictions(predictions);
			imgTensor.dispose();
			preprocessedImg.dispose();
			normalizedImg.dispose();
			batchedImg.dispose();
		};
	};

	const handleRefreshClick = () => {
		window.location.reload();
	};

	return (
		<div className="container">
			<div className="row pb-4 pt-4">
				<h1 className="taupe text-center">Classificateur d'images</h1>
				<div className="mb-3 col-6">
					<label htmlFor="file" className="form-label taupe">
						<h3>Ajouter une image !</h3>
					</label>
					<input
						type="file"
						className="form-control"
						id="file"
						onChange={handleFileChange}
					/>
					<button
						className="btn btn-sm back-taupe blanc mb-3 mt-3"
						onClick={handleRefreshClick}>
						<h5>Recommencer</h5>
					</button>
				</div>
				<div className="col-3">
					{imageURL && (
						<div>
							<img src={imageURL} alt="Uploaded" className="img-fluid" />
							{predictions.length > 0 && (
								<div className="prediction-container">
									<h4 className="blanc">
										{predictions[0].className} (
										{predictions[0].probability.toFixed(2)})
									</h4>
								</div>
							)}
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default Home;
