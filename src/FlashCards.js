import { useState } from "react";

import questions from "./data/questions";

// The component uses the useState hook to track selectedId, which represents the ID of the
// currently selected question. Initially, it's set to null.

// This function handles clicks on a flashcard element. Its job is to set selectedId to the ID
// of the question that was clicked. If a selected question is clicked again, selectedId is set
// to null, deselecting it.

// The component maps over the questions array, creating a <div> element for each question.

// Each <div> element is assigned the "selected" class if its ID matches selectedId,
// indicating that it's selected.

// When a <div> element is clicked, the handleClick function is called to update selectedId.

// The content displayed on the flashcard is either the question or the answer, depending on whether
// the flashcard is currently selected.

// The component returns JSX containing a <div> with the "flashcards" class, which contains all the flashcards.
// Each flashcard is represented by a <div> element that is clickable and highlights when selected.
// The text displayed on the flashcard is either the question or the answer, based on its selection status.

function FlashCards() {
	const [selectedId, setSelectedId] = useState(null);

	function handleClick(id) {
		setSelectedId(id !== selectedId ? id : null);
	}

	return (
		<div className="flashcards">
			{questions.map((question) => (
				<div
					key={question.id}
					onClick={() => handleClick(question.id)}
					className={question.id === selectedId ? "selected" : ""}
				>
					<p>
						{question.id === selectedId ? question.answer : question.question}
					</p>
				</div>
			))}
		</div>
	);
}

export default FlashCards;
