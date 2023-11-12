import { FlashcardArray } from "react-quizlet-flashcard";
import { useContext } from "react";
import ImageContext from "../context/ImageContext";
import loader from "../assets/loader.gif"
import { jsPDF } from "jspdf";
import { BiSolidDownload } from "react-icons/bi"

function Flashcards() {
    const { questions, setQuestions, processing, setProcessing } = useContext(ImageContext);

    const cards = questions.map((question, index) => {
        return {
            id: index,
            frontHTML: question.question,
            backHTML: question.answer
        }
    });

    const handleDownload = () => {
        if (questions.length === 0) return alert("Please generate flashcards first")

        const doc = new jsPDF();

        doc.setFont('Courier', 'bold');
        doc.setFontSize(20);

        doc.text('Question & Answers', 10, 10);

        let y = 30;
        questions.forEach((question, index) => {
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(16);
            const ques = doc.splitTextToSize(`${index + 1}. ${question.question}`, doc.internal.pageSize.getWidth() - 20);
            if (y + ques.length * 10 > doc.internal.pageSize.getHeight() - 20) {
                doc.addPage();
                y = 30;
            }
            doc.text(ques, 10, y);
            y += ques.length * 10;

            doc.setFont('helvetica', 'normal');
            doc.setFontSize(14);
            const ans = doc.splitTextToSize(`Ans.  ${question.answer}`, doc.internal.pageSize.getWidth() - 30);
            if (y + ans.length * 10 > doc.internal.pageSize.getHeight() - 20) {
                doc.addPage();
                y = 30;
            }
            doc.text(ans, 10, y);
            y += ans.length * 10;
        });
        doc.save('questions-and-answers.pdf');
    }

    const content = processing ? <div className="flex flex-col gap-8 items-center"><img src={loader} alt="" className="w-[4rem]" /> <h1 className="capitalize">Please Hold On While We generate your content</h1></div> : "Click on Submit to generate flashcards"

    return <div className="max-w-max">
        {questions.length === 0 && <div className="h-[30rem] w-[22rem] bg-gray-200 flex items-center justify-center p-5 text-center rounded-md outline outline-gray-400">
            {content}
        </div>}
        {questions.length > 0 &&
            <div className="flex flex-col gap-2">
                <BiSolidDownload onClick={handleDownload} className="text-4xl p-2 hover:bg-black hover:bg-opacity-10 rounded-full" />

                <FlashcardArray cards={cards} frontContentStyle={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "1.2rem",
                    padding: "2rem",
                    textAlign: "center",
                    backgroundColor: "lightgoldenrodyellow",
                    color: "black",
                }}
                    backContentStyle={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "1.2rem",
                        padding: "2rem",
                        textAlign: "center",
                        backgroundColor: "lightgoldenrodyellow",
                        color: "black",
                    }}
                    cycle />
            </div>}
    </div>
}

export default Flashcards;
