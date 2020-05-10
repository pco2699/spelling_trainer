export default interface Word {
    id: string;
    word: string;
    correctCount: number;
    wrongCount: number;
    userId: number;
}